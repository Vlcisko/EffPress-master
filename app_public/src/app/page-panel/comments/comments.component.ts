import { User } from './../../user';
import { Component, OnInit } from '@angular/core';

import { Page,Comment } from './../../page';

import { PagePanelDataService } from '../page-panel-data.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  userComment: string = '';

  page: Page;
  commentsList: Comment[];

  constructor(private pagePanelDataService : PagePanelDataService) {
    this.pagePanelDataService.pageChanged$.subscribe(page => {
      this.page = page;
      this.userComment = '';
      this.commentsList = this.page.getComments();
    });
  }



  ngOnInit() {

  }

  saveComment(): void {
   if (this.userComment){
    console.log("pdf:"+ window.turingLectureId + ", page: "+ window.turingSlideId + ", user: "+ window.turingUserId + ", created comment: "+ this.userComment);
    const newComment: Comment = new Comment(window.turingUserId, this.userComment);
    this.page.addComment(newComment);
    this.userComment = '';
   }
  }

}
