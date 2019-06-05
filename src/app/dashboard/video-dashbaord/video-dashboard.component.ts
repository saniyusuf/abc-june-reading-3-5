import { Component, OnInit } from "@angular/core";
import { Video } from "../../types/types";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-video-dashboard",
  templateUrl: "./video-dashboard.component.html",
  styleUrls: ["./video-dashboard.component.css"]
})
export class VideoDashboardComponent implements OnInit {
  videoListData: Video[] = [];
  currentlySelectedVideo: Video;

  constructor(http: HttpClient) {
    http
      .get<Video[]>("https://api.angularbootcamp.com/videos")
      .subscribe(videoList => (this.videoListData = videoList));
  }

  ngOnInit() {}

  setSelectedVideo(video: Video) {
    this.currentlySelectedVideo = video;
  }
}
