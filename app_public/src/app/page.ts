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

export class Rating {
  numLikes: number = 0;
  numDislikes: number = 0;
  usersRatedList: { userID: string, ratedAs: string }[] = [];

  addLike(userID: string): boolean {
    //ak uz hodnotil
    if(this.getUserRating(userID)) {
      const user = this.getUserRating(userID);
      //ak hodnotil ako like odstrani hodnotenie
      if (user.ratedAs === "like"){
        this.usersRatedList = this.usersRatedList.filter(item => item !== this.getUserRating(userID));
        this.numLikes--;
        return false;
      }
    }else { // ak nehodnotil, prida hodnotu
      this.usersRatedList.push({userID: userID, ratedAs: "like"});
      this.numLikes++;
      return true;
    }
  }

  addDislike(userID: string): boolean {
    //ak uz hodnotil
    if(this.getUserRating(userID)) {
      const user = this.getUserRating(userID);
      //ak hodnotil ako like odstrani hodnotenie
      if (user.ratedAs === "dislike"){
        this.usersRatedList = this.usersRatedList.filter(item => item !== this.getUserRating(userID));
        this.numDislikes--;
        return false;
      }
    }else { // ak nehodnotil, prida hodnotu
      this.usersRatedList.push({userID: userID, ratedAs: "dislike"});
      this.numDislikes++;
      return true;
    }
  }

  getUserRating(userID: string): any {
    return this.usersRatedList.find(x => x.userID == userID);
  }


  canLike(userID: string) {
    let can = true;
    if(this.getUserRating(userID)) {
      can = !(this.getUserRating(userID).ratedAs === "like");
    }
    return can;
  }

  canDislike(userID: string) {
    let can = true;
    if(this.getUserRating(userID)) {
      can = !(this.getUserRating(userID).ratedAs === "dislike");
    }
    return can;
  }
}

export class Page {
  _id: string;
  pdfId: string;
  ratingDifficulty: Rating;
  ratingQualtiy: Rating;
  ratingLook: Rating;
  pagePdfPosition: number;
  comments: Comment[] = [];

  constructor(postition: number) {
    this._id = "page" + postition;
    this.ratingDifficulty = new Rating();
    this.ratingQualtiy = new Rating();
    this.ratingLook = new Rating();
    this.pagePdfPosition = postition;
  }

  addComment(comment: Comment) {
    this.comments.push(comment);
  }

  getComments(): Comment[]{
    return this.comments;
  }

}

export class Comment {
  userID: string;
  commentText: string;

  constructor(userID: string, commentText:string) {
    this.userID = userID;
    this.commentText = commentText;
  }
}
