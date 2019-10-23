import { Injectable } from '@angular/core';

import { Pdf } from './pdf';
import { Page, Rating, Comment } from './page';

import samplePdfJson from 'pdfs.json';

@Injectable({
  providedIn: 'root'
})
export class PdfJsonDataService {

  constructor() { }

  jsonFile = samplePdfJson;

  findPdfInJson(filename: string): Pdf {
    let pdfs = JSON.stringify(this.jsonFile);
    let pdfsjson = JSON.parse(pdfs);
    let pdfFromFile: Pdf = new Pdf;

    //najdenie pdf v Jsone
    pdfsjson.pdfs.forEach((pdf) => {
      if (pdf._id === filename) {
        pdfFromFile = this.loadPdfFromJson(pdf);
      }
    });
    return pdfFromFile;
  }

  loadPdfFromJson(jsonPdf: any): Pdf {
    let pdfFromJson: Pdf = new Pdf();

    pdfFromJson._id = jsonPdf._id;
    jsonPdf.pages.forEach((page, index) => {
      let tmpPage: Page = new Page(index);
      tmpPage.pdfId = page.pdfId;

      let tmpRating: Rating = new Rating();
      tmpRating.numLikes = page.ratingDifficulty.numLikes;
      tmpRating.numDislikes = page.ratingDifficulty.numDislikes;
      let tmpUsersRatedList: { userID: string, ratedAs: string }[] = [];
      page.ratingDifficulty.usersRatedList.forEach((rating, index) => {
        tmpUsersRatedList.push({userID: rating.userID, ratedAs: rating.ratedAs});
      });
      tmpRating.usersRatedList = tmpUsersRatedList;
      tmpPage.ratingDifficulty = tmpRating;

      let tmpRating2: Rating = new Rating();
      tmpRating2.numLikes = page.ratingQualtiy.numLikes;
      tmpRating2.numDislikes = page.ratingQualtiy.numDislikes;
      let tmpUsersRatedList2: { userID: string, ratedAs: string }[] = [];
      page.ratingQualtiy.usersRatedList.forEach((rating, index) => {
        tmpUsersRatedList2.push({userID: rating.userID, ratedAs: rating.ratedAs});
      });
      tmpRating2.usersRatedList = tmpUsersRatedList2;
      tmpPage.ratingQualtiy = tmpRating2;

      let tmpRating3: Rating = new Rating();
      tmpRating3.numLikes = page.ratingLook.numLikes;
      tmpRating3.numDislikes = page.ratingLook.numDislikes;
      let tmpUsersRatedList3: { userID: string, ratedAs: string }[] = [];
      page.ratingLook.usersRatedList.forEach((rating, index) => {
        tmpUsersRatedList3.push({userID: rating.userID, ratedAs: rating.ratedAs});
      });
      tmpRating3.usersRatedList = tmpUsersRatedList3;
      tmpPage.ratingLook = tmpRating3;

      page.comments.forEach((comment, index) => {
        let tmpComment: Comment = new Comment(comment.userID, comment.commentText);
        tmpPage.addComment(tmpComment);
      });
      pdfFromJson.addPage(tmpPage);
    });
    return pdfFromJson;
  }

  savePdfToJson(pdfJsonString: any){
    //ulozenie noveho pdf do suboru
    console.log(JSON.stringify(pdfJsonString));
  }

}
