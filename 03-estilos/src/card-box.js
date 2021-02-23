import { LitElement, html, css } from 'lit-element';
import { estilosCompartidos } from './estilos-compartidos';

export class CardBox extends LitElement {

    static get styles() {
        return [ estilosCompartidos ,
        css`
            :host {
                display: block;
                border: 1px solid #ddd;
                border-radius: .25rem;
                /* margin-bottom: .25rem; */                
            }
            :host( [hidden]) {
                display: none;
            }
            :host( .red) {
                border-color: red;
            }
            :host( .red ) span {
                color: red;
            }
            ::slotted(a) {
                color: red;
            }
            ::slotted(p) {
                color: blue;
            }
            h1 {
                font-size: 1.2;
                font-weight: 300;
                margin-top: 0;
                color: var(--card-box-title-color, #888);
                background-color: var(--card-box-title-background-color, transparent);          
            }
        `];
    }

    render() {
        return html`
            ${ this.title 
                ? html`<h1>${ this.title }</h1>` 
                : '' 
            }            
            <slot></slot>
            <!-- <span>en el card-box</span>         -->
        `;
    }
}
customElements.define('card-box', CardBox);