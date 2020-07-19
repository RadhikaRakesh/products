export class ProductModel{
    constructor(
        public _id:object,
        public productId:Number,
        public productName:String, 
        public productCode:String,
        public releaseDate:String,
        public description:String,
        public price:Number,
        public starRating:Number,
        public imageUrl:String
    ){}
}