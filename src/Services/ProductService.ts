import { baseUrl } from './ApiData'
import { Product } from './Product'

export const addProduct = async (product: Product):Promise<boolean> => {
  /* Temporal */
  product.price = product.price ?? 0
  /* Fin Temporal */

  const endpoint  = 'addProduct'
  const url       = baseUrl + endpoint
  const body      = JSON.stringify(product)
  const mode      = 'cors' as RequestMode
  const headers   = new Headers({ 'Content-Type': 'application/json' })
  const options   = {
    method: 'POST', 
    headers, 
    body,
    mode
  }
  const myResponse:Response  = await fetch(url, options)
  const result = myResponse.statusText == 'OK'
  return result
}

export const getAllProducts = async () => {
  const endpoint  = 'getProducts'
  const url       = baseUrl + endpoint 
  const mode      = 'cors' as RequestMode
  const headers   = new Headers({ 'Content-Type': 'application/json' })
  const options   = {
    method: 'GET', 
    headers, 
    mode
  }
  const myResponse: Response = await fetch(url, options)
  console.log(myResponse);
  const products = await myResponse.json()
  console.log(products);
  

}