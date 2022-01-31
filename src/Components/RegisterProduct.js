import { Formik, Form, Field, ErrorMessage } from "formik"
import { addDays, getDateInInputHtmlFormat } from "../Services/myDate"
import { addProduct } from "../Services/ProductService"
import { Center } from "./Center"
import { SubmitButton } from "./SubmitButton"

import '../Styles/Input.css'

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

  const handleSubmit = async values => {
    const result = await addProduct(values)
    const message = result 
                    ? `${values.name} ha sido guardado` 
                    : `Error al guardar el producto`
    alert(message)
  }
  return (
    <Formik
      initialValues={initialValues}
      /*validate={validate}*/ 
      onSubmit={handleSubmit} >
        <Form>
          <div className='myInputDiv'>
            <label>Nombre del producto</label>
            <Field name='name' type='text' placeholder='Pizza' />
            <ErrorMessage name='name' />
          </div>
          <div className='myInputDiv'> 
            <label>Marca</label>
            <Field name='brand' type='text' placeholder='Dominos' />
          </div>
          <div className='myInputDiv'>
            <label>Variante</label>
            <Field name='variation' type='text' placeholder='Suprema' />
          </div>
          <div className='myInputDiv'>
            <label>Fecha de caducidad</label>
            <Field name='expiration' type='date' />
          </div>
          <div className='myInputDiv'>
            <label>Precio</label>
            <Field name='price' type='number' min='0' step='1' placeholder='$0' />
          </div>
          <div className='myInputDiv'>
            <label>Recurrente</label>
            <Field name='required' type='checkbox' />
          </div>
          <Center style={{ paddingTop: '0.2em' }}>
            <SubmitButton>Guardar</SubmitButton>
          </Center>
        </Form>
    </Formik>
  )
}