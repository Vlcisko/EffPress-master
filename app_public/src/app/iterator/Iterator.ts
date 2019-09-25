export interface Iteratorr<T> {
  // Return the current element.
  current(): any;

  // Return the current element and move forward to next element.
  next(): T;

  setPage(page: Number): T;

  // Return the key of the current element.
  key(): number;

  // Checks if current position is valid.
  valid(): boolean;

}
