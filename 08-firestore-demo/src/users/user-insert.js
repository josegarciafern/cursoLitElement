import { LitElement, html, css} from 'lit-element';
// import 'dile-input/dile-input';
import './user-form';
import '@dile/dile-button/dile-button';

export class UserInsert extends LitElement {

    static get properties() {
        return {
          user: { type: Object },
        };
    }
    
    constructor() {
        super();
        this.user = {
          nombre: '',
          email: '',
          telefono: ''
        }
    }

    static get styles() {
        return css`
          :host {
            display: block;
            margin-bottom: 20px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 25px;
          }
        `;
    }

    render() {
        return html`
            <!-- <dile-input value=${this.user.nombre} label="Nombre" name="nombre" @input=${this.inputChanged}></dile-input>
            <dile-input value=${this.user.email} label="Email" name="email" @input=${this.inputChanged}></dile-input>
            <dile-input value=${this.user.telefono} label="Telefono" name="telefono" @input=${this.inputChanged}></dile-input> -->
            <user-form .user="${this.user}" @user-changed="${this.onUserChanged}"></user-form>
            <dile-button @click="${this.insert}">Insertar</dile-button>
        `;
    }

    insert() {
      this.dispatchEvent(new CustomEvent('user-insert', {
        detail: this.user
      }));
    }

    // inputChanged( e ) {
    //   this.user[e.target.name] = e.target.value;     
    // }
    onUserChanged( e ) {
      this.user = e.detail;
    }
}
customElements.define('user-insert', UserInsert);