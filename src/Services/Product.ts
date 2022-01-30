export interface Product {
  id?       : number, 
  name      : string, 
  brand     : string, 
  variant   : string, 
  expiration: Date, 
  price?    : number, 
  required? : boolean
}