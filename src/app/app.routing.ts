import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

export const routes: Routes = [
  { path: '', component: DashboardComponent, data: {title: '主页'}},
  { path: 'home', component: DashboardComponent, data: {title: '主页'}},
  { path: 'books/rank', component: BookRankComponent, data: {title: '排行榜'}},
  { path: 'books/hot', component: BookHotComponent, data: {title: '热门'}},
  { path: 'books/book-info', component: BookInfoComponent, data: {title: '书籍介绍'}},
  { path: 'books/book-read', component: BookReadComponent, data: {title: '阅读书籍'}},
  { path: 'books/history', component: BookHistoryComponent, data: {title: '阅读记录'}},
  { path: 'books/book-class', component: BookClassComponent, data: {title: '书籍分类'}},
  { path: 'images/image-view', component: ImageViewComponent, data: {title: '美图鉴赏'}},
  { path: 'images/image-type', component: ImageTypeComponent, data: {title: '美图类别'}},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
