import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

// import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// ngx-bootstrap component
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RatingModule } from 'ngx-bootstrap/rating';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { LazyLoadImageModule } from 'ng-lazyload-image';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookRankComponent } from './books/rank/rank.component';
import { BookHotComponent } from './books/hot/hot.component';
import { BookHistoryComponent } from './books/history/history.component';
import { ImageViewComponent } from './images/image-view/image-view.component';
import { ImageTypeComponent } from './images/image-type/image-type.component';
import { BookInfoComponent } from './books/book-info/book-info.component';
import { BookReadComponent } from './books/book-read/book-read.component';
import { BookClassComponent } from './books/book-class/book-class.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    RatingModule.forRoot(),
    CollapseModule.forRoot(),
    LazyLoadImageModule,
    // ChartsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    DashboardComponent,
    BookRankComponent,
    BookHotComponent,
    BookHistoryComponent,
    ImageViewComponent,
    ImageTypeComponent,
    BookInfoComponent,
    BookReadComponent,
    BookClassComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
