import { Component } from '@angular/core';

interface Article {
  titulo : string,
  precio : number,
  tipoEnvio : string,
  imagen : string,
  amount? : number
}

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {

  articulos = [
    {
      titulo: 'Fender Stratocaster',
      precio: 2100,
      tipoEnvio: 'Internacional',
      imagen: 'https://www.stars-music.es/medias/fender/strat-player-mex-sss-pf-hd-146087.webp'
    },
    {
      titulo: 'Fender Telecaster',
      precio: 1800,
      tipoEnvio: 'Internacional',
      imagen: 'https://www.casainstrumental.com/wp-content/uploads/2022/10/310045501.png'
    },
    {
      titulo: 'Guitar Pick (Jazz III)',
      precio: 2,
      tipoEnvio: 'Internacional',
      imagen: 'https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/1280x1280/products/237/5247/22047138106.BACK__82630.1663877719.jpg?c=2'
    },
    {
      titulo: 'Cuerdas de guitarra Ernie Ball (.10)',
      precio: 12,
      tipoEnvio: 'Internacional',
      imagen: 'https://m.media-amazon.com/images/I/81WCHa-czBL.jpg'
    },
    {
      titulo: 'Gibson SG',
      precio: 800,
      tipoEnvio: 'Nacional',
      imagen: 'https://d1aeri3ty3izns.cloudfront.net/media/47/472654/600/preview_1.jpg'
    },
    {
      titulo: 'Hohner Special Blues',
      precio: 50,
      tipoEnvio: 'Nacional',
      imagen: 'https://www.harpelite.com/catalog/1-large_default/special-20.jpg'
    },
    {
      titulo: 'Fender Jaguar',
      precio: 520,
      tipoEnvio: 'Nacional',
      imagen: 'https://shop.jbonamassa.com/cdn/shop/products/1962_Fender_Jaguar_in_Fiesta_Red_Mini_Guitar_Replica_Front_800x.jpg?v=1531167399'
    },
    {
      titulo: 'Epiphone Les Paul',
      precio: 200,
      tipoEnvio: 'Internacional',
      imagen: 'https://marinimport.com.pe/wp-content/uploads/2020/11/preview-28.jpg'
    },
    {
      titulo: 'Amplificador Marshall 10 watts',
      precio: 80,
      tipoEnvio: 'Internacional',
      imagen: 'https://i.ebayimg.com/thumbs/images/g/XroAAOSw-otjJY~a/s-l640.jpg'
    },
    {
      titulo: 'Estuche Fender para guitarra eléctrica',
      precio: 60,
      tipoEnvio: 'Nacional',
      imagen: 'https://musicbox.com.co/wp-content/uploads/2022/06/6030782-2.jpg'
    },
  ]

  carrito : Article[] = []
  total : number = 0
  articleAmount : number = 0

  updateTotal(){
    let subtotal = 0
    let artAmount = 0
    for (let e in this.carrito){
      subtotal += (this.carrito[e].precio * this.carrito[e].amount!)
      artAmount += this.carrito[e].amount!
    }
    this.total = subtotal
    this.articleAmount = artAmount
  }

  addArticle(i : number){

    let isIn : boolean = false
    let carElement : string = ''
    
    for (let e in this.carrito){
      
      if (this.articulos[i] == this.carrito[e]){
        isIn = true
        carElement = e
        break
      }else{
        isIn = false
      }
    }

    if (isIn){
      this.carrito[Number(carElement)].amount! += 1
    }else{
      let newArticle : Article = this.articulos[i]
      newArticle.amount = 1
      this.carrito.push(this.articulos[i])
    }
    this.updateTotal()
  }
  // popArticle(i : number){

  //   if (this.carrito[i].amount! <= 1){
  //     this.carrito.splice(i, 1)
  //   }else{
  //     this.carrito[i].amount! -= 1
  //   }

  //   this.updateTotal()

  // }

  carVisible = false

}
