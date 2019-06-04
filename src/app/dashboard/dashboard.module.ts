import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDashboardComponent } from './video-dashbaord/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import {RouterModule, Routes} from '@angular/router';

const childRoutes: Routes = [
  {
    path: "",
    component: VideoDashboardComponent,
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [VideoDashboardComponent, VideoListComponent, VideoPlayerComponent, StatFiltersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes)
  ]
})
export class DashboardModule { }
