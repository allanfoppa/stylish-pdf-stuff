import {
  Box,
  Heading,
  Container,
  Text,
  Stack
} from '@chakra-ui/react'

export default function Hero() {
  return (
    <Container maxW={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
      >
        <Heading
          fontWeight={600}
          lineHeight={'110%'}
        >
          Almost no features for <br />
          <Text as={'span'} color={'gray.500'}>
            CONVERTING PDFS.
          </Text>
        </Heading>
        <Text color={'gray.500'}>
          All are 100% FREE and easy to use! Do they work? I don't know. But it was done with care.
        </Text>
      </Stack>
    </Container>
  )
}
