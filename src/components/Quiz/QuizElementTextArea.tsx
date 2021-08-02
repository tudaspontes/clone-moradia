import { Box, Textarea } from "@chakra-ui/react";
import { useLocalStorage } from "../../hook/useLocalStorage";

interface QuizElementTextAreaProps {
  placeholder: string
}

export function QuizElementTextArea({placeholder}: QuizElementTextAreaProps) {

  const [textArea, setTextArea] = useLocalStorage('textArea', '')
  return (
    <Box mt={5}>
      <Textarea
        onChange={(e) => setTextArea(e.target.value)}
        value={textArea}
        placeholder={placeholder}
        fontSize="sm"
        fontWeight="thin"
        color="gray.250"
        h="100px"
        variant="filled"
        borderRadius="0"
        size="lg"
        textAlign="left"
        bg="gray.50"
      />
    </Box>
  )
}