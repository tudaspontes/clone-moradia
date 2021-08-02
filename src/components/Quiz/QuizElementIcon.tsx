import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";

import { useState } from "react";
import { IconType } from "react-icons";

interface QuizElementIconsProps {
  name: IconType;
  text: string;
}

export function QuizElementIcon({ name, text }: QuizElementIconsProps) {
  const [iconColor, setIconColor] = useState(true)
  return (
    <Flex justifyContent="center">
        <Box
          color={iconColor ? 'black' : 'orange.50'} 
          onClick={() => setIconColor(!iconColor)}
          transition="0.5s"
          align="center"
          alignContent="center"
        >
        
          <Icon
            as={name}
            mt={6}
            mb={6}
            w="71px"
            h="71px"
            alignContent="center"
          />
          <Text
            w="71px" h="71px">{text}
            </Text>
        </Box>
    </Flex>
  )
}