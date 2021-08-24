import { Form, Formik } from "formik";
import TextField from "@components/TextField";
import PasswordField from "@components/PasswordField";
import { Button, SimpleGrid, Stack } from "@chakra-ui/react";
import { object, string, ref } from "yup";

const schema = object().shape({
  name: string().required("Please enter your name"),
  email: string()
    .email("Invalid email")
    .required("Please enter your email address"),
  password: string().required("Please enter your password"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "Passwords must match"
  ),
});

const SignupForm = (): JSX.Element => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
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
          <Stack align="center" mb={3} >
            <SimpleGrid columns={[1, null, 2]} my={6} spacing={3}>
              <TextField label="Name" name="name" type="text" isRequired />
              <TextField label="Email" name="email" type="email" isRequired />
              <PasswordField label="Password" name="password" isRequired />
              <PasswordField
                label="Confirm password"
                name="confirmPassword"
                isRequired
              />
            </SimpleGrid>
            <Button
              type="submit"
              colorScheme="teal"
              loadingText="Signing up..."
              isLoading={isSubmitting}
              isFullWidth
            >
              Sign up
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
