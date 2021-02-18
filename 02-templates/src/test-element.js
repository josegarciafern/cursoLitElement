import { LitElement, html } from 'lit-element';

import './tag-list';
import './menu-overlay';

export class TestElement extends LitElement {

    static get properties() {
        return {
            etiquetas: { type: Array }
        };
    }

    constructor() {
        super();
        this.etiquetas = [ 1, 5 , 6, 88, 'dadsfdsfa'];
        
    
    }

    render() {
        return html`
            <p>Estas son las etiquetas: <tag-list .tags="${this.etiquetas}"></tag-list></p>

            <menu-overlay id="menu1">
                <p>Cualquier otra cosa</p>
                <button>Cerrar</button>
                <div slot="trigger">Menú</div>
                <button>Abrir</button>
                <button>Guardar</button>
            </menu-overlay>
        `;
    }

    cerrar() {
        this.shadowRoot.getElementById('menu1').close();
    }
}
customElements.define('test-element', TestElement);