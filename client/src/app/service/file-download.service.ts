import { Injectable } from '@angular/core';
import { HttpParams , HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor(private http: HttpClient) { }
  downloadFile(data) {
    // we would call the spring-boot service by passing it as paramter 
    const REQUEST_PARAMS = new HttpParams().set('fileName', data.fileName);
    const REQUEST_URI = '/server/download';
    // here the end point is download 
    return this.http.get(REQUEST_URI, {
      params: REQUEST_PARAMS,
      responseType: 'arraybuffer'
    })
  }
}
