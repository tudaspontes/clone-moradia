import { VStack, DrawerBody } from "@chakra-ui/react";

import { IoIosHelpCircleOutline } from 'react-icons/io'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { AiOutlineMail } from 'react-icons/ai'

import { ItemLinkSidebar } from "./ItemLinkSidebar";
import { ItemLinkSimple } from "./ItemLinkSimple";


export function BodySidebar() {
    return (
        <DrawerBody px="0" py="6">
            <VStack>
                <ItemLinkSidebar category="Como funciona" href="/categorias/mulher" />
                <ItemLinkSidebar category="projetos" href="/categorias/homem" />
                <ItemLinkSidebar category="pacote" href="/categorias/novidades" />
                <ItemLinkSidebar category="dúvidas frequêntes" href="/categorias/magazine" />
                <ItemLinkSidebar category="nosso blog" href="/categorias/trends" />

            </VStack>

            <VStack spacing="4" w="100%" pt="6">
                <ItemLinkSimple
                    href="/login"
                    name="Precisa de ajuda?"
                    icon={<IoIosHelpCircleOutline size="25" color="#222222" />}
                />
                <ItemLinkSimple
                    href="/"
                    name="contato@moradiaCriativa.com.br"
                    icon={<AiOutlineMail size="25" color="#222222" />}

                />

                <ItemLinkSimple
                    href="/"
                    name="99 9 9999 - 9999"
                    icon={<IoLogoWhatsapp size="25" color="#222222" />}

                />

            </VStack>

        </DrawerBody>
    )
}