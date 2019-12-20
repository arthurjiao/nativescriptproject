import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from "@angular/router";
import {Mysite} from '~/app/shared/sites/mysite';

@Component({
  selector: 'ns-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  private sitename:string;
  private mainaddress:string;
  private contact:string;
  private title:string;
  private tel:string;
  private email:string;
  private address:string;
  private jobtitle:string;
        // public title:string,public tel:string
        // ,public email:string,public address:string,public jobtitle:string
  constructor(private router:Router,private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.sitename = this.route.snapshot.queryParams['sitename'];
    this.mainaddress = this.route.snapshot.queryParams['mainaddress'];
    this.contact = this.route.snapshot.queryParams['contact'];
    this.title = this.route.snapshot.queryParams['title'];
    this.tel = this.route.snapshot.queryParams['tel'];
    this.email = this.route.snapshot.queryParams['email'];
    this.address = this.route.snapshot.queryParams['address'];
    this.jobtitle = this.route.snapshot.queryParams['jobtitle'];
    console.log('come here'+this.sitename+' '+this.jobtitle);
  }
  public goBack() {
    this.router.navigate(['home']);
    console.log('back home');
}
}
