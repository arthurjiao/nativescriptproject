import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SiteRoutingModule } from "./site-routing.module";
import { SiteComponent } from "./site.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,        
        SiteRoutingModule
    ],
    declarations: [
        SiteComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SiteModule { }
