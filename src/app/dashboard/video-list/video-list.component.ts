import {Component, Input, OnInit} from '@angular/core';
import { Video } from '../../types/types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videoList: Video[];
  selectedVideoID: string;

  constructor() { }

  ngOnInit() {
  }

  selectVideo(video: Video) {
    this.selectedVideoID = video.id;
  }
}

