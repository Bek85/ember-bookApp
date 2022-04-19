import Service from '@ember/service';
// import ENV from 'book-app/config/environment';
import { getOwner } from '@ember/application';

export default class DataServiceService extends Service {
  baseUrl = getOwner(this).application.backEndUrl;

  async createAuthor(author) {
    return await fetch(`${this.baseUrl}/authors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(author),
    });
  }

  async deleteAuthor(id) {
    return await fetch(`${this.baseUrl}/authors/${id}`, {
      method: 'DELETE',
    });
  }

  async editAuthor(author) {
    return await fetch(`${this.baseUrl}/authors/${author.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(author),
    });
  }

  async getAuthors() {
    let response = await fetch(`${this.baseUrl}/authors`);
    return await response.json();
  }

  async getAuthor(id) {
    let response = await fetch(`${this.baseUrl}/authors/${id}`);
    return await response.json();
  }
}
