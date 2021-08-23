import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  useDisclosure,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { FieldHookConfig, useField } from "formik";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

type Props = FieldHookConfig<string> & {
  label: string;
  isRequired?: boolean;
};

const PasswordField = ({ label, isRequired, ...props }: Props): JSX.Element => {
  const [field, meta] = useField(props);
  const { isOpen, onToggle } = useDisclosure();
  const invalid = !!meta.error && meta.touched;

  return (
    <FormControl id={props.name} isInvalid={invalid} isRequired={isRequired}>
      <FormLabel htmlFor={props.name}>{label}</FormLabel>
      <InputGroup>
        <Input {...field} type={isOpen ? "text" : "password"} />
        <InputRightElement>
          <IconButton
            bg="transparent !important"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <ViewOffIcon /> : <ViewIcon />}
            onClick={onToggle}
          />
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default PasswordField;
