import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MomentModule } from 'angular2-moment';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';


import { AppComponent } from './app.component';
import { DemoTypeaheadFieldComponent } from './demo-typeahead-field/demo-typeahead-field.component';
import { DemoTypeaheadAsyncComponent } from './demo-typeahead-async/demo-typeahead-async.component';
import { DemoTypeaheadFormsComponent } from './demo-typeahead-forms/demo-typeahead-forms.component';
import { DemoTypeaheadGroupingComponent } from './demo-typeahead-grouping/demo-typeahead-grouping.component';
import { DemoTypeaheadItemTemplateComponent } from './demo-typeahead-item-template/demo-typeahead-item-template.component';
import { DemoTypeaheadStaticComponent } from './demo-typeahead-static/demo-typeahead-static.component';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

import { routerConfig } from './router.config';

import 'rxjs/add/observable/of';

@NgModule({
  declarations: [
    AppComponent,
    DemoTypeaheadFieldComponent,
    DemoTypeaheadAsyncComponent,
    DemoTypeaheadFormsComponent,
    DemoTypeaheadGroupingComponent,
    DemoTypeaheadItemTemplateComponent,
    DemoTypeaheadStaticComponent,
    HomeComponent,
    TopMenuComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routerConfig),
    MomentModule,
    TypeaheadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
