import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Video } from "./types/types";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class VideoDataService {
  constructor(private _httpClient: HttpClient) {}

  getVideos(): Observable<Video[]> {
    return this._httpClient
      .get<Video[]>("https://api.angularbootcamp.com/videos")
      .pipe(
        map((videos)=> {
          return videos.slice(0, 3);
        })
      );
  }
}
