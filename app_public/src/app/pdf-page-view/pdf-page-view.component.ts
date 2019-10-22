import { element } from 'protractor';
import { Pdf } from './../pdf';
import { Page, Rating, Comment } from './../page';
import { PagesCollection } from './../iterator/pageIterator';
import { Iteratorr } from './../iterator/Iterator';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap} from '@angular/router';
//import { PagesDataService } from '../pages-data.service';
import { PagePanelDataService } from '../page-panel/page-panel-data.service';

import {PdfjsControl, PdfjsGroupControl } from '@hhangular/pdfjs';

import samplePdfJson from 'pdf.json';

@Component({
  selector: 'app-pdf-page-view',
  templateUrl: './pdf-page-view.component.html',
  styleUrls: ['./pdf-page-view.component.scss']
})

export class PdfPageViewComponent implements OnInit {

  public page: Page;
  public pageIterator: Iteratorr<Page>;
  public collection: PagesCollection;

  pdfjsGroupControl = new PdfjsGroupControl();
  pdfjsControl = new PdfjsControl();


  pdfControls = {
    pdfjsGroupControl: this.pdfjsGroupControl,
    pageIterator: this.pageIterator,
    pdfjsControl: this.pdfjsControl
  };

  pdf: Pdf;

  pdfFromJson: Pdf = new Pdf();

  constructor(
    private route: ActivatedRoute,
    //private pagesDataService: PagesDataService,
    private pagePanelDataService: PagePanelDataService
  ) {
  }


  ngOnInit() {
    window.turingUserId = "Tomas";
    let pdfs = JSON.stringify(samplePdfJson);
    let pdfsjson = JSON.parse(pdfs);

    //citanie pdf z json suboru
    pdfsjson.pdfs.forEach(pdf => {
      if (pdf._id === 'pdf.pdf') {
        this.pdfFromJson._id = pdf._id;
        pdf.pages.forEach((page, index) => {
          let tmpPage: Page = new Page(index);
          tmpPage.pdfId = page.pdfId;

          let tmpRating: Rating = new Rating();
          tmpRating.numLikes = page.ratingDifficulty.numLikes;
          tmpRating.numDislikes = page.ratingDifficulty.numDislikes;
          let tmpUsersRatedList: { userID: string, ratedAs: string }[] = [];
          tmpPage.ratingDifficulty.usersRatedList.forEach((rating, index) => {
            tmpUsersRatedList.push({userID: rating.userID, ratedAs: rating.ratedAs});
          });
          tmpRating.usersRatedList = tmpUsersRatedList;
          tmpPage.ratingDifficulty = tmpRating;

          tmpRating.numLikes = page.ratingQualtiy.numLikes;
          tmpRating.numDislikes = page.ratingQualtiy.numDislikes;
          tmpPage.ratingQualtiy.usersRatedList.forEach((rating, index) => {
            tmpUsersRatedList.push({userID: rating.userID, ratedAs: rating.ratedAs});
          });
          tmpRating.usersRatedList = tmpUsersRatedList;
          tmpPage.ratingQualtiy = tmpRating;


          tmpRating.numLikes = page.ratingLook.numLikes;
          tmpRating.numDislikes = page.ratingLook.numDislikes;
          tmpPage.ratingLook.usersRatedList.forEach((rating, index) => {
            tmpUsersRatedList.push({userID: rating.userID, ratedAs: rating.ratedAs});
          });
          tmpRating.usersRatedList = tmpUsersRatedList;
          tmpPage.ratingLook = tmpRating;
          console.log(tmpPage.comments);
          tmpPage.comments.forEach((comment, index) => {
            console.log(tmpPage.comments);
            let tmpComment: Comment = new Comment(comment.userID, comment.commentText);
            tmpPage.addComment(tmpComment);
          });
          this.pdfFromJson.addPage(tmpPage);
        });
      }
    });

    this.collection = new PagesCollection();
    this.pageIterator = this.collection.getIterator();

    this.pdfjsControl.load('assets/lectures/psi_03_manazment-poziadaviek.pdf', true).then((numPages) => {
      this.pdf = this.pdfFromJson;
      console.log(this.pdf);
      window.turingLectureId = this.pdf.getPdfId();

      for (let i = 0; i <= this.pdf.pages.length; i++) {
        let page: Page = this.pdf.pages[i];
        if (page) {
          this.collection.addItem(page);
        }
      }
      this.page = this.pageIterator.current();
      window.turingSlideId = this.page._id;
      this.pagePanelDataService.setSubject(this.page);
    });

    /*this.pdfjsControl.load('assets/lectures/psi_03_manazment-poziadaviek.pdf', true).then((numPages) => {
      this.pdf = new Pdf();
      this.pdf.setPdfId("psi_03_manazment-poziadaviek.pdf");
      window.turingLectureId = this.pdf.getPdfId();

      // //inicializacia iteratora
      this.initialiseIterator(numPages, this.pdf, () => {
        this.page = this.pageIterator.current();
        window.turingSlideId = this.page._id;
        this.pagePanelDataService.setSubject(this.page);
        //console.table(this.page);
      });
    });*/

    this.pdfjsGroupControl.selectControl(this.pdfjsControl);

    this.pdfControls.pdfjsGroupControl = this.pdfjsGroupControl;
    this.pdfControls.pageIterator = this.pageIterator;
  }

  async initialiseIterator(numPages: number, pdf: Pdf, callback) {
    for (let i = 0; i <= numPages; i++) {
      const page: Page = new Page(i);
      /*let rating = {
        numLikes: i,
        numDislikes: i,
      }
      let comment = {
        userID: window.turingUserId,
        commentText: "comment "+i
      }
      let page =  {
        _id: 'page' + i,
        pdfId: pdf.getPdfId(),
        ratingDifficulty: rating,
        ratingQualtiy: rating,
        ratingLook: rating,
        pagePdfPosition: i,
        comments: [comment]
      };*/
      if (page) {
        this.collection.addItem(page);
        pdf.addPage(page);
      }
    }
    callback();
  }


  //event zmeny page z child componentu- pdf-viewer-hhanguler
  onPageChange(newPage: number){
    if (newPage){
      this.page = this.pageIterator.setPage(newPage);
      this.pagePanelDataService.emitPage(this.page);
    }
  }

  setPage(pageIndex: number){
    this.page = this.pageIterator.setPage(pageIndex);
    this.pagePanelDataService.emitPage(this.page);
  }
}
