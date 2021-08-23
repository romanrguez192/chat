import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { FieldHookConfig, useField } from "formik";

type Props = FieldHookConfig<string> & {
  label: string;
  isRequired?: boolean;
};

const TextField = ({ label, isRequired, ...props }: Props): JSX.Element => {
  const [field, meta] = useField(props);
  const invalid = !!meta.error && meta.touched;

  return (
    <FormControl id={props.name} isInvalid={invalid} isRequired={isRequired}>
      <FormLabel htmlFor={props.name}>{label}</FormLabel>
      <Input {...field} type={props.type} />
      <FormErrorMessage></FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
