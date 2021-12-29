import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IFCom } from 'ifcom';

@Component({
  selector: 'app-ifcom-integration',
  templateUrl: './ifcom-integration.component.html',
  styleUrls: ['./ifcom-integration.component.css'],
})
export class IfcomIntegrationComponent implements OnInit, AfterViewInit {
  public integrationUrl = '';

  @ViewChild('iframe', { static: false }) iframe: ElementRef;
  private ifcom: IFCom;

  constructor() {}

  ngOnInit() {
    this.integrationUrl = `http://localhost:4200/sign-in`;
  }

  ngAfterViewInit() {
    const nativeEl = this.iframe.nativeElement;
    this.ifcom = new IFCom({ subject: nativeEl });

    window.addEventListener(
      'message',
      (event) => {
        if (event.origin !== 'http://localhost:4200') return;

        console.log('Acknowledged back to origin: ');
        console.log(event.data);
        // // ...
      },
      false
    );
  }

  public sendLoginRequest() {
    this.ifcom
      .post({
        context: {
          user: { name: 'Milad' },
        },
      })
      .then((delivered) => {
        console.log('acknowledged message retrieval: ' + delivered);
        // post will return a promise which is resolved when the parent/child has received the message:
      })
      .catch((error) => {
        console.log(error);
        // if message is not delivered after a timeout, you'll get an error
      })
      .finally(() => {
        console.log('i have finished');
      });
  }
}
