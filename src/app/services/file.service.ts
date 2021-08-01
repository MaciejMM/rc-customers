import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }
  URL = 'http://localhost:3000/api/file-upload';

  uploadFileOnServer(file) {
    return this.http.post(this.URL, file);
  }

  deleteFileFromServer(file){

  }
}
