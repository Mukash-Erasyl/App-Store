import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from './options/model.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BaselComponent } from './basel/basel.component';
import { FooterComponent } from './childc/footer/footer.component';
import { ContentComponent } from './childc/content/content.component';
import { SideBarComponent } from './childc/side-bar/side-bar.component';
import { DetailComponent } from './childc/detail/detail.component';
import { UpdateComponent } from './childc/update/update.component';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CreateComponent } from './childc/create/create.component';




@NgModule({
  declarations: [
    AppComponent,
    BaselComponent,
    FooterComponent,
    ContentComponent,
    SideBarComponent,
    DetailComponent,
    UpdateComponent,
    CreateComponent, 

    
  ],
  imports: [BrowserModule, AppRoutingModule, ModelModule , FormsModule], providers: [],
  bootstrap: [AppComponent]
  })
  export class AppModule { }

