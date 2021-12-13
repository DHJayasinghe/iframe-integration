import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css'],
})
export class MaintenanceComponent implements OnInit {
  public loading = true;
  public integrationUrl = '';
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    // STEP1: Authentication, this is to call from a secure Backend API
    // externalRef for uname: 'chathurangajrcsoftwarepm@yahoo.com' is 'externaluserref'
    this.doAuthenticationRequestToBnA(
      'externaluserref',
      'Jrc@1234',
      '62b09e58-cccc-4bd2-8f4b-05dabb5c40da',
      'externalorganizationId'
    ).subscribe((authResponse) =>
      // STEP2: Store Session: this is also to call from a secure Backend API
      this.doSessionStoreRequestToBnA(authResponse).subscribe((response) => {
        this.loading = false;

        // getting this response.sessionId to front-end on page load, and passing it to iframe is the real deal !!!
        this.integrationUrl =
          'http://localhost:4200/sign-in?sessionId=' + response.sessionId;
      })
    );
  }

  private doAuthenticationRequestToBnA(
    username: string,
    password: string,
    client_id: string,
    organizationRef: string
  ) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', username)
      .set('password', password)
      .set('client_id', client_id)
      .set('external_organization_ref', organizationRef);

    return this.httpClient
      .post<AuthenticationResponse>(
        environment.bnaIdpUrl + '/connect/token',
        body,
        { headers }
      )
      .pipe(
        map((d) => {
          d.client_id = client_id;
          return d;
        })
      );
  }

  private doSessionStoreRequestToBnA(authResponse: AuthenticationResponse) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + authResponse.access_token,
    });
    return this.httpClient.post<{ sessionId: number }>(
      environment.bnaIdpUrl + '/session',
      {
        client_id: authResponse.client_id,
        refresh_token: authResponse.refresh_token,
      },
      { headers }
    );
  }
}

export interface AuthenticationResponse {
  access_token: string;
  refresh_token: string;
  client_id: string;
}
