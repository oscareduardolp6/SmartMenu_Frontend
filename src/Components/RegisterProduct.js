import { Formik, Form, Field, ErrorMessage } from "formik"
import { addDays, getDateInInputHtmlFormat } from "../Services/myDate"
import { addProduct } from "../Services/ProductService"

export const RegisterProduct = () => {
  const today = new Date()
  const nextWeek = addDays(today, 7) 
  const initialValues = {
    name      : '', 
    brand     : '', 
    variation : '', 
    expiration: getDateInInputHtmlFormat(nextWeek), 
    price     : ''
  } 
  return (
    <Formik
      initialValues={initialValues}
      /*validate={validate}*/ 
      onSubmit={addProduct} >
        <Form>
          <div>
            <label>Nombre del producto</label>
            <Field name='name' type='text' placeholder='Pizza' />
            <ErrorMessage name='name' />
          </div>
          <div> 
            <label>Marca</label>
            <Field name='brand' type='text' placeholder='Dominos' />
          </div>
          <div>
            <label>Variante</label>
            <Field name='variation' type='text' placeholder='Suprema' />
          </div>
          <div>
            <label>Fecha de caducidad</label>
            <Field name='expiration' type='date' />
          </div>
          <div>
            <label>Precio</label>
            <Field name='price' type='number' min='0' step='1' placeholder='$0' />
          </div>
        <button type="submit">Submit</button>
        </Form>
    </Formik>
  )
}