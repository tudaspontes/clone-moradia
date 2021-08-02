import { Flex, HStack } from "@chakra-ui/react";
import { ItemMenu } from "./ItemMenu";

export function ItemsMenuSection() {
    return (
        <HStack
            as="nav"
            spacing="10"
            px="10"
        >
            <ItemMenu
                href="/funcionamento"
                title="Como Funciona"
            />

            <ItemMenu
                href="/projetos"
                title="Projetos"
            />

            <ItemMenu
                href="/pacote"
                title="Pacote"
            />

            <ItemMenu
                href="/faq"
                title="Dúvidas Frequentes"
            />

            <ItemMenu
                href="/blug"
                title="Nosso Blog"
            />
        </HStack>
    )
}