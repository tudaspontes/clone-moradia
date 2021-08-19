import { Select } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { useData } from "../../hook/useData";
interface QuizElementSelectProps {
  optionValue: { value: string; label: string }[];
  name: string;
}

const SelectBase: ForwardRefRenderFunction<
  HTMLSelectElement,
  QuizElementSelectProps
> = ({ optionValue, name }: QuizElementSelectProps, ref) => {
  const dataCtx = useData();

  return (
    <Select
      onChange={(e) => dataCtx.setValues({ [name]: e.target.value })}
      name={name}
      placeholder="Selecione..."
      variant="filled"
      borderRadius="0"
      size="md"
      fontSize="sm"
      bg="gray.50"
      ref={ref}
    >
      {optionValue
        ? optionValue.map((item, key) => (
            <option key={key} value={item.value}>
              {item.label}
            </option>
          ))
        : null}
    </Select>
  );
};

export const QuizElementSelectV2 = forwardRef(SelectBase);
