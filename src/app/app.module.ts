import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { LayoutComponent } from './client/shared/layout/layout.component';

// PrimeNG
import {MenubarModule} from 'primeng/menubar';
import { FooterComponent } from './client/shared/footer/footer.component';
import { BodyComponent } from './client/shared/body/body.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LayoutComponent,
        FooterComponent,
        BodyComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        MenubarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
