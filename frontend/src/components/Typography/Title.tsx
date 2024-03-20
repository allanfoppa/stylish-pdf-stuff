import { Heading } from '@chakra-ui/react'

interface ITitle {
  text: string
}

export default function Title({
  text
}: ITitle) {
  return(
    <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
      {text}
    </Heading>
  )
}
