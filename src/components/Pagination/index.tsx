import { Flex, Button } from "@chakra-ui/react"
interface PaginationProps {
  onClick?: () => void;
}

export function Pagination({ onClick }:PaginationProps) {
  return (
    <Flex
      mt={12}
      mb={32}
      justifyContent="space-around"
    >  
      <Button
        type="submit"
        onClick={onClick}
        bg= "pink.500"
        size="lg"
        fontSize="md"
        justifyContent="center"
        fontWeight="700"
        borderRadius="0"
        color="white"
        width="24rem"
        cursor="default"
        _disabled={{
          bg: 'gray.500',
          cursor: 'default'
        }}
        _hover={{
          bg: 'orange.50'
        }}
        transition='0.5s'
      >PRÓXIMO PASSO
      </Button>
    </Flex>
  )
}