import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-impersonation',
  templateUrl: './user-impersonation.component.html',
  styleUrls: ['./user-impersonation.component.css']
})
export class UserImpersonationComponent implements OnInit {
  public userId: string = "d014541a-952d-45fe-979e-8b255ae211fd";
  public organizationId: string = "D71CCA51-4B30-4746-2C4D-08D68D962CA9";
  constructor() { }

  ngOnInit() {
  }

}
