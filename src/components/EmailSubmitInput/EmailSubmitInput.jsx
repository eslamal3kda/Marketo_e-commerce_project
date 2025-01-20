import { Field, Form, Formik } from 'formik'
import React from 'react'

export default function EmailSubmitInput() {
  return (
    <>
      <div className='email-submit-input'>
        <Formik>
          <Form>
            <Field placeholder="Enter Email.." />
            <button type=''>Submit</button>
          </Form>
        </Formik>
      </div>
    </>
  )
}
