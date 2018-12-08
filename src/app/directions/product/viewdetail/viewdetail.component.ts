import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product/product.service';

@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.scss']
})
export class ViewDetailComponent implements OnInit {
  productId: number;
  firstName: string  = null;
  // id: number;
  message: string | null = null;

  constructor(private productService: ProductService, private el: ElementRef) {
    // this.element = el.nativeElement;
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.productService.viewProductDetail(this.productId).subscribe((data: any) => {
      this.message = data;
    });
    console.log(this.message);
    console.log(this.firstName);
  }

}
