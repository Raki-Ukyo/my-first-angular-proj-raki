import { Component } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [
    {
      name: '太郎',
      price: 102,
      description: '説明文～～～',
    },
  ];

  students = [
    { name: '太郎', gender: '男', age: '50' },
    { name: '三郎', gender: '男', age: '30' },
    { name: '二郎', gender: '男', age: '20' },
  ];
  share() {
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
