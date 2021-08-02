import { Box, Image, Text } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction, useState } from "react";
interface QuizElementImageProps {
  image: string;
  title: string;
  setValueForm: any;
  getValuesForm: any;
  valueImg: any;
}

const ImageBase: ForwardRefRenderFunction<
  HTMLImageElement,
  QuizElementImageProps
> = (
  {
    image,
    title,
    setValueForm,
    getValuesForm,
    valueImg,
    ...rest
  }: QuizElementImageProps,
  ref
) => {
  const [color, setColor] = useState(true);

  return (
    <Box
      as="button"
      type="button"
      onClick={() => {
        setColor(!color);
        const valores = getValuesForm("image");

        var index = valores.indexOf(valueImg);
        if (index === -1) {
          setValueForm("image", [...valores, valueImg]);
        } else {
          const novoValores = valores.filter((v) => v !== valueImg);
          setValueForm("image", novoValores);
        }
      }}
    >
      <Image
        name="image"
        border="4px"
        borderColor={color ? "white" : "pink.500"}
        transition="0.5s"
        width="100%"
        height="12rem"
        mt={10}
        objectFit="cover"
        src={image}
        alt="Sala com livro Channel"
        {...rest}
        ref={ref}
      ></Image>

      <Text align="center" color="gray.650">
        {title}
      </Text>
    </Box>
  );
};

export const QuizElementImage = forwardRef(ImageBase);
