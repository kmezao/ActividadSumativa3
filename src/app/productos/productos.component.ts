import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent  {

 totalDinero = 0;
 totalCarrito = 0;

 clave = new FormControl('')
 cantidad = new FormControl();

 productosCarrito: any[] = [];

 productosCarritoActual: any;

 productosCantidad = [{
   codigo: 0,
   cant: 0,
 }];

 producto: any[] = [];

 productosActual1 = [   // Array para items en stock
  {
    codigo: 10001, nombre: '[PRE-VENTA] Moon Jong Up - US (Mini Album Vol.)', precio: 28990,
    descripcion: 'PREVENTA HASTA: 6 DE JULIO 2021', img: '../../assets/tarjetas/1.jpg',
    tags : "bap, moon jongup, solitario"
  },
  {
    codigo: 10002, nombre: '[PRE-VENTA] EXO - DON’T FIGHT THE FEELING (LP VER.) (LIMITED EDITION)(SPECIAL ALBUM)', precio: 59990,
    descripcion: 'PREVENTA HASTA: 2 DE JULIO', img: '../../assets/tarjetas/2.jpg',
    tags : "exo, album, sm"
  },
  {
    codigo: 10003, nombre: '[PRE-VENTA][DVD] ITZY - CODENAME: SECRET ITZY BEHIND DVD PHOTOBOOK PACKAGE', precio: 49990 ,
    descripcion: 'PREVENTA DISPONIBLE HASTA: 28 DE JUNIO 2021', img: '../../assets/tarjetas/3.jpg',
    tags : "itzy, dvd, photobook, jyp"
  },
  {
    codigo: 10004, nombre: '[PRE-VENTA][KHINO] SF9 - TURN OVER (KIT ALBUM)', precio: 31990,
    descripcion: 'PREVENTA HASTA: 25 DE JUNIO', img: '../../assets/tarjetas/4.jpg',
    tags : "sf9, album, fnc"
  },
  {
    codigo: 10005, nombre: '[PRE-VENTA] SF9 - TURN OVER (9TH MINI ALBUM) (SPECIAL VER.) (RANDOM VER.)', precio: 35990,
    descripcion: 'PREVENTA HASTA: 25 DE JUNIO  2021', img: '../../assets/tarjetas/5.jpg',
    tags : "sf9, album, fnc"
  },
  {
    codigo: 10006, nombre: '[PRE-VENTA] SF9 - TURN OVER (9TH MINI ALBUM) (RANDOM VER.)', precio: 28990,
    descripcion: 'PREVENTA HASTA: 25 DE JUNIO DE 2021', img: '../../assets/tarjetas/6.jpg',
    tags : "sf9, album, fnc"
  },
  {
    codigo: 10007, nombre: '[PRE-VENTA] DAY6 (EVEN OF DAY) - RIGHT THROUGH ME (MINI ALBUM VOL.2)', precio: 26990,
    descripcion: 'PREVENTA HASTA: 30 DE JUNIO', img: '../../assets/tarjetas/7.jpg',
    tags : "day6, album, jyp"
  },
  {
    codigo: 10008, nombre: '[PRE-VENTA LIMITADA] JEON SOYEON - WINDY (1ST MINI ALBUM)', precio: 29990,
    descripcion: 'PREVENTA HASTA: 22 de junio 2021', img: '../../assets/tarjetas/8.jpg',
    tags : "jeon soyeon, gidle, cube"
  },
  {
    codigo: 10009, nombre: '[PRE-VENTA LIMITADA] DRIPPIN - FREE PASS (1ST SINGLE ALBUM) (RANDOM VER.)', precio: 26990,
    descripcion: 'PREVENTA HASTA: 22 de junio', img: '../../assets/tarjetas/99.jpg',
    tags : "drippin, single, album"
  },
  {
    codigo: 10010, nombre: '[PRE-VENTA] DONGKIZ - CHASE EPISODE 1. GGUM (SINGLE ALBUM VOL.5)(RANDOM VER.)', precio: 30990,
    descripcion: 'PREVENTA HASTA: 30 de junio', img: '../../assets/tarjetas/10.jpg',
    tags : "dongkiz, single, album"
  },
  {
    codigo: 10011, nombre: '[PRE-VENTA] KINGDOM - HISTORY OF KINGDOM : PARTⅡ. CHIWOO (ALBUM VOL.2)(RANDOM VER.)', precio: 29990,
    descripcion: 'PREVENTA HASTA: 29 DE JUNIO', img: '../../assets/tarjetas/11.jpg',
    tags : "KINGDOM, album"
  },
  {
    codigo: 10012, nombre: '[PRE-VENTA] JUST B - JUST BURN (1ST MINI ALBUM)', precio: 29990,
    descripcion: 'PREVENTA HASTA: 28 DE JUNIO ', img: '../../assets/tarjetas/12.jpg',
    tags : "JUST B, MINI ALBUM"
  }
];

productosActual = [   // Array para items en stock
  {
    codigo: 10001, nombre: '[PRE-VENTA] Moon Jong Up - US (Mini Album Vol.)', precio: 28990,
    descripcion: 'PREVENTA HASTA: 6 DE JULIO 2021', img: '../../assets/tarjetas/1.jpg',
    tags : "bap, moon jongup, solitario"
  },
  {
    codigo: 10002, nombre: '[PRE-VENTA] EXO - DON’T FIGHT THE FEELING (LP VER.) (LIMITED EDITION)(SPECIAL ALBUM)', precio: 59990,
    descripcion: 'PREVENTA HASTA: 2 DE JULIO', img: '../../assets/tarjetas/2.jpg',
    tags : "exo, album, sm"
  },
  {
    codigo: 10003, nombre: '[PRE-VENTA][DVD] ITZY - CODENAME: SECRET ITZY BEHIND DVD PHOTOBOOK PACKAGE', precio: 49990,
    descripcion: 'PREVENTA DISPONIBLE HASTA: 28 DE JUNIO 2021', img: '../../assets/tarjetas/3.jpg',
    tags : "itzy, dvd, photobook, jyp"
  },
  {
    codigo: 10004, nombre: '[PRE-VENTA][KHINO] SF9 - TURN OVER (KIT ALBUM)', precio: 31990,
    descripcion: 'PREVENTA HASTA: 25 DE JUNIO', img: '../../assets/tarjetas/4.jpg',
    tags : "sf9, album, fnc"
  },
  {
    codigo: 10005, nombre: '[PRE-VENTA] SF9 - TURN OVER (9TH MINI ALBUM) (SPECIAL VER.) (RANDOM VER.)', precio: 35990,
    descripcion: 'PREVENTA HASTA: 25 DE JUNIO  2021', img: '../../assets/tarjetas/5.jpg',
    tags : "sf9, album, fnc"
  },
  {
    codigo: 10006, nombre: '[PRE-VENTA] SF9 - TURN OVER (9TH MINI ALBUM) (RANDOM VER.)', precio: 28990,
    descripcion: 'PREVENTA HASTA: 25 DE JUNIO DE 2021', img: '../../assets/tarjetas/6.jpg',
    tags : "sf9, album, fnc"
  },
  {
    codigo: 10007, nombre: '[PRE-VENTA] DAY6 (EVEN OF DAY) - RIGHT THROUGH ME (MINI ALBUM VOL.2)', precio: 26990,
    descripcion: 'PREVENTA HASTA: 30 DE JUNIO', img: '../../assets/tarjetas/7.jpg',
    tags : "day6, album, jyp"
  },
  {
    codigo: 10008, nombre: '[PRE-VENTA LIMITADA] JEON SOYEON - WINDY (1ST MINI ALBUM)', precio: 29990,
    descripcion: 'PREVENTA HASTA: 22 de junio 2021', img: '../../assets/tarjetas/8.jpg',
    tags : "jeon soyeon, gidle, cube"
  },
  {
    codigo: 10009, nombre: '[PRE-VENTA LIMITADA] DRIPPIN - FREE PASS (1ST SINGLE ALBUM) (RANDOM VER.)', precio: 26990,
    descripcion: 'PREVENTA HASTA: 22 de junio', img: '../../assets/tarjetas/99.jpg',
    tags : "drippin, single, album"
  },
  {
    codigo: 10010, nombre: '[PRE-VENTA] DONGKIZ - CHASE EPISODE 1. GGUM (SINGLE ALBUM VOL.5)(RANDOM VER.)', precio: 30990,
    descripcion: 'PREVENTA HASTA: 30 de junio', img: '../../assets/tarjetas/10.jpg',
    tags : "dongkiz, single, album"
  },
  {
    codigo: 10011, nombre: '[PRE-VENTA] KINGDOM - HISTORY OF KINGDOM : PARTⅡ. CHIWOO (ALBUM VOL.2)(RANDOM VER.)', precio: 29990,
    descripcion: 'PREVENTA HASTA: 29 DE JUNIO', img: '../../assets/tarjetas/11.jpg',
    tags : "KINGDOM, album"
  },
  {
    codigo: 10012, nombre: '[PRE-VENTA] JUST B - JUST BURN (1ST MINI ALBUM)', precio: 29990,
    descripcion: 'PREVENTA HASTA: 28 DE JUNIO ', img: '../../assets/tarjetas/12.jpg',
    tags : "JUST B, MINI ALBUM"
  }
];


 agregarProducto(i: any){
   if(this.productosCarrito.includes(this.productosActual[i])){
    console.log("Ya tiene el producto")
    for(let j = 0;j<this.productosCantidad.length;j++){
      if(this.productosActual[i].codigo == this.productosCantidad[j].codigo){
        this.productosCantidad[j].cant+=1;
      }
    }
    this.totalDinero+=this.productosActual[i].precio;
    localStorage.setItem("total",JSON.stringify(this.totalDinero));
  }
  else{
    console.log("No tiene el producto");
    this.productosCarrito.push(this.productosActual[i]);
    this.productosCantidad.push({codigo: this.productosActual[i].codigo, cant: 1});
    this.totalDinero+=this.productosActual[i].precio;
    localStorage.setItem("total",JSON.stringify(this.totalDinero))
  }
  localStorage.setItem("carrito",JSON.stringify(this.productosCarrito));
  localStorage.setItem("cantidad",JSON.stringify(this.productosCantidad));
}

 eliminarProducto(cod: any){
  for(let i = 0;i<this.productosCarrito.length;i++){
    if(this.productosCarrito[i].codigo == cod){
      this.totalDinero-=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
      localStorage.setItem("total",JSON.stringify(this.totalDinero))
      this.productosCarrito.splice(i,1);
      this.productosCantidad.splice(i+1,1);
    }
  }
  localStorage.setItem("carrito",JSON.stringify(this.productosCarrito));
  localStorage.setItem("cantidad",JSON.stringify(this.productosCantidad));
}

actualizarProducto(cod: any){
  for(let i = 0;i<this.productosCarrito.length;i++){
    if(this.productosCarrito[i].codigo == cod){
      this.totalDinero-=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
      this.productosCantidad[i+1].cant = this.cantidad.value;
      this.totalDinero+=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
      localStorage.setItem("total",JSON.stringify(this.totalDinero))
    }
  }
  localStorage.setItem("cantidad",JSON.stringify(this.productosCantidad));
}

busquedaClave(){
  let pos = [];
  for(let i=0;i<this.productosActual.length;i++){
    if(this.productosActual[i].tags.search(this.clave.value) == -1){
      pos.push(this.productosActual[i].codigo);
    }
    else{
      console.log('Encontrado');
    }
  }
  for(let j=0;j<pos.length;j++){
    for(let i=0;i<this.productosActual.length;i++){
      if(pos[j]==this.productosActual[i].codigo){
        this.productosActual.splice(i,1);
      }
    }
  }
}

  quitarBusqueda(){
    this.productosActual = [];
    for(let i=0; i<this.productosActual1.length;i++){
      this.productosActual.push({codigo: this.productosActual1[i].codigo, nombre: this.productosActual1[i].nombre, precio: this.productosActual1[i].precio, 
        descripcion: this.productosActual1[i].descripcion, img: this.productosActual1[i].img, tags: this.productosActual1[i].tags});
    }
    this.productosActual = this.productosActual1;
  }
  
}


