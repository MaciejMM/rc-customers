import { FileUploadService } from '../../services/file.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {

  selectedFile: Blob;

  constructor(private http: HttpClient, private fileService: FileUploadService) { }

  ngOnInit() {
  }

  onFileSelect(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUploadFileToServer() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    this.fileService.uploadFileOnServer(formData).subscribe((response) => {
        console.log(response);
      })
  }
}
