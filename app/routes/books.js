import Route from '@ember/routing/route';
import { Promise as EmberPromise } from 'rsvp';

function wait(delay) {
  return new EmberPromise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, delay);
  });
}

export default class BooksRoute extends Route {
  async model() {
    return await wait(1000);
  }
}
