import { LitElement, html, css } from 'lit-element';

class EitInput extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      placeholder: { 
        type: String,
        attribute: 'ph'
      },
      disabled: { type: Boolean },
      value: { 
        reflect: true,
        converter: {
          toAttribute(value) {
            return value.toString().toLowerCase();
          },
          fromAttribute(value) {
            return value.toString().toUpperCase();
          }
        } 
      }
    };
  }
  constructor() {
    super();
    this.disabled = false;
    this.placeholder = '';
    this.value = '';
  }
  static get styles() {
    return css`
      :host {
        display: block;
        margin-bottom: 12px;
      }
      label {
        display: block;
        color: #888;
        margin-bottom: 4px;
        color: #59e
      }
      input {
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px solid #888;
        font-size: 1em;
        padding: 5px;
        width: 100%;
      }
      input:focus {
        outline: none;
        border-color: #6af
      }
      input::placeholder {
        color: #ccc;
      }
      input:disabled {
        background-color: #f5f5f5;
        border-color: #eee;
      }
    `;
  }
  render() {
    return html`
      <div>
        ${ this.label 
          ? html`<label for="textField">${this.label}</label>` 
          : ''
        }
        <input 
          type="text" 
          id="textField"
          placeholder="${this.placeholder}" 
          ?disabled="${this.disabled}"
          @keypress="${this.lookForEnter}"
          .value="${this.value}"
          @input=${this.inputChanged}
        >
      </div> 
    `;
  }

  attributeChangedCallback(nameAttr, oldValue, newValue) {
    super.attributeChangedCallback(nameAttr, oldValue, newValue);
    //console.log('cambiado el atributo ', nameAttr, newValue, oldValue);
  }
  //Primera renderizacion del templeta. Ciclo de vida del componente
  firstUpdated() {
    this.shadowRoot.getElementById('textField').focus();
  }

  lookForEnter(e) {
    let keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        //console.log('enter!!!', e.target.value);
        //console.log('Has pulsado enter!');
        this.dispatchEvent(new CustomEvent('eit-input-enter'));
    }
  }

  inputChanged(e) {
    this.value = e.target.value;    
  }
}
customElements.define('eit-input', EitInput);