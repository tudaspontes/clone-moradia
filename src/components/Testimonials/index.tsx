import { Box, Icon, Text, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { ImQuotesRight } from "react-icons/im";
import { SliderSection } from "../Slider";


export function Testimonials() {
  return(
    <>
    <SliderSection title="teste" titleLink="teste" href="teste" image="img-index2.jpg"/>
    <Box
      maxW={1340}
      margin="0 auto"
      w="100%"   
      px={6}
    >
      
      <Flex
        color="pink.500"
        align="center"
        fontSize="1.5rem"
        my={14}
        justify="center"
      >
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </Flex>      
      <Text align="center">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatum corrupti molestiae pariatur, consequatur magni ratione qui nesciunt ullam commodi deserunt amet labore porro inventore"
      </Text>
      <Text align="center" fontWeight="600" my={4}>
        Matheus Maximiliano - São Paulo
      </Text>
      <Flex justifyContent="flex-end">
        <Icon
          as={ImQuotesRight}
          fontSize="5rem"
          color="pink.500"
          mb={16}
        />
      </Flex>      
    </Box>
    </>
  )
}