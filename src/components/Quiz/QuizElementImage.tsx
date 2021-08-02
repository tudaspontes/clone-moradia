import { Box, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import useForm from "../../hook/useForm"
import { forwardRef, ForwardRefRenderFunction } from "react";
interface QuizElementImageProps {
  image: string;
  title: string;
}

const ImageBase: ForwardRefRenderFunction<HTMLImageElement, QuizElementImageProps>
  = ({image, title, ...rest}: QuizElementImageProps, ref) => {

    const { handleChange, handleSubmit, values } = useForm()

    function handleImage(data) {
      console.log(data)
    }
  
    const [color, setColor] = useState(true)
  
  return (
    <Box
    as="form"
    onSubmit={() => handleSubmit(handleImage)}>
      <Image
        name="image"
        value={values.image}
        border="4px"
        borderColor={color ? 'white' : 'pink.500'}
        transition="0.5s"
        onClick={() => setColor(!color)}
        onChange={handleChange}
        width="100%"
        height="12rem"
        mt={10}
        objectFit="cover"
        src={image}
        alt="Sala com livro Channel"
        {...rest}
        ref={ref}
      >
      </Image>
      
      <Text
        align="center"
        color="gray.650"
      >
        {title}
      </Text>
    </Box>
  )
}

export const QuizElementImage = forwardRef(ImageBase)