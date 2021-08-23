import { Form, Formik } from "formik";
import TextField from "@components/TextField";
import PasswordField from "@components/PasswordField";
import { Button, Stack } from "@chakra-ui/react";
import { object, string } from "yup";

const schema = object().shape({
  email: string()
    .email("Invalid email")
    .required("Please enter your email address"),
  password: string().required("Please enter your password"),
});

const LoginForm = (): JSX.Element => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={schema}
      onSubmit={({ email, password }, { setSubmitting }) => {
        setSubmitting(true);
        setTimeout(() => {
          alert(password);
          setSubmitting(false);
        }, 2000);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stack my={10} spacing={5}>
            <TextField label="Email" name="email" type="email" />
            <PasswordField label="Password" name="password" />
            <Button
              type="submit"
              colorScheme="teal"
              loadingText="Signing in..."
              isLoading={isSubmitting}
            >
              Sign in
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
