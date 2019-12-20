import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {Router} from "@angular/router";
import {Mysite} from '~/app/shared/sites/mysite';
import {MySiteService} from '~/app/shared/sites/site-list.service';
import { TextField } from "tns-core-modules/ui/text-field";
@Component({
    selector: "Home",
    providers:[MySiteService],
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

    public siteList: Mysite[]=[];
    public tempList: Mysite[]=[];
    public searchList: Mysite[]=[];
    public show:boolean=false;
    public skey:string='';
    public len:number=0;
    public pos:number=0;
    @ViewChild("skeyTextField", { static: false }) skeyTextField: ElementRef;

    constructor(private router:Router,private siteService:MySiteService) {

    }

    ngOnInit(): void {
        this.siteService.load()
        .subscribe(
            loadedSites=>{
                loadedSites.forEach(
                   (siteObject)=>{
                       this.tempList.unshift(siteObject);
                   } 
                );
                this.len=this.tempList.length;
                console.log(this.len);
                this.siteList=[];
                for(var i=0;(i<this.len)&&(i<20);i=i+1) {
                    this.siteList.unshift(this.tempList[i]);
                }
            }
        );
        

        //console.log(this.tempList[0].sitename+':'+this.siteList[1]);
        
    }
    public toSite(e: Mysite) {
        this.router.navigate(['site'], { queryParams: { sitename: e.sitename, mainaddress:e.mainaddress,contact:e.contact,title:e.title,tel:e.tel,email:e.email,address:e.address,jobtitle:e.jobtitle} });
        console.log(e.sitename);

    }
    public showSearch(){
        if(this.show) {
            this.show=false;
            this.siteList=this.tempList;
        } else {this.show=true;}
    }
    public onSearch(){
        if (this.skey.trim() === "") {
            alert("Please enter a site name!");
            return;
          }
          let textField = <TextField>this.skeyTextField.nativeElement;
          textField.dismissSoftInput();
          this.searchList=[];
          this.skey=this.skey.trim();
          this.tempList.forEach(
            (site)=>{if(site.sitename.indexOf(this.skey)!==-1) {
                this.searchList.unshift(site);}

            }        
        );
        
        this.siteList=this.searchList;
       
        console.log(this.skey);
    }
    public onReturnPress(event:any) {
        this.onSearch();
    }
    private load() {
        this.pos+=20;
        if(this.pos<this.len) {
            this.siteList=[];
            for(var i=0;i<(this.len-this.pos)&&(i<20);i=i+1) {
                this.siteList.unshift(this.tempList[i+this.pos]);
            }
        }
    }
}
