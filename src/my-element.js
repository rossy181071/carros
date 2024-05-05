import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * Este es el titulo de mi pagina
       */
      title: { type: String },

      /**
       * Este es el parrafo 1
       */
      paragraph1: { type: String },

      /**
       * Esta es la url de la imagen 1
       */
      image1Url: { type: String },

      /**
       * Este es el elemento 1 de la lista 1
       */
      list1Element1: { type: String },

      /**
       * Este es el elemento 2 de la lista 1
       */
      list1Element2: { type: String },

      /** 
       * Este es el elemento 3 de la lista 1
       */
      list1Element3: { type: String },

      /**
       *Este es el elemento 4 de la lista 1 
       */

      list1Element4: { type: String },
      /**
       * Este es el elemento 5 de la lista 1
       */

      list1Element5: { type: String },
      /**
     * Esta es la url de la imagen 2
     */

      image2Url: { type: String },
      /**
       * Este es el elemento 2 de la lista 1
       */
      image13Url: { type: String },
      /**
       * Esta es el elemento 3 de la lista 1
       */
      list2Element6: { type: String },
      /**
       * Este es el elemento 6 de la lista 2
       */
      list2Element7: { type: String },
      /**
       * Este es el elemento 7 de la lista 2
       */
      list2Element8: { type: String },
      /**
       * Este es el elemento 8 de la lista 2
       */



     
      
    }
  }

  constructor() {
    super()
    this.title = 'Seminuevos RULO'
    this.paragraph1 = 'FINANCIAMIENTO Y CONTADO'
    this.image1Url = 'https://www.elclarinete.com.mx/wp-content/uploads/2016/05/image-332.jpeg'
    this.paragraph2 = 'TRAMITA TU CREDITO SOLO CON TU INE'
    this.image2Url = 'https://elvalle.com.mx/media/k2/items/cache/05b01f789ccae9fd0c1c641a618bc3a1_XL.jpg'
    this.paragraph3 = 'TENEMOS A LA VENTA TODO TIPO DE AUTOS CON:'
    this.list1Element1 = 'Cajuela'
    this.list1Element2 = 'Hatchback'
    this.list1Element3 = 'Camiones de carga con aire acondiccionado'
    this.list1Element4 = 'Transmision Manual Y Atomaticos'
    this.list1Element5 = 'Carros para 5 pasajeros'
    this.paragraph4 = 'TENEMOS PICKUP Y CAMIONES DE CARGA CON:' 
    this.image3Url = 'https://www.chevrolet.com.mx/content/dam/chevrolet/na/mx/es/index/pickups-and-trucks/01-images/s10-max.jpg?imwidth=960'
    this.list2Element6 = '3 y 4 puertas'
    this.list2Element7 = 'automaticas y manual'
    this.list2Element8 = 'aire acondicionado'
    this.paragraph5 = 'TENEMOS AUTOS DEPORTIVOS Y B PLAZA Y MINICOUPERS'
    this.list3Element9 = 'automaticos y manuales'
    this.list3Element10  = 'con aire'
    this.list3Element11 = 'bonitos colores'
    this.image4Url = 'https://img.remediosdigitales.com/201c31/autos-electricos-en-mexico_/1366_2000.jpg'   
  }

  render() {
    return html`
      <div id="seminuevos">
        <h1><b><i><u>${this.title}</u></i></b></h1>
        <p>${this.paragraph1}</p>
        <img src="${this.image1Url}">   
        <p>${this.paragraph2}</p>
        <img src="${this.image2Url}">
        <p>${this.paragraph3}</p>
        
      <ul>
        <li><i>${this.list1Element1}</i></li>
        <li><i>${this.list1Element2}</i></li>
        <li><i>${this.list1Element3}</i></li>
        <li><i>${this.list1Element4}</i></li>
        <li><i>${this.list1Element5}</i></li>
        </ul>
        <p>${this.paragraph4}</p>
        <img src="${this.image3Url}">
      <ul>
        <li><i>${this.list2Element6}</i></li>
        <li><i>${this.list2Element7}</i></li>
        <li><i>${this.list2Element8}</i></li>
      </ul> 
      <p>${this.paragraph5}</p>
      <img src="${this.image4Url}"> 
      <ul>
        <li><i>${this.list3Element9}</i></li>
        <li><i>${this.list3Element10}</i></li>
        <li><i>${this.list3Element11}</i></li>
      </ul>
      </div>`

  }      
            
      
  

  static get styles() {
    return css`
      :host {
      max-width:1280px;
      margin:0auto;
      padding:2rem;
    }

    body{
      background-color: plum;
    }
    #parrafo {
      background-color: chartreuse;
    }
    #parrafo {
      font-family: Georgia;
    }
    #parrafo {
      color: rgb(165, 42, 144);
    }
    #carros {
      background-color: rgb(187, 109, 109);
    }
    #carros {
      font-family: Times;
    }
    #carros {
      color: blue;
    }
        div{
    padding: 7vw ;
    }
    #seminuevos {
      background-color: cadetblue;
    }
        img {
      width:18vw;
    }
        p {
      font-size:15vh;
    }
        h1{
      font-size:15vh;
    }


    #titulo-1 {
      color: coral;
    }
    #titulo-2 {
      color: aqua;
    }
    #titulo-3 {
      color: chartreuse
    }
    #titulo-4 {
      color: brown;
    }
    #titulo-5 {
      color: darkgreen;
    }
    #titulo-6 {
      color: darkorchid;
    }
    li {
      font-size: 5vh;
    }
    `
  }
}

window.customElements.define('my-element', MyElement)
