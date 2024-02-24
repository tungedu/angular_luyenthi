import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../types/Product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productService = inject(ProductService);
  productList: Product[] = [];

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService
      .getProducts()
      .subscribe((res) => (this.productList = res));
  }

  handleDelete(id: string): void {
    // event.preventDefault();
    const cf = confirm('Are you sure?');
    if (cf) {
      this.productService.deleteProduct(id).subscribe((res) => {
        alert('Xoa thanh cong');
        this.productList = this.productList.filter(
          (product) => product.id !== id
        );
      });
    } else {
      return;
    }
  }
}
