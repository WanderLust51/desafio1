import { Component, Input, Output } from '@angular/core';

interface Article {
  titulo : string,
  precio : number,
  tipoEnvio : string,
  imagen : string,
  amount? : number
}

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {
  @Input() articulos : Article[] = []  
  @Input() carrito : Article[] = []
  @Input() total : number = 0
  @Input() articleAmount : number = 0

  // @Output() artAmount : number = this.articleAmount
  // @Output() carro : Article[] = this.carrito

  constructor(){}

  popArticle(i : number){

    if (this.carrito[i].amount! <= 1){
      this.carrito.splice(i, 1)
    }else{
      this.carrito[i].amount! -= 1
    }

    this.updateTotal()

  }

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

  // carrito : Article[] = []
  // total : number = 0

  // addArticle(i : number){

  //   let isIn : boolean = false
  //   let carElement : string = ''
    
  //   for (let e in this.carrito){
      
  //     if (this.articulos[i] == this.carrito[e]){
  //       isIn = true
  //       carElement = e
  //       break
  //     }else{
  //       isIn = false
  //     }
  //   }

  //   if (isIn){
  //     this.carrito[Number(carElement)].amount! += 1
  //   }else{
  //     let newArticle : Article = this.articulos[i]
  //     newArticle.amount = 1
  //     this.carrito.push(this.articulos[i])
  //   }
  //   this.updateTotal()
  // }

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
