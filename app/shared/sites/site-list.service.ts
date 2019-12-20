import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {Mysite} from './mysite';

import { map,catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable ()
export class MySiteService {
    
    private baseUrl="https://tracktik-challenge.staffr.com/sites";
    constructor(private http: HttpClient){}


    public load() {
        return this.http.get(
           this.baseUrl,
           {headers:this.getCommonHeaders()})

            .pipe(
                map((data:any[])=>{
                    const siteList=data.sort(
                            (a,b)=>{return a.title>b.title?-1:1;
                            }
                        )
                        .map(


                            e=>new Mysite(e.contacts.main.firstName+'\'s '+e.title,e.address.street+', '+e.address.city,e.contacts.main.firstName+' '+e.contacts.main.lastName,
                            e.contacts.main.jobTitle,e.contacts.main.phoneNumber,e.contacts.main.email,e.contacts.main.address.street+', '+e.contacts.main.address.city,e.contacts.main.jobTitle)
                        )
                    return siteList;
                }),
                catchError(this.handleErrors)
            );
    }
    private getCommonHeaders() {
        return new HttpHeaders(
            {
                "Content-Type":"application/json",
                // "Authorization":"Kinvey "+Config.token,
            }
        );
    }
    private handleErrors(error:HttpErrorResponse) {
        console.log(JSON.stringify(error));
        return throwError(error);
    }
}
