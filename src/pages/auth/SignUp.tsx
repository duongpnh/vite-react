import { Formik } from 'formik';
import { Button, Form } from 'antd';
import { FormikInput } from '@/components/FormikInput';
import { signUpSchema } from './validation/sign-up';

const initialValues = { email: '', password: '' };

export const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log({ values });
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
            name="form-sign-up"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            autoComplete="off"
            title="Sign Up"
          >
            <FormikInput label="First Name" name="firstName" />
            <FormikInput label="Last Name" name="lastName" />
            <FormikInput label="Email" name="email" />

            <FormikInput label="Password" name="password" type="password" />
            <FormikInput
              label="Retype Password"
              name="passwordConfirmation"
              type="password"
            />

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </div>
  );
};
