import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderToolbarComponent } from './header/header-toolbar/header-toolbar.component';
import { HeaderTitleComponent } from './header/header-title/header-title.component';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { DropdownModule} from 'primeng/dropdown';

import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

import { HttpClientModule } from '@angular/common/http';
import { BasicDataComponent } from './content/basic-data/basic-data.component';
import { SalaryIndustryComponent } from './content/salary-industry/salary-industry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderToolbarComponent,
    HeaderTitleComponent,
    HeaderComponent,
    ContentComponent,
    BasicDataComponent,
    SalaryIndustryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    SelectButtonModule,
    FormsModule,
    DropdownModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
