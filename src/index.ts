import {Observable, Observer} from 'rxjs';

export class Promise<T> {
  constructor(private executor: Function) {
    const promise = this;

    Observable.create(function subscribe(observer: Observer<T>) {
      const resolve = (val: T) => {
        observer.next(val);
        observer.complete();
      }
      executor(resolve, (err: any) => observer.error(err))
    }).subscribe({
      next: (val: T) => { Promise.resolve(val); },
      error: (err: any) => { Promise.reject(err); },
      complete: () => {},
    });
    // TODO: How to draw an Owl. (1) Draw a circle. (2) Draw the rest of the
    // freaking Owl.
  }

  static resolve<T>(value: T) {
    return new Promise(function () {});
  }

  static reject<T>(reason: any) {
    return new Promise(function () {});
  }

  then(onFulfilled: Function, onRejected: Function) {
    return this;//
  }
}

export default Promise;
