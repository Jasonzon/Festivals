import { Optional } from "@angular/core";

export class Festival {
   static sqmTable = 6;
   public id?: string;
   public name!: string;
   public tablemax_1!: number;
   public tableprice_1!: number;
   public sqmprice_1: number;
   public tablebooked_1: number = 0;
   public sqmbooked_1: number = 0;
   public tablemax_2!: number;
   public tableprice_2!: number;
   public sqmprice_2!: number;
   public tablebooked_2: number = 0;
   public sqmbooked_2: number = 0;
   public tablemax_3!: number;
   public tableprice_3!: number;
   public sqmprice_3!: number;
   public tablebooked_3: number = 0;
   public sqmbooked_3: number = 0;
   public revenue: number = 0;
   public visitor: boolean = false;

   constructor(name: string, @Optional() sqmprix_1?: number, @Optional() tablereserv_1: number = 0) {
        this.name = name;
        this.sqmprice_1 = (sqmprix_1 == null) ? this.tableprice_1/6 : sqmprix_1;
        this.tablebooked_1 = tablereserv_1;
   }

   public get tableTotal() : number { 
    return this.tablemax_1 + this.tablemax_2 + this.tablemax_3; 
   }
}
