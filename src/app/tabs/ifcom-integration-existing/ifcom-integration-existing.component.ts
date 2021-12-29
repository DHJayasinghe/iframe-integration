import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IFCom } from 'ifcom';

@Component({
  selector: 'app-ifcom-integration-existing',
  templateUrl: './ifcom-integration-existing.component.html',
  styleUrls: ['./ifcom-integration-existing.component.css'],
})
export class IfcomIntegrationExistingComponent
  implements OnInit, AfterViewInit
{
  @ViewChild('iframe', { static: false }) iframe: ElementRef;
  private ifcom: IFCom;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const nativeEl = this.iframe.nativeElement;

    this.ifcom = new IFCom({ subject: nativeEl });

    // authentication for username: chathurangajrcsoftwarepm@yahoo.com
    this.ifcom
      .post({
        context: {
          session: {
            company: {
              external_company_id: 'externaluserref_externalorgid',
            },
          },
          parameters: {
            action: null,
            external_property_id: null,
          },
          access_token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJleHRlcm5hbHVzZXJyZWYiLCJuYW1lIjoiSm9obiBEb2UifQ.fz-9XgKiRMhbCf6nqvSESOjj-LFJYSIn9xWd6oI1T88',
        },
      })
      .then((delivered) => {
        console.log('Received message acknowledgement to origin:');
        console.log(delivered);
        // post will return a promise which is resolved when the parent/child has received the message:
      })
      .catch((error) => {
        console.log(error);
        // if message is not delivered after a timeout, you'll get an error
      });
  }

  public sendSampleRequest() {
    // actual property id: a99eb2f2-f750-439c-08f5-08d6010261c7
    this.ifcom
      .post({
        context: {
          session: {
            company: {
              external_company_id: 'externaluserref_externalorgid',
            },
          },
          parameters: {
            action: 'new maintenance request',
            external_property_id: 'externalpropertyid',
          },
        },
      })
      .then((delivered) => {
        console.log('Received message acknowledgement to origin:');
        console.log(delivered);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
