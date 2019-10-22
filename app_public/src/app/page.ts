// export class Page {
//     _id: string;
//     questionN: number;
//     testN: number;
//     commentsN: number;
//     ratingN: number;
//     rating: number;
//     ratingQ: number;
//     ratingL: number;
//     ratings: any;
//     pagePdfPosition: number;
// }

export class Page {
  _id: string;
  ratingDifficulty: Rating;
  ratingQualtiy: Rating;
  ratingLook: Rating;
  pagePdfPosition: number;
}

export class Rating {
  numLikes: number;
  numDislikes: number;
}
