import { Form, Formik } from "formik";
import TextField from "@components/TextField";
import { Button, Stack } from "@chakra-ui/react";

const LoginForm = (): JSX.Element => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async ({}) => {}}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stack my={10} spacing={5}>
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <Button type="submit" colorScheme="teal" isLoading={isSubmitting}>
              Sign in
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
