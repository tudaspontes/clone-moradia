import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useData } from "../../hook/useData";
import { SEO } from "../../utils/seo";
import { QuizElementColor } from "./QuizElementColor";
import { QuizElementSelect } from "./QuizElementSelect";
import { QuizElementSelectV2 } from "./QuizElementSelectV2";
import { QuizElementTextArea } from "./QuizElementTextArea";
import { QuizTitleHeader } from "./QuizTitleHeader";

interface QuizStep3Props {
  children: ReactNode;
}

export function QuizStep3({ children }: QuizStep3Props) {
  const { setValues, data } = useData();

  // const { register, handleSubmit } = useForm({
  //   defaultValues: { Quanto: data.Quanto },
  //   mode: "onBlur",
  // });

  function onSubmit(data) {
    setValues(data);
  }

  return (
    <>
      <SEO title="Passo 3 - Quiz" />

      <Box m="6" mt="2rem">
        <QuizTitleHeader
          title="Quais mudanças vamos fazer?"
          subtitle="O que deseja que a gente faça?"
        />
        {/* <SimpleGrid columns={2} gap={2}>
          <QuizElementImage image="/img-1.png" title="Pintura" />
          <QuizElementImage image="/img-2.png" title="Papel de Parede" />
          <QuizElementImage image="/img-1.png" title="Prateleiras" />
          <QuizElementImage image="/img-2.png" title="Tapetes" />
          <QuizElementImage image="/img-1.png" title="Luminárias" />
          <QuizElementImage image="/img-2.png" title="Espelhos" />
        </SimpleGrid> */}
        <Text mt={10} mb={4} color="gray.650">
          {" "}
          Quanto você <strong>pretende</strong> investir?{" "}
        </Text>
        <QuizElementSelectV2
          optionValue={[
            { value: "1", label: "Até R$ 3.000,00" },
            { value: "2", label: "de R$ 3.000,00 a R$7.000,00" },
            { value: "3", label: "Mais que R$ 7.000,00" },
          ]}
          name="quanto"
        />
        <Text mt={10} color="gray.650">
          Conte um pouco <strong>sobre você</strong>:
        </Text>
        <Text mb={4} fontSize="xs" color="gray.250">
          Se quiser, pode responder depois!
        </Text>
        <QuizElementTextArea placeholder="Ex: Homem, solteiro, pai de um dog, designer e programador. Fico muito tempo no escritório e sou apaixonado por música!" />
        <Text mt={10} color="gray.650">
          Escolha as <strong>cores</strong> para seu ambiente{" "}
        </Text>
        <Text mb={4} fontSize="xs" color="gray.250">
          Escolha até 3 cores diferentes
        </Text>
        <QuizElementColor />
        <Text mt={10} mb={4} color="gray.650">
          <strong>Quem</strong> vai usar esse local?
        </Text>
        <QuizElementSelectV2
          optionValue={[
            { value: "1", label: "Eu mesmo" },
            { value: "2", label: "Filhos" },
            { value: "3", label: "Visitas" },
          ]}
          name="quemVaiUsarEsseLocal"
        />
        <Text mt={10} mb={4}>
          Para quê vai <strong>servir</strong> o ambiente?
        </Text>
        <QuizElementSelect
          optionValue1={1}
          optionName1="Lazer"
          optionValue2={2}
          optionName2="Estudos"
          optionValue3={3}
          optionName3="Trabalho"
        />
        <Text mt={10} color="gray.650">
          Quais seus <strong>desejos e necessidades?</strong>
        </Text>
        <Text mb={4} fontSize="xs" color="gray.250">
          Conta pra gente um pouco do que você pensa como cantinho ideal
        </Text>
        <QuizElementTextArea placeholder="Ex: Gostaria muito de uma mesa de jantar com 6 lugares. Preciso de um sofá-cama para a sala." />
        {children}
      </Box>
    </>
  );
}
