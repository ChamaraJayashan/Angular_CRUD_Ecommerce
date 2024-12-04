import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(Constant.API_END_POINT + Constant.METHOD.GET_ALL_PRODUCT);  
  }

  getCategory() {
    return this.http.get(Constant.API_END_POINT + Constant.METHOD.GET_ALL_CATEGORY);
  }

  saveProduct(obj:any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHOD.CREATE_PRODUCT, obj)
  }

  updateProduct(productId: number, obj: any) {
    return this.http.put(`${Constant.API_END_POINT}${Constant.METHOD.UPDATE_PRODUCT}/${productId}`, obj);
  }



  deleteProduct(id: any) {
    return this.http.delete(`${Constant.API_END_POINT}${Constant.METHOD.DELETE_PRODUCT}/${id}`);
}

}
