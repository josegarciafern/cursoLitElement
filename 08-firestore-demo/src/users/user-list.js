import { LitElement, html } from 'lit-element';
import './user-item';

class UserList extends LitElement {
  static get properties() {
    return {
      users: { type: Array }
    };
  }

  constructor() {
      super();
      this.users = [];  
  }

  render() {
    return html`
      ${ this.users.map( user => html`<user-item .user="${user}"></user-item>`) }
    `;
  }
}
customElements.define('user-list', UserList);