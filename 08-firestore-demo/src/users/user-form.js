import { LitElement, html } from 'lit-element';
import 'dile-input/dile-input';

class UserForm extends LitElement {
  
  static get properties() {
    return {
      user: { type: Object }
    };
  }
  render() {
    return html`
      <dile-input value="${this.user.nombre}" label="Nombre" name="nombre" @input="${this.inputChanged}"></dile-input>
      <dile-input value="${this.user.email}" label="Email" name="email" @input="${this.inputChanged}"></dile-input>
      <dile-input value="${this.user.telefono}" label="Telefono" name="telefono" @input="${this.inputChanged}"></dile-input>
    `;
  }

  inputChanged(e) {
    this.user[e.target.name] = e.target.value;
    this.dispatchEvent(new CustomEvent('user-changed', {
      detail: this.user
    }));
  }
}
customElements.define('user-form', UserForm);