import { Flex, Input } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface QuizElementInputProps {
  placeholder: string;
}

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  QuizElementInputProps
> = ({ placeholder, ...rest }: QuizElementInputProps, ref) => {
  return (
    <Flex mb={10}>
      <Input
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
  );
};

export const QuizElementInput = forwardRef(InputBase);
