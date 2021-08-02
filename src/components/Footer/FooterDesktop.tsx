import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";
import { ColumnFooter } from "./ColumnFooter";
import { ColumnLinkFooter } from "./ColumnLinkFooter";
import { SocialFooter } from "./SocialFooter";

export function FooterDesktop() {
    return (
        <HStack
            py="14"
            px="8"
            spacing="8rem"
            align="flex-start"
        >
            <ColumnFooter title="Martin Fierro">
                <ColumnLinkFooter href="/" name="Sobre nós" />
                <ColumnLinkFooter href="/" name="Novidades" />
                <ColumnLinkFooter href="/" name="Contato" />
                <ColumnLinkFooter href="/" name="Todos os produtos" />
            </ColumnFooter>

            <ColumnFooter title="Ajuda">
                <ColumnLinkFooter href="/" name="Ajuda e contato" />
                <ColumnLinkFooter href="/" name="Pedidos & Entregas" />
                <ColumnLinkFooter href="/" name="termos e condições" />
                <ColumnLinkFooter href="/" name="acessibilidade" />
                <ColumnLinkFooter href="/" name="pergutas frequêntes" />
            </ColumnFooter>

            <Flex
                flexDir="column"
            >
                <Text
                    textTransform="uppercase"
                    fontFamily="Roboto"
                    fontWeight="600"
                    color="gray.750"
                    mb="4"
                >
                    Formas de pagamento
                        </Text>
                <Image src="/cards.png" h="40px" minW="245px" objectFit="cover" />
            </Flex>

            <SocialFooter />

        </HStack>
    )
}