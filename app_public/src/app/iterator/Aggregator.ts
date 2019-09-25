import { Iteratorr } from './Iterator';
import { Page } from './../page';

export interface Aggregator {
  // Retrieve an external iterator.
  getIterator(): Iteratorr<Page>;
}
