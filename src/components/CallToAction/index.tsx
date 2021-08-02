import { Button, Box, Text, Flex } from "@chakra-ui/react";
import { BtnCallToAction } from "../Buttons/BtnCallToAction";

interface CallToActionProps {
  image: string;
  text: string;
  subText: string;
  height?: string;
}

export function CallToAction({ image, text, subText, height }: CallToActionProps) {
  return (
    <Box
      bgImage={image}
      bgSize="cover"
      h={height ? height : '500px'}
      opacity={1}
    >
      <Flex
        maxWidth={1340}
        margin="0 auto"
        w="100%"
        h="100%"
        color="white"
        pt={8}
        px={6}
        flexDir="column"
        justify="center"
        align="flex-start"
      >
        <Text
          fontSize="2.5rem"
          fontWeight="black"
          lineHeight="1.3"
          w={["100%","35rem"]}
        >
          {text}
        </Text>
        <Text
          w={["100%","30rem"]}
          mt="4"
          as="span"
        >
          {subText}
        </Text>

        <BtnCallToAction href="/quiz" title="criar seu cantinho" />

      </Flex>
    </Box>
  )
}