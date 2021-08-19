import { Box, Image, Text } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import { useData } from "../../hook/useData";
interface QuizElementImageProps {
  image: string;
  title: string;
  valueImg: any;
}

const ImageBase: ForwardRefRenderFunction<
  HTMLImageElement,
  QuizElementImageProps
> = ({ image, title, valueImg, ...rest }: QuizElementImageProps, ref) => {
  const [color, setColor] = useState(true);

  const dataCtx = useData();

  return (
    <Box
      as="button"
      type="button"
      onClick={() => {
        setColor(!color);
        const valores = dataCtx.data.image;

        var index = valores.indexOf(valueImg);
        const naoAchouOItem = index === -1;

        if (naoAchouOItem) {
          //Aqui adiciona
          dataCtx.setValues({ image: [...valores, valueImg] });
        } else {
          //Aqui remove
          const getTodosOsValoresMenosOQueEncontrou = valores.filter(
            (v) => v !== valueImg
          );
          dataCtx.setValues({ image: getTodosOsValoresMenosOQueEncontrou });
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
