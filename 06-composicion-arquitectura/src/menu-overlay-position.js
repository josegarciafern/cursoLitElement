import { html } from 'lit-element';
import { MenuOverlay } from './menu-overlay';

class MenuOverlayPosition extends MenuOverlay {

    static get properties() {
        return { 
            top: { type: Number },
            left: { type: Number },
        };
    }

    constructor() {
        super()
        this.top = 0;
        this.left = 0;
    }

    get contentTemplate() {
        return html`
            <style>
                section {
                    top: ${this.top}px;
                    left: ${this.left}px;
                }
                
            </style>            
            <section 
                class="${ this.closed ? 'closed' : '' }" 
                @click="${this.doClick}"
            >
                <slot></slot>
                <a href="#" @click="${this.closeHandler}">Cerrar</a>
            </section>
        `;
    }
    
}
customElements.define('menu-overlay-position', MenuOverlayPosition);