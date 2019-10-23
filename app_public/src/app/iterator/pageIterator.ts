import { Page } from '../page';
import { Iteratorr } from './Iterator';
import { Aggregator } from './Aggregator';



export class PageIterator implements Iteratorr<Page> {
  private pages: PagesCollection;

  private position: number = 0;

  constructor(pages: PagesCollection) {
    this.pages = pages;
  }

  public current(): Page {
    return this.pages.getItems()[this.position];
  }

  public selectedPageIndex(): number {
    return this.position;
  }

  public next(): Page {
    const item = this.pages.getItems()[this.position];
    this.position += 1;
    return item;
  }

  //vrati vyzadovanu stranu
  public getPage(page: number): Page {
    const item = this.pages.getItems()[page];
    this.position = page;
    return item;
  }

  public valid(): boolean {
    return this.position < this.pages.getCount();
  }

  public getNumberPages(): number {
    return this.pages.getCount();
  }

}

export class PagesCollection implements Aggregator {
  private items: Page[] = [];

  public getItems(): Page[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(item: Page): void {
    this.items.push(item);
  }

  public getIterator(): Iteratorr<Page> {
    return new PageIterator(this);
  }
}
