import { Text } from "@chakra-ui/react";
import Link from "next/link";

export function ItemMenu({href,title}){
    return(
        <Link href={href} passHref>
            <Text
                as="a"
                fontWeight="500"
                textTransform="uppercase"
                fontSize="0.875rem"
                lineHeight="5rem"
            >
                {title}
            </Text>
        </Link>
    )
}