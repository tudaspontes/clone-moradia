import { Flex, Text } from "@chakra-ui/layout";
import Link from "next/link";

import { RiArrowRightSLine } from 'react-icons/ri'

interface ItemLinkSidebarProps {
    category: string;
    href?: string;
}

export function ItemLinkSidebar({ category, href }: ItemLinkSidebarProps) {
    return (
        <Link href={href ? href : '/'}>
            <Flex
                as="a"
                w="100%"
                align="center"
                cursor="pointer"
                borderBottom="1px solid #eaeaea"
                px="6"
                py="4"
            >
                <Text
                    fontWeight="500"
                    color="blue.750"
                    fontSize="small"
                    textTransform="uppercase"
                    mr="auto"
                >
                    {category}
                </Text>
                <RiArrowRightSLine size="20" color="#30444D" />
            </Flex>
        </Link>
    )
}