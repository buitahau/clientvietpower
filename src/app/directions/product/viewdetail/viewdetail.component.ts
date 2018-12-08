import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product/product.service';
import {ProductBaseModel} from '../../../models/product_base';

@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.scss']
})
export class ViewDetailComponent implements OnInit {
  @Input() productId: number;
  listProductBaseCan: ProductBaseModel[] | null = null;

  constructor(private productService: ProductService) {
    // this.element = el.nativeElement;
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.productService.viewProductDetail(this.productId).subscribe((data: any) => {
      this.listProductBaseCan = data;
      console.log(this.listProductBaseCan);
    });
  }

}
