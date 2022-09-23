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
  public userId: number = 1;

  @ViewChild('iframe', { static: false }) iframe: ElementRef;
  private ifcom: IFCom;

  constructor() {}

  ngOnInit() {
    this.integrationUrl = `http://localhost:4200`;
  }

  ngAfterViewInit() {
    const nativeEl = this.iframe.nativeElement;
    this.ifcom = new IFCom({ subject: nativeEl });
    // this.sendLoginRequest();

    window.addEventListener(
      'message',
      (event) => {
        if (
          ![
            'http://localhost:4200',
            'http://localhost:4300',
            'https://localhost:44354',
          ].some((origin) => origin === event.origin)
        )
          return;

        console.log('Acknowledged back to origin: ');
        // console.log(event.data);
        // // ...
      },
      false
    );
  }

  public sendLoginRequest() {
    const request = this.getNewUser(Number(this.userId));
    // console.log(request.access_token);
    // console.log(this.getSubject(request.access_token));
    this.ifcom
      .post({
        context: request,
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

  private getNewUser(option: number) {
    if (option === 1) {
      return {
        session: {
          company: {
            external_company_id: '0a62e73c-100c-4e9a-acbf-53b1f23cbca5',
          },
        },
        parameters: {
          action: null,
          external_property_id: null,
        },
        // access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZWY4MGQ4Yi1jZDg1LTQ5OTYtYWYxYi00NDY5ZTUxOTQ0NWYiLCJuYW1lIjoiSm9obiBEb2UifQ.9XUatEg6JiQn8BEYZOxGX672cETpl6oDrA93kCOM8mo',
      };
    } else if (option == 2) {
      return {
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
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkNGVjMjMyOS02NGM4LTQ0MzctYjkxMi1iNzk0Mjc1NTJmNGIiLCJuYW1lIjoiSm9obiBEb2UifQ.K448ue7dvkBPvR4B9Q3VFUUbrtlak05Qwzllp4Wws6I',
      };
    } else if (option == 3) {
      // for similar user under multiple organization scenario (userid: 0b3d2857-e59f-4231-b9df-b3e42332f4c3,orgId: 8FAA48A4-2C88-455E-83BB-08D7D23697B7 )
      return {
        session: {
          company: {
            external_company_id: '8FAA48A4-2C88-455E-83BB-08D7D23697B7',
          },
        },
        parameters: {
          action: null,
          external_property_id: null,
        },
        access_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwYjNkMjg1Ny1lNTlmLTQyMzEtYjlkZi1iM2U0MjMzMmY0YzMiLCJuYW1lIjoiSm9obiBEb2UifQ.qfv0dr7poxAFThLdTZtGjAjltUWC0ack6A6MEjXQl3w',
      };
    } else if (option == 4) {
      // (userid: 0b3d2857-e59f-4231-b9df-b3e42332f4c3,orgId: C0DE833A-57DE-40C3-B341-DA8A315FEC27 )
      return {
        session: {
          company: {
            external_company_id: 'vaultrestgdemoorg',
          },
        },
        parameters: {
          action: null,
          external_property_id: null,
        },
        access_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMjMzOCIsIm5hbWUiOiJKb2huIERvZSJ9.aAlGTAVjW8hFPSbiKgZpzVcL_-igjzaOUSzxdsXDql0',
      };
    }
  }

  private getSubject(token: string) {
    if (!token) return null;
    if (token.split('.').length != 3) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload?.sub;
  }
}
