import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Video } from '../../types/types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videoList: Video[];
  @Output() onVideoSelected = new EventEmitter<Video>();

  selectedVideoID: string;

  constructor() { }

  ngOnInit() {
  }

  selectVideo(video: Video) {
    this.selectedVideoID = video.id;
    this.onVideoSelected.emit(video);
  }
}

