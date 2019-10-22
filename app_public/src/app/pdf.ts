import { Page } from './page';

export class Pdf {
  _id: string;
  pages: Page[] = [];

  setPdfId(pdfId: string){
    this._id = pdfId;
  }
  addPage(page: Page): void {
    this.pages.push(page);
  }
  getPdfId(){
    return this._id;
  }
}

