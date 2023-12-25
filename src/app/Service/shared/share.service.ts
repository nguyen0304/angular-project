import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private cagtegory: string | null = "all";
  constructor() { }
  setCategory(categoryInput: string){
    this.cagtegory = categoryInput;
  }
  getCategory(){
    return this.cagtegory;
  }
}
