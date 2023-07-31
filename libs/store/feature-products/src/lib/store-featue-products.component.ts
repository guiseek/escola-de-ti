import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'store-store-featue-products',
  templateUrl: './store-featue-products.component.html',
  styleUrls: ['./store-featue-products.component.scss'],
})
export class StoreFeatueProductsComponent {
  form = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl(),
  });


  products$ = this.http.get('/api/product')


  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.form.valid) {

      const observer$ = this.http
        .post('/api/product', this.form.value);

      observer$.subscribe(console.log);
    }
  }
}
