import { Select } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { useLocalStorage } from "../../hook/useLocalStorage";
interface QuizElementSelectProps {
  optionValue1: number;
  optionValue2: number;
  optionValue3: number;
  optionName1: string;
  optionName2: string;
  optionName3: string;
}

const SelectBase: ForwardRefRenderFunction <HTMLSelectElement,QuizElementSelectProps> = ({optionValue1, optionName1, optionName2, optionName3, optionValue2, optionValue3, ...rest}:QuizElementSelectProps, ref) => {
  
  const [option, setOption] = useLocalStorage('option', '')

  return (
  
      <Select
        onChange={(e) => setOption(e.target.value)}
        value={option}
        name="Quanto"
        placeholder="Selecione..."
        variant="filled"
        borderRadius="0"
        size="md"
        fontSize="sm"
        bg="gray.50"
        ref={ref}
        {...rest}
      >
        <option value={optionValue1}>{optionName1}</option>
        <option value={optionValue2}>{optionName2}</option>
        <option value={optionValue3}>{optionName3}</option>
      </Select>
  )
}

export const QuizElementSelect = forwardRef(SelectBase)