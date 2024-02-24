import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../types/Product';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css',
})
export class UpdateProductComponent {
  updateProduct: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  productService = inject(ProductService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  productId = '';
  editingProduct: Product = {
    id: '',
    name: '',
    image: '',
    price: 0,
    quantity: 0,
    description: '',
  };
  isError: boolean = false;

  getEditingProduct(id: string) {
    this.productService
      .getProductDetail(id)
      .subscribe((res) => (this.editingProduct = res));
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.getEditingProduct(this.productId);
    });
  }
  handleSubmit() {
    console.log(this.editingProduct);
    if (this.updateProduct.invalid) {
      this.isError = true;
      return;
    }
    this.productService
      .updateProduct(this.productId, this.updateProduct.value)
      .subscribe((res) => {
        alert('Product updated');
        this.router.navigate(['/admin/products']);
      });
  }
}
