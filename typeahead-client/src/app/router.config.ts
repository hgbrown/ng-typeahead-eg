import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoTypeaheadStaticComponent } from './demo-typeahead-static/demo-typeahead-static.component';
import { DemoTypeaheadItemTemplateComponent } from './demo-typeahead-item-template/demo-typeahead-item-template.component';
import { DemoTypeaheadFieldComponent } from './demo-typeahead-field/demo-typeahead-field.component';
import { DemoTypeaheadAsyncComponent } from './demo-typeahead-async/demo-typeahead-async.component';
import { DemoTypeaheadFormsComponent } from './demo-typeahead-forms/demo-typeahead-forms.component';
import { DemoTypeaheadGroupingComponent } from './demo-typeahead-grouping/demo-typeahead-grouping.component';

export const routerConfig: Route[] =[
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'typeahead',
    children: [
      {
        path: '',
        redirectTo: 'static',
        pathMatch: 'full'
      },
      {
        path: 'static',
        component: DemoTypeaheadStaticComponent
      },
      {
        path: 'template',
        component: DemoTypeaheadItemTemplateComponent
      },
      {
        path: 'field',
        component: DemoTypeaheadFieldComponent
      },
      {
        path: 'async',
        component: DemoTypeaheadAsyncComponent
      },
      {
        path: 'forms',
        component: DemoTypeaheadFormsComponent
      },
      {
        path: 'grouping',
        component: DemoTypeaheadGroupingComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
