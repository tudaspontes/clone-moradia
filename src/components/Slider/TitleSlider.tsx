import { Text } from "@chakra-ui/react";

interface TitleSliderProps {
    title?: string;
}

export function TitleSlider({ title }: TitleSliderProps) {
    return (
        <Text
            fontSize="3xl"
            fontWeight="700"
            color="gray.750"
            mb="6"
            textTransform="uppercase"
        >
            {title}
        </Text>
    )
}