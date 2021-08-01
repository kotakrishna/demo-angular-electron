import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }
  homeList = [
    { title: "Requisition", link: "req" },
    { title: "Results Inquiry", link: "res" },
    { title: "WorkSheets", link: 'wk' },
    { title: "Result Entry", link: 'resEnt' },
    { title: " Verify/Approved Results", link: 'approved' },
    { title: " Accounts Received/Billing", link: 'account' },
    { title: "Patient", link: "patient" },
    { title: "Analytics", link: "analytics" },
    { title: "Support", link: "support" },
    { title: " Client Reg", link: "clientReg" }
  ]

}
