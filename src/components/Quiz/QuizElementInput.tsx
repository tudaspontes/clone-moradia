import { Input, Flex } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

import { useLocalStorage } from "../../hook/useLocalStorage";

interface QuizElementInputProps {
  placeholder: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, QuizElementInputProps>
  = ({placeholder, ...rest}:QuizElementInputProps, ref) => {

    const [text, setText] = useLocalStorage('text', '')

    
  return (
    <Flex mb={10}>
      <Input
        onChange={e => setText(e.target.value)}
        value={text}
        name="project"
        variant="filled"
        borderRadius="0"
        size="md"
        bg="gray.50"
        fontSize={12}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
    </Flex>
  )
}

export const QuizElementInput = forwardRef(InputBase)