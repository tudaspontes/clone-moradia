import { Flex } from "@chakra-ui/react";
import { LinkSlider } from "./LinkSlider";
import { TitleSlider } from "./TitleSlider";

interface SliderSection {
    title?: string;
    titleLink?: string;
    href?: string;
    height?: string;
    image: string;
}

export function SliderSection({ title, titleLink, href, height, image }: SliderSection) {
    return (
        <Flex
            w="100%"
            h={height ? height : '500px'}
            py="8"
            px="8"
            flexDir="column"
            align="center"
            justify="center"
            bgSize="cover"
            bgImage={image}
        >
            <TitleSlider title={title} />
            <LinkSlider href={href} title={titleLink} />
        </Flex>
    )
}