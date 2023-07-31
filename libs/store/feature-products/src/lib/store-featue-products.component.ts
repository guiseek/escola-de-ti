import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'store-store-featue-products',
  templateUrl: './store-featue-products.component.html',
  styleUrls: ['./store-featue-products.component.scss'],
})
export class StoreFeatueProductsComponent {
  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
  });

  onSubmit() {
    const newElement = document.createElement('pre');
    newElement.innerHTML = JSON.stringify(this.form.value, null, 2);
    document.body.appendChild(newElement);  
  }
}
