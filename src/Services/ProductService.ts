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