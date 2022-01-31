import { Form, Formik } from "formik"
import { getAllProducts } from "../Services/ProductService"

export const ShowProducts = () => {
  const handleSubmit = () => {
    const response = getAllProducts()
  }
  return (
    <Formik onSubmit={handleSubmit} >
      <Form>
        <button type="submit">Prueba</button>
      </Form>
    </Formik>
  )
}