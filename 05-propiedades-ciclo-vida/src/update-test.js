import { LitElement, html } from 'lit-element';

class UpdateTest extends LitElement {
    
    static get properties() {
        return { 
            name: { 
                type: String,
                hasChanged( newVal, oldVal) {
                    // console.log(newVal, oldVal);
                    // Si devuelve true se actualiza el templete sino no
                    return ( newVal * 10 > 5 ) ? true : false
                }
            } 
        };
    }

    render() {
        return html`
            <eit-input
                id="elinput"
                .value=${ this.name }
                label="Nombre"
            ></eit-input>

            <p>
                <button @click=${ this.nameChange } >Cambiar el nombre</button>
            </p>
        `;
    }
    /** 
     * FORMAS DE CREAR PROPIEDADES DEL COMPONENTE PERO NO EN EL properties()
     * Un uso para ahorrar código
    */
    //1º
    get elinputAlternativo() {
        return this.shadowRoot.getElementById('elinput');
    }

    //2º Ciclo de vida del componente
    firstUpdated() {        
        this.elinput = this.shadowRoot.getElementById('elinput');
    }

    async nameChange() {
        this.name = Math.random();
        console.log('Antes', this.elinput.value);
        console.log('Antes', this.elinputAlternativo.value);
        await this.updateComplete;
        console.log('Despues', this.elinput.value);
        console.log('Despues', this.elinputAlternativo.value);
    }
}
customElements.define('update-test', UpdateTest);