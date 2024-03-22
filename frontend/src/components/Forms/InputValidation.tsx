import { Text } from "@chakra-ui/react";

interface IInputValidation {
  error: string | undefined,
  touched: boolean | undefined
}

export default function InputValidation({
  error,
  touched
}: IInputValidation) {
  return(
    error && touched ? (
      <Text color={"red.500"} fontSize={"sm"}>{error}</Text>
    ) : null
  )
}
