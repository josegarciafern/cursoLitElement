import { LitElement, html } from 'lit-element';

export class MyCounter extends LitElement {

    static get properties() {
        return {
            counter: { type: Number }
        };
    }
    constructor() {
        super();
        this.counter = 0;
    }

    render() {
        return html`
            <style>
                div {
                    border: 1px solid #ddd;
                    padding: 10px;
                }
                .x {
                    background-color: #f51010;
                    color: #fff;
                }
            </style>
            <div class="x">Llevas ${this.counter} clics!!</div>
            <div>
                <button @click="${this._incrementar}">+1</button>
                <button @click="${this._decrementar}">-1</button>
            </div>
            <feedback-element id="feedback"></feedback-element>
        `;
    }

    get feedback() {
        return this.shadowRoot.getElementById('feedback');
    }

    _incrementar( e ) {
        // console.log(e);
        this.counter ++; 

        if( this.counter == 5) {
            this.feedback.open('Has llegado a 5 clicks!!');
        }
    }
    _decrementar( e ) {
        // console.log(e);
        this.counter --; 

        if( this.counter == 0) {
            this.feedback.open('Has reseteado los clicks!!');
        }
    }
}
customElements.define('my-counter', MyCounter);