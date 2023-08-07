import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { provideRouter } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ChoreLogsComponent } from './chore-logs/chore-logs.component';

import routeConfig from '../app/routes';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterLink,
        RouterOutlet,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
    ],
    declarations: [
        AppComponent,
        ChoreLogsComponent,
    ],
    providers: [
        provideRouter(routeConfig)
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }