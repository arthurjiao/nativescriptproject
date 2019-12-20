import { Component } from "@angular/core";
import { getLocaleMonthNames } from "@angular/common";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 
    constructor(){
        console.dir({
            type: "old",
            name:"sleep"
        });
    }
}
