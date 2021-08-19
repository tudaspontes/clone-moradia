import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { SEO } from "../../utils/seo";
import { QuizElementIconGroup } from "./QuizElementIconGroup";
import { QuizElementImage } from "./QuizElementImage";
import { QuizElementInput } from "./QuizElementInput";
import { QuizTitleHeader } from "./QuizTitleHeader";

interface QuizStep1Props {
  children: ReactNode;
}

export function QuizStep1({ children }: QuizStep1Props) {
  return (
    <>
      <SEO title="Quiz" />
      <Box m="6" mt="2rem">
        <QuizTitleHeader
          title="Sobre seu ambiente"
          subtitle="Escolha o ambiente que iremos transformar!"
        />
        <SimpleGrid columns={2} gap={2}>
          <QuizElementImage
            valueImg="img_1"
            image="/img-1.png"
            title="Sala de estar"
          />
          <QuizElementImage
            valueImg="img_2"
            image="/img-2.png"
            title="Quarto"
          />
          <QuizElementImage
            valueImg="img_3"
            image="/img-1.png"
            title="Sala de estar"
          />
          <QuizElementImage
            valueImg="img_4"
            image="/img-2.png"
            title="Quarto"
          />
          <QuizElementImage
            valueImg="img_5"
            image="/img-1.png"
            title="Sala de estar"
          />
          <QuizElementImage
            valueImg="img_6"
            image="/img-2.png"
            title="Quarto"
          />
        </SimpleGrid>
        <Text mb={4} mt={10} color="gray.650" textAlign="justify">
          {" "}
          Que <strong>nome</strong> vamos dar à transformação?{" "}
        </Text>
        <QuizElementInput placeholder="Ex: Cantinho dos estudos" />
        <Text mb={4} color="gray.650" textAlign="justify">
          {" "}
          O que é mais <strong>difícil</strong> pra você na hora de{" "}
          <strong>decorar</strong>?{" "}
        </Text>

        <SimpleGrid columns={3}>
          <QuizElementIconGroup />
        </SimpleGrid>
        {children}
      </Box>
    </>
  );
}
