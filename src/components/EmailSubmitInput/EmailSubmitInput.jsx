import { Field, Form, Formik } from 'formik'
import React from 'react'
import CustomBTN from '../customBTN/CustomBTN'

export default function EmailSubmitInput() {
  return (
    <>
      <div className='email-submit-input'>
        <Formik>
          <Form>
            <Field placeholder="Enter Email.." />
            <CustomBTN title="submit"/>
            {/* <button type=''>Submit</button> */}
          </Form>
        </Formik>
      </div>
    </>
  )
}
