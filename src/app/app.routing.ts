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

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '',
  //   component: FullLayoutComponent,
  //   data: {
  //     title: '主页'
  //   },
  //   children: [
  //     {
  //       path: 'home',
  //       loadChildren: './dashboard/dashboard.module#DashboardModule' 
  //     },
  //   ]
  // },
  { path: '', component: DashboardComponent, data: {title: '主页'}},
  { path: 'home', component: DashboardComponent, data: {title: '主页'}},
  { path: 'books/rank', component: BookRankComponent, data: {title: '排行榜'}},
  { path: 'books/hot', component: BookHotComponent, data: {title: '热门'}},
  { path: 'books/book-info', component: BookInfoComponent, data: {title: '书籍介绍'}},
  { path: 'books/history', component: BookHistoryComponent, data: {title: '阅读记录'}},
  { path: 'images/image-view', component: ImageViewComponent, data: {title: '美图鉴赏'}},
  { path: 'images/image-type', component: ImageTypeComponent, data: {title: '美图类别'}},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
