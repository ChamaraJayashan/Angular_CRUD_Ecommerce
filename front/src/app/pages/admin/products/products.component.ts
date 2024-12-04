import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ProductService } from '../../../services/product/product.service'; // Ensure correct import path
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,  // Mark component as standalone
  imports: [CommonModule, FormsModule],  // Add FormsModule here
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  isSidePanelVisible: boolean = false;
  productObj: any = {
    productId: 0,
    productName: "",
    productPrice: "",
    productShortName: "",
    productDescription: "",
    createdDate: new Date(),
    deliveryTimeSpan: "",
    categoryId: 0,
    productImageUrl: "",
  };
  categoryList: any[] = [];
  productList: any[] = [];  

  constructor(private productSrv: ProductService) {}



  ngOnInit(): void {
    this.getAllCategory();
    this.getProducts();
  }

  getAllCategory() {
    this.productSrv.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
      console.log(this.categoryList)
    });
  }

  getProducts() {
    this.productSrv.getProducts().subscribe(
      (res: any) => {
        this.productList = res.data;  // Update the product list
      },
      (error) => {
        console.error("Error fetching products:", error);
        alert("There was an error fetching the product list.");
      }
    );
  }
  

  getAllProducts() {
    this.productSrv.getProducts().subscribe((res: any) => {
      this.productList = res.data;  // Assuming the data comes in the 'data' property
    });
  }
  onSave() {
    
    this.productSrv.saveProduct(this.productObj).subscribe(
      (res: any) => {
        console.log('Save Product Response:', res);
  
        if (res.result) {
          alert('Product Created Successfully');
          this.getProducts(); // Refresh the product list
          this.closeSidePanel(); // Optionally close the side panel
         
        } else {
          alert(`Error: ${res.message || 'Unknown error occurred.'}`);
        }
      },
      (error) => {
        console.error('Error creating product:', error);
        alert('Failed to create product. Please try again later.');
      }
    );
  }
  onEdit(item: any){
    this.productObj=item;
    this.openSidePanel();
  }

  onUpdate(item: any) {
    this.productSrv.updateProduct(item.productId, item).subscribe(
        (res: any) => {
            if (res?.result) {
                alert("Product Updated");
                this.getProducts();  
                this.closeSidePanel();  
            } else {
                alert(res.message || "Failed to update the product");
            }
        },
        (error) => {
            console.error("Error updating product:", error);
            alert("There was an error updating the product.");
        }
    );
}


  onDelete(item: any) {
    const isDelete = confirm('Are you sure you want to delete this product?');
      
      if(isDelete){
      this.productSrv.deleteProduct(item.productId).subscribe(
        (res: any) => {
          if (res?.result) {
            alert('Product deleted successfully');
            this.getProducts(); // Refresh the product list
          } else {
            alert(res?.message || 'Failed to delete product');
          }
        },
        (error) => {
          console.error('Error deleting product:', error);
          alert(`Failed to delete product: ${error?.message || 'Unknown error occurred'}`);
        }
      );
      }
  }
  
  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}  

