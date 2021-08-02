import { Button } from "@chakra-ui/react";
import Link from "next/link";

interface BtnCallActionProps {
    href: string;
    title: string;
}

export function BtnCallToAction({ href, title }: BtnCallActionProps) {
    return (
        <Link href={href} passHref>
            <Button
                as="a"
                bg="pink.500"
                size="lg"
                fontSize="md"
                justifyContent="center"
                fontWeight="700"
                borderRadius="0"
                width="16rem"
                mt={10}
                _disabled={{
                    bg: 'gray.500',
                    cursor: 'default'
                }}
                _hover={{
                    bg: 'orange.50'
                }}
                transition='0.5s'
                textTransform="uppercase"
            >
                {title}
            </Button>
        </Link>
    )
}