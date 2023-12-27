import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private cagtegory: string | null = "all";
  private idCourseHigh: number[] | null = null;
  constructor() { }
  setCategory(categoryInput: string){
    this.cagtegory = categoryInput;
  }
  setIdCoures(idCourseHigh: number[]){
    this.idCourseHigh = idCourseHigh;
  }
  getCategory(){
    return this.cagtegory;
  }
  getIdCourseHigh(){
    return this.idCourseHigh;
  }
}
