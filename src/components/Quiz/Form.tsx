import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FormProps {
  onSubmit: () => void;
  children: ReactNode
}

export function Form({children, onSubmit}: FormProps) {
  return(
    <Flex>
      <form noValidate>
        {children}
      </form>
    </Flex>
  )
}