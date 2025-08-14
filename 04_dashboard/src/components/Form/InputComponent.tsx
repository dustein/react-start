import { Field, FieldHelperText, Input } from "@chakra-ui/react";
import { InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";


interface InputComponentProps extends ChakraInputProps {
  name: string;
  label?: string;
  helpertext?: string;
  required?: boolean;
}



const InputBaseComponent: ForwardRefRenderFunction<HTMLInputElement, InputComponentProps> = ({name, label, required, helpertext, ...rest}, ref) => {

  return (

    <Field.Root required={required}>
      <Field.Label>
        {label} {required && <Field.RequiredIndicator />}
      </Field.Label>
      <Input name={name} _hover={{bgColor: 'gray.700'}} focusRingColor="pink.300" ref={ref} {...rest} />
      {helpertext && <FieldHelperText>{helpertext}</FieldHelperText>}
    </Field.Root>

  )
}

export const InputComponent = forwardRef(InputBaseComponent);