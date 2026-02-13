import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PostDashboardComponent } from './shared/components/post-dashboard/post-dashboard.component';
import { PostCardComponent } from './shared/components/post-card/post-card.component';
import { SinglePostComponent } from './shared/components/single-post/single-post.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { MaterialModule } from './shared/components/material/material.module';
import { AppRoutingModule } from "./app-routing.module";
import {HttpClientModule} from '@angular/common/http';
import { SummaryPipe } from './shared/pipes/summary.pipe'
import { ReactiveFormsModule } from '@angular/forms';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostDashboardComponent,
    PostCardComponent,
    SinglePostComponent,
    PostFormComponent,
    SummaryPipe,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
