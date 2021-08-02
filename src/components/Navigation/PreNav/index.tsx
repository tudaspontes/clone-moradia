import { Alert, AlertDescription, CloseButton, Text } from "@chakra-ui/react";
import { useState } from "react";

export function PreNav() {

    const [isClose, setIsClose] = useState(false)

    return (
        <Alert
            bg="gray.50"
            align="center"
            px="10"
            justify="center"
            display={isClose ? 'none' : 'block'}>

            <AlertDescription fontSize="small">
                Moradia Criativa sobre COVID-19,
                <Text
                    as="span"
                    ml="1"
                    fontWeight="500"
                    color="orange.50"
                >
                    veja mais
                </Text>
            </AlertDescription>
            <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={() => setIsClose(true)} />
        </Alert>

    )
}