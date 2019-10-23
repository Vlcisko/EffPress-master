import { Component, OnInit, Input } from '@angular/core';
import { Rating, Page } from './../page';

@Component({
  selector: 'app-rating-likes',
  templateUrl: './rating-likes.component.html',
  styleUrls: ['./rating-likes.component.scss']
})
export class RatingLikesComponent implements OnInit {

  @Input() ratingType: Rating;
  @Input() description: string;
  @Input() size: string;

  userId: string = window.turingUserId;
  actionLike: string = "+";
  actionDislike: string = "+";

  constructor() { }

  ngOnInit() {
    console.log(this.ratingType.getUserRating(this.userId));
    if (!this.ratingType.canLike(window.turingUserId)) {
      this.actionDislike = "";
      this.actionLike = "-";
    }
    if (!this.ratingType.canDislike(window.turingUserId)) {
      this.actionDislike = "-";
      this.actionLike = "";
    }
  }

  likeClicked(): void {
    if(this.ratingType.addLike(this.userId)){
      this.actionLike = "-";
      this.actionDislike = "";
      console.log("pdf:"+ window.turingLectureId + ", page: "+ window.turingSlideId + ", user: "+ this.userId + ", clicked Like, "+ this.description);
    }else{
      this.actionLike = "+";
      this.actionDislike = "+";
      console.log("pdf:"+ window.turingLectureId + ", page: "+ window.turingSlideId + ", user: "+ this.userId + ", unclicked Like, "+ this.description);
    }
  }

  disLikeClicked(): void {
    if(this.ratingType.addDislike(this.userId)){
      this.actionLike = "";
      this.actionDislike = "-";
      console.log("pdf:"+ window.turingLectureId + ", page: "+ window.turingSlideId + ", user: "+ this.userId + ", clicked Dislike, "+ this.description);
    }else{
      this.actionLike = "+";
      this.actionDislike = "+";
      console.log("pdf:"+ window.turingLectureId + ", page: "+ window.turingSlideId + ", user: "+ this.userId + ", unclicked Dislike, "+ this.description);
    }
  }

}
