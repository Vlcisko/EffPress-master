import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating-likes',
  templateUrl: './rating-likes.component.html',
  styleUrls: ['./rating-likes.component.scss']
})
export class RatingLikesComponent implements OnInit {

  @Input() likes: number;
  @Input() dislikes: number;
  @Input() description: string;
  @Input() size: string;

  constructor() { }

  ngOnInit() {
  }

  likeClicked(): void {
    console.log("user: "+ window.turingUserId + " clicked Like");
  }

  disLikeClicked(): void {
    console.log("user: "+ window.turingUserId + " clicked Dislike");
  }
}
