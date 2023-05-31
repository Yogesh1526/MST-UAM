import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { WebHttpClient, WebHttpClientCreator } from './shared/webhttp/WebHttpClient';
import { MaterialModule } from './material.module';
import { JwtInterceptor } from './interceptors/jwt/jwt.interceptors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    PagesModule,RouterModule,PagesRoutingModule,
    BrowserAnimationsModule,MaterialModule,
    FlexLayoutModule,FormsModule,ReactiveFormsModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: WebHttpClient, useFactory: WebHttpClientCreator, deps: [HttpClient] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
