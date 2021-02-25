import { LitElement, html } from 'lit-element';

class MyAccessors extends LitElement {

    static get properties() { 
        return { prop: { type: Number } };
    }
    // accessors a la propiedad prop para modificar lo que se muestra
    get prop() {
        return this._prop + 'xx';
    }

    set prop( val ) {
        const oldVal = this._prop;
        this._prop = Math.floor(val);
        this.requestUpdate('prop', oldVal);// Se le pasa el valor anterior
    }
    // accessors a la propiedad prop
    render() {
        return html`
            <p>prop: ${this.prop}</p>
            <button @click="${ () =>  this.prop = Math.random() * 10  }">
            change prop
            </button>
        `;
    }
}
customElements.define('my-accessors', MyAccessors);