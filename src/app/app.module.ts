import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatCardModule } from '@angular/material/card'


import { HomeModule } from './home/home.module';
import { DetailModule } from './detail/detail.module';

import { AppComponent } from './app.component';
// import { LoginPageDirective } from './pages/login-page.directive';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MaterialModule } from './shared/material/material.module';
import { RequisitionPageModule } from './pages/requisition-page/requisition-page.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { ReqsModule } from './pages/reqs/reqs.module'

// AoT requires an exported function for factories



const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader => new TranslateHttpLoader(http, './assets/i18n/', '.json');

@NgModule({
  declarations: [AppComponent, LoginPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    HomeModule,
    DetailModule,
    AppRoutingModule,
    MatCardModule,
    MaterialModule,
    NgxEchartsModule,
    ReqsModule,
    RequisitionPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [NgxEchartsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
