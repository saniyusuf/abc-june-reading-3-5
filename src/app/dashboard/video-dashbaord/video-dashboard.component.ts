import { Component, OnInit } from "@angular/core";
import { Video } from "../../types/types";
import { VideoDataService } from "../../video-data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-video-dashboard",
  templateUrl: "./video-dashboard.component.html",
  styleUrls: ["./video-dashboard.component.css"]
})
export class VideoDashboardComponent implements OnInit {
  videoListData: Observable<Video[]>;
  currentlySelectedVideo: Video;

  constructor(_videoService: VideoDataService) {
    this.videoListData = _videoService.getVideos();
  }

  ngOnInit() {}

  setSelectedVideo(video: Video) {
    this.currentlySelectedVideo = video;
  }
}
