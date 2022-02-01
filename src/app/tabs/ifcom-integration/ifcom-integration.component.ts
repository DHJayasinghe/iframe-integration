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
          session: {
            company: {
              external_company_id: '0a62e73c-100c-4e9a-acbf-53b1f23cbca5',
            },
          },
          parameters: {
            action: null,
            external_property_id: null,
          },
          access_token:
            'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1MkJDQjM5MENGQkYxQ0IwNkU1QjhBNkQ0OEI2MDMzQ0Y2RkIxQzlSUzI1NiIsInR5cCI6IkpXVCIsIng1dCI6ImhTdkxPUXo3OGNzRzViaW0xSXRnTTg5dnNjayJ9.eyJuYmYiOjE2NDM2OTY1MjUsImV4cCI6MTY0MzczMjUyNSwiaXNzIjoiaHR0cHM6Ly9yZWx0ZXN0aWRlbnRpdHkucHJvcGVydHl0cmVlLmNvbSIsImF1ZCI6Imh0dHBzOi8vcmVsdGVzdGlkZW50aXR5LnByb3BlcnR5dHJlZS5jb20vcmVzb3VyY2VzIiwiY2xpZW50X2lkIjoicHQtd2ViIiwic3ViIjoiZGVmODBkOGItY2Q4NS00OTk2LWFmMWItNDQ2OWU1MTk0NDVmIiwiYXV0aF90aW1lIjoxNjQzNjk2NTI0LCJpZHAiOiJsb2NhbCIsInVzZXJuYW1lIjoicmVsdGVzdHV2aW5kdSIsImVtYWlsIjoicmVsdGVzdHBtQGdldG5hZGEuY29tIiwicHJlZmVycmVkX3VzZXJuYW1lIjoicmVsdGVzdHV2aW5kdSIsImp0aSI6IjBBRjNFNEQ3MjIyQ0EyN0YxNDVFQjA1QzUwOEE0QTA5Iiwic2lkIjoiNjMzNkU1OEY0OEEzQzMwRjc0MDUzNzAxMjVBNEQ4OTgiLCJpYXQiOjE2NDM2OTY1MjUsInNjb3BlIjpbIm9wZW5pZCIsInJlYWQiLCJwdHBybyIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.lLLQ-Q2gFlPej1TlOCJz7lH7AVbV6YrjhG7W8dYao5P6kLd-DuF1YnJrVQ7yV52AjVT7SC1UyOnU0EBx7LS6jw_bNfrrm1kiXBxonqK05g3x2nM_yPHUIC5pPVd4E1MXyBmjM_sFHcR2GJJqc7o5euia5CevJQyA4qur9Zx9OtkiVSme3bA1AvhgJ-DL8fPwRWpfEQnltISwBEmlfXAhvyLBja8luSTmK5rjKVfNg1Ok_1uV9-1hWVRkBTKtKZF99ds9QJ1jOJFzxTmSHFFl0JGnkP5E7ybMVvPLF-ExhgvI6pEpqkbdQ2wXz0tl5y7-zF9JVTK7eP6-SjDGNFPYXA',
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
    // this.ifcom
    //   .post({
    //     context: {
    //       user: { name: 'Milad' },
    //     },
    //   })
    //   .then((delivered) => {
    //     console.log('acknowledged message retrieval: ' + delivered);
    //     // post will return a promise which is resolved when the parent/child has received the message:
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // if message is not delivered after a timeout, you'll get an error
    //   })
    //   .finally(() => {
    //     console.log('i have finished');
    //   });
  }

  public sendPropertyRequest() {
    this.ifcom
      .post({
        context: {
          session: {
            company: {
              external_company_id: '0a62e73c-100c-4e9a-acbf-53b1f23cbca5',
            },
          },
          parameters: {
            action: 'new maintenance request',
            external_property_id: 'ffaf7b00-9647-487b-85d4-f76d5472e44b',
          },
          access_token:
            'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1MkJDQjM5MENGQkYxQ0IwNkU1QjhBNkQ0OEI2MDMzQ0Y2RkIxQzlSUzI1NiIsInR5cCI6IkpXVCIsIng1dCI6ImhTdkxPUXo3OGNzRzViaW0xSXRnTTg5dnNjayJ9.eyJuYmYiOjE2NDM2OTY1MjUsImV4cCI6MTY0MzczMjUyNSwiaXNzIjoiaHR0cHM6Ly9yZWx0ZXN0aWRlbnRpdHkucHJvcGVydHl0cmVlLmNvbSIsImF1ZCI6Imh0dHBzOi8vcmVsdGVzdGlkZW50aXR5LnByb3BlcnR5dHJlZS5jb20vcmVzb3VyY2VzIiwiY2xpZW50X2lkIjoicHQtd2ViIiwic3ViIjoiZGVmODBkOGItY2Q4NS00OTk2LWFmMWItNDQ2OWU1MTk0NDVmIiwiYXV0aF90aW1lIjoxNjQzNjk2NTI0LCJpZHAiOiJsb2NhbCIsInVzZXJuYW1lIjoicmVsdGVzdHV2aW5kdSIsImVtYWlsIjoicmVsdGVzdHBtQGdldG5hZGEuY29tIiwicHJlZmVycmVkX3VzZXJuYW1lIjoicmVsdGVzdHV2aW5kdSIsImp0aSI6IjBBRjNFNEQ3MjIyQ0EyN0YxNDVFQjA1QzUwOEE0QTA5Iiwic2lkIjoiNjMzNkU1OEY0OEEzQzMwRjc0MDUzNzAxMjVBNEQ4OTgiLCJpYXQiOjE2NDM2OTY1MjUsInNjb3BlIjpbIm9wZW5pZCIsInJlYWQiLCJwdHBybyIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.lLLQ-Q2gFlPej1TlOCJz7lH7AVbV6YrjhG7W8dYao5P6kLd-DuF1YnJrVQ7yV52AjVT7SC1UyOnU0EBx7LS6jw_bNfrrm1kiXBxonqK05g3x2nM_yPHUIC5pPVd4E1MXyBmjM_sFHcR2GJJqc7o5euia5CevJQyA4qur9Zx9OtkiVSme3bA1AvhgJ-DL8fPwRWpfEQnltISwBEmlfXAhvyLBja8luSTmK5rjKVfNg1Ok_1uV9-1hWVRkBTKtKZF99ds9QJ1jOJFzxTmSHFFl0JGnkP5E7ybMVvPLF-ExhgvI6pEpqkbdQ2wXz0tl5y7-zF9JVTK7eP6-SjDGNFPYXA',
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
}
