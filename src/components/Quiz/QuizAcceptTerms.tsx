import { Box, Button, Checkbox, Flex, Text } from "@chakra-ui/react";
import { useData } from "../../hook/useData";
import { SEO } from "../../utils/seo";
import { QuizTitleHeader } from "./QuizTitleHeader";

export function QuizAcceptTerms() {
  const dataCtx = useData();
  console.log("dataCtx:", dataCtx);

  return (
    <>
      <SEO title="Aceitar termos" />
      <Box m="6" mt="2rem">
        <QuizTitleHeader
          title="Termos e Condições"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus quidem libero ex tempore velit corrupti dolores tenetur. Dolorem, commodi."
        />
        <Text mt="2rem" textAlign="justify">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga sit
          tempore ratione! Excepturi architecto commodi, sapiente voluptas
          libero voluptate velit, adipisci vel atque provident iusto possimus
          porro eaque et repudiandae sunt praesentium quae. Eos hic labore sunt
          in, dicta inventore adipisci atque laboriosam excepturi eligendi, quod
          pariatur nemo quam fugit error, velit nihil. Quidem accusamus nihil
          rerum repellendus odit eum sint quam est similique earum, blanditiis
          dolorum mollitia unde facere, expedita doloribus. Nam harum recusandae
          nostrum asperiores dignissimos iste eveniet ipsa voluptate vitae
          debitis, in ipsum, dicta adipisci reiciendis ratione impedit
          voluptatum nobis facilis doloremque! Corrupti modi necessitatibus
          molestias maxime veritatis aliquam culpa rerum velit sed nulla debitis
          consequuntur accusantium fugiat possimus unde, nihil quas. Tenetur
          reiciendis itaque architecto accusamus, magni ratione aut vero? Quis
          est expedita assumenda, eveniet quisquam ratione vel sit magni minima
          provident, cupiditate adipisci sequi rerum iusto quasi alias, deserunt
          deleniti fugit ad nesciunt harum laboriosam ab enim. Temporibus
          recusandae consequatur vitae blanditiis cupiditate, pariatur impedit
          soluta sunt deserunt perspiciatis quo quam quos nulla omnis dicta
          placeat est nihil repellat aliquid. Similique recusandae iusto ab
          quasi fugit reiciendis ex voluptatibus illum, officiis esse corporis
          quaerat cupiditate ipsa eaque nisi. Ullam illo sed voluptatum, maiores
          adipisci sit!{" "}
        </Text>
        <Flex mt="2rem">
          <Checkbox spacing={5} colorScheme="pink">
            Aceito os termos e condições.
          </Checkbox>
          <Button
            type="submit"
            onClick={async () => {
              const res = await fetch("http://localhost:3000/", {
                method: "POST",
                body: JSON.stringify(dataCtx.data),
              });

              if (res.status === 200) {
                alert("Até aqui tudo bem!");
              }
            }}
            bg="pink.500"
            color="white"
            size="lg"
            fontSize="md"
            justifyContent="center"
            fontWeight="700"
            borderRadius="0"
            width="16rem"
            _disabled={{
              bg: "gray.500",
              cursor: "default",
            }}
            _hover={{
              bg: "orange.50",
            }}
            transition="0.5s"
            textTransform="uppercase"
          >
            Continuar
          </Button>
        </Flex>
      </Box>
    </>
  );
}
