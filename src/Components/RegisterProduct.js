import { Formik, Form, Field, ErrorMessage } from "formik"

const validate = () => 1

export const RegisterProduct = () => {
  const initialValues = {
    name      : '', 
    brand     : '', 
    variation : '', 
    expiration: new Date(), 


  } 
  const handleSubmit = () => {

  }
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit} >
        <Form>
          <div>
            <label>Nombre del producto</label>
            <Field name='name' type='text' />
            <ErrorMessage name='name' />
          </div>
          <div> 
            <label>Marca</label>
            <Field name='brand' type='text' />
          </div>
          <div>
            <label>Variante</label>
            <Field name='variation' type='text' />
          </div>
          <div>
            <label>Fecha de caducidad</label>
            <Field name='expiration' type='date' />
          </div>
        </Form>
    </Formik>
  )
}