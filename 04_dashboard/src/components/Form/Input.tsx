import { Field, FieldHelperText, Input } from "@chakra-ui/react";
import { InputProps as ChakraInputProps } from "@chakra-ui/react";


interface InputComponentProps extends ChakraInputProps {
  name: string;
  label?: string;
  helpertext?: string;
  required?: boolean;
}

export function InputComponent({name, label, required, helpertext}: InputComponentProps) {
  return (
    <Field.Root required={required}>
      <Field.Label>
        {label} <Field.RequiredIndicator />
      </Field.Label>
      <Input name={name} _hover={{bgColor: 'gray.700'}} focusRingColor="pink.300"/>
      <FieldHelperText>{helpertext}</FieldHelperText>
    </Field.Root>
  )
}