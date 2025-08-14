import { Field, FieldHelperText, Input, Text, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";


interface InputComponentProps extends ChakraInputProps {
  name: string;
  label?: string;
  helpertext?: string;
  required?: boolean;
  error?: string;
}



const InputBaseComponent: ForwardRefRenderFunction<HTMLInputElement, InputComponentProps> = ({name, label, required, helpertext, error, ...rest}, ref) => {

  return (

    <Field.Root required={required} invalid={!!error}>
      <Field.Label>
        {label} {required && <Field.RequiredIndicator />}
      </Field.Label>
      <Input name={name} _hover={{bgColor: 'gray.700'}} focusRingColor="pink.300" ref={ref} {...rest} />
      {/* {helpertext && <FieldHelperText>{helpertext}</FieldHelperText>} */}
      {error ? (
        <Text fontSize="sm" color="red.300" mt={1}>
          {error}
        </Text>
      ) : (
        helpertext && <FieldHelperText>{helpertext}</FieldHelperText>
      )}
    </Field.Root>

  )
}

export const InputComponent = forwardRef(InputBaseComponent);