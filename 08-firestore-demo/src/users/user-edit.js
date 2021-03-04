import { LitElement, html, css } from 'lit-element';
import './user-form';
import '@dile/dile-button/dile-button';

export class UserEdit extends LitElement {

    static get properties() {
        return {
          user: { type: Object }
        };
    }

    static get styles() {
        return css`
          :host {
            display: block;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 25px;
            margin-bottom: 10px;
          }
        `;
    }
    render() {
        return html`
            <user-form .user="${this.user}" @user-changed="${this.onUserChanged}"></user-form>
            <dile-button href="#" @click="${this.edit}">Editar</dile-button>
            <dile-button href="#" @click="${this.cancel}">Cancelar</dile-button>
        `;
    }

    onUserChanged( e ) {
        this.user = e.detail;
    }

    edit(e) {
        e.preventDefault();
        this.dispatchEvent(new CustomEvent('user-edit', {
          bubbles: true,
          composed: true,
          detail: this.user
        }));
    }

    cancel() {
        this.dispatchEvent(new CustomEvent('user-cancel', {
            bubbles: true,
            composed: true
          }));
    }
}
customElements.define('user-edit', UserEdit);