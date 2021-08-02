import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { SEO } from "../../utils/seo";
import { QuizTitleHeader } from "./QuizTitleHeader";

interface QuizStep2Props {
  children: ReactNode;
}

export function QuizStep2({ children }: QuizStep2Props) {
  return (
    <>
      <SEO title="Passo 2 - Quiz" />

      <Box m="6" mt="2rem">
        <QuizTitleHeader
          title="Escolha o estilo que combina com você"
          subtitle="Vamos deixar seu espaço com seu estilo"
        />
        {/* <SimpleGrid columns={2} gap={2}>
          <QuizElementImage image="/img-1.png" title="Sofisticado" />
          <QuizElementImage image="/img-2.png" title="Divertido" />
          <QuizElementImage image="/img-1.png" title="Prático" />
          <QuizElementImage image="/img-2.png" title="Romântico" />
          <QuizElementImage image="/img-1.png" title="Industrial" />
          <QuizElementImage image="/img-2.png" title="Minimalista" />
        </SimpleGrid> */}
        {children}
      </Box>
    </>
  );
}
