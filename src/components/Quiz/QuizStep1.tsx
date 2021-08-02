import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import { BsClock } from "react-icons/bs"
import { GiThink, GiTakeMyMoney } from "react-icons/gi"

import { QuizTitleHeader } from './QuizTitleHeader';
import { QuizElementImage } from './QuizElementImage';
import { QuizElementInput } from './QuizElementInput';
import { QuizElementIcon } from './QuizElementIcon';
import { Form } from './Form';
import { SEO } from "../../utils/seo";
import { useForm } from "react-hook-form";
import { useData } from "../../hook/useData";
import { ReactNode } from "react";
interface QuizStep1Props {
  children: ReactNode;
}

export function QuizStep1({ children }: QuizStep1Props) {
  const { setValues, data }  = useData()

  const { register, handleSubmit } = useForm({
    defaultValues: {project:data.project},
    mode: "onBlur",
  })

  function onSubmit(data) {
    setValues(data)
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}>
      <SEO title="Quiz" />
      <Box m="6" mt="2rem">
        <QuizTitleHeader title="Sobre seu ambiente" subtitle="Escolha o ambiente que iremos transformar!" />
        <SimpleGrid columns={2} gap={2}>
          <QuizElementImage image="/img-1.png" title="Sala de estar" />
          <QuizElementImage image="/img-2.png" title="Quarto" />
          <QuizElementImage image="/img-1.png" title="Sala de estar" />
          <QuizElementImage image="/img-2.png" title="Quarto" />
          <QuizElementImage image="/img-1.png" title="Sala de estar" />
          <QuizElementImage image="/img-2.png" title="Quarto" />
        </SimpleGrid>
        <Text mb={4} mt={10} color="gray.650" textAlign="justify" > Que <strong>nome</strong> vamos dar à transformação? </Text>
        <QuizElementInput {...register('project')} placeholder="Ex: Cantinho dos estudos" />
        <Text mb={4} color="gray.650" textAlign="justify" > O que é mais <strong>difícil</strong> pra você na hora de <strong>decorar</strong>? </Text>
        <SimpleGrid columns={3}>
          <QuizElementIcon name={BsClock} text="Tempo" />
          <QuizElementIcon name={GiTakeMyMoney} text="Dinheiro"/>
          <QuizElementIcon name={GiThink} text="Ideias"/>
        </SimpleGrid>
        {children}
      </Box>
    </Form>
  )
}