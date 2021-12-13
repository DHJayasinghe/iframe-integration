import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-legacy',
  templateUrl: './maintenance-legacy.component.html',
  styleUrls: ['./maintenance-legacy.component.css'],
})
export class MaintenanceLegacyComponent implements OnInit {
  public integrationUrl = '';
  
  private organizationId = 'externalorganizationId';
  private externalRef = '37453';

  constructor() {}

  ngOnInit() {
    this.integrationUrl = `http://localhost:4200/sign-in?externalRef=${this.externalRef}&organizationId=${this.organizationId}`;
  }
}
