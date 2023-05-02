import { Formik } from 'formik'
import { Button, Checkbox, Form, Input } from 'antd';
import { signInSchema } from './validation/sign-in';
import { FormikInput } from '@/components/FormikInput';


const initialValues = { email: '', password: '' };

export const SignIn = () => {

  return (
    <div className='flex items-center justify-center h-full'>
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log({ values })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form
            name="form-sign-in"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            autoComplete="off"
          >
            <FormikInput
              label="Email"
              name="email"
            />

            <FormikInput
              label="Password"
              name="password"
              type="password"
            />

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </div>
  )
}