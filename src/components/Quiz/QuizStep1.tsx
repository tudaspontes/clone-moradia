import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsClock } from "react-icons/bs";
import { GiTakeMyMoney, GiThink } from "react-icons/gi";
import { SEO } from "../../utils/seo";
import { QuizElementIcon } from "./QuizElementIcon";
import { QuizElementImage } from "./QuizElementImage";
import { QuizElementInput } from "./QuizElementInput";
import { QuizTitleHeader } from "./QuizTitleHeader";

interface QuizStep1Props {
  children: ReactNode;
  register: any;
  setValueForm: any;
  getValuesForm: any;
}

export function QuizStep1({
  children,
  register,
  setValueForm,
  getValuesForm,
}: QuizStep1Props) {
  // const { setValues, data } = useData();

  // const { register, handleSubmit } = useForm({
  //   defaultValues: { project: data.project },
  //   mode: "onBlur",
  // });

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
            {...register("image")}
            valueImg="img_1"
            setValueForm={setValueForm}
            getValuesForm={getValuesForm}
            image="/img-1.png"
            title="Sala de estar"
          />
          <QuizElementImage
            {...register("image")}
            valueImg="img_2"
            setValueForm={setValueForm}
            getValuesForm={getValuesForm}
            image="/img-2.png"
            title="Quarto"
          />
          <QuizElementImage
            {...register("image")}
            valueImg="img_3"
            setValueForm={setValueForm}
            getValuesForm={getValuesForm}
            image="/img-1.png"
            title="Sala de estar"
          />
          <QuizElementImage
            {...register("image")}
            valueImg="img_4"
            setValueForm={setValueForm}
            getValuesForm={getValuesForm}
            image="/img-2.png"
            title="Quarto"
          />
          <QuizElementImage
            {...register("image")}
            valueImg="img_5"
            setValueForm={setValueForm}
            getValuesForm={getValuesForm}
            image="/img-1.png"
            title="Sala de estar"
          />
          <QuizElementImage
            {...register("image")}
            valueImg="img_6"
            setValueForm={setValueForm}
            getValuesForm={getValuesForm}
            image="/img-2.png"
            title="Quarto"
          />
        </SimpleGrid>
        <Text mb={4} mt={10} color="gray.650" textAlign="justify">
          {" "}
          Que <strong>nome</strong> vamos dar à transformação?{" "}
        </Text>
        <QuizElementInput
          {...register("project")}
          placeholder="Ex: Cantinho dos estudos"
        />
        <Text mb={4} color="gray.650" textAlign="justify">
          {" "}
          O que é mais <strong>difícil</strong> pra você na hora de{" "}
          <strong>decorar</strong>?{" "}
        </Text>

        <SimpleGrid columns={3}>
          <QuizElementIcon name={BsClock} text="Tempo" />
          <QuizElementIcon name={GiTakeMyMoney} text="Dinheiro" />
          <QuizElementIcon name={GiThink} text="Ideias" />
        </SimpleGrid>
        {children}
      </Box>
    </>
  );
}
