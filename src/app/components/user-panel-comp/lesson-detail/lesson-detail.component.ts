import { HttpClient, HttpResponse } from '@angular/common/http';
import { Chapters } from './../../../models/UserModel';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from '../../../http-services/UserService';
import { FormsModule,ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { UploadFileService } from './UploadFileService';
@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css'],
  providers: [UploadFileService]

})
export class LessonDetailComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  courseChapter: Chapters;
  @Input()
  lessonId: number;
  @Output()
  isShowModalLessonDetails = new EventEmitter<boolean>();
  constructor(private userService : UserService, private uploadService: UploadFileService) { }

  ngOnInit() {
    this.getCourseChapter();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
     if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }


  closeLoginWindow()
  {
    this.isShowModalLessonDetails.emit(false);
  }

  getCourseChapter()
  {
    this.userService.getCourseChapter(this.lessonId).subscribe(coursechapter => {
      if(coursechapter != null){
        this.courseChapter = coursechapter;

      }
 });
  }
}
