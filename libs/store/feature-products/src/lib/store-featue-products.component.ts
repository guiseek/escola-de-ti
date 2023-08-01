import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'store-store-featue-products',
  templateUrl: './store-featue-products.component.html',
  styleUrls: ['./store-featue-products.component.scss'],
})
export class StoreFeatueProductsComponent {
  constructor(private http: HttpClient) {}

  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
  });

  products$ = this.http.get('/api/products');

  onSubmit() {
    if (this.form.valid) {
      const data = {
        name: this.form.value.name,
        description: this.form.value.description,
        price: Number(this.form.value.price),
        quantity: Number(this.form.value.quantity),
      }
      this.http.post('/api/products', data).subscribe(console.log);
    }
  }
}
