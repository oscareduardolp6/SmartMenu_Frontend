import { baseUrl } from './ApiData'
import { Product } from './Product'

export const addProduct = async (product: Product):Promise<boolean> => {
  /* Temporal */
  product.price = product.price ?? 0
  /* Fin Temporal */

  const endpoint  = 'addProduct'
  const url       = baseUrl + endpoint
  const body      = JSON.stringify(product)
  const mode      = 'no-cors' as RequestMode
  const headers   = new Headers({ 'Content-Type': 'application/json' })
  const options   = {
    method: 'POST', 
    headers, 
    body,
    mode
  }
  console.log(options)
  const myResponse  = await fetch(url, options)
  const result    = await myResponse.text()
  const added     = (result == 'OK') 
  console.log(result)
  return added 
}