import { Heading } from '@chakra-ui/react'

interface ITitle {
  text: string
}

export default function Title({
  text
}: ITitle) {
  return(
    <Heading fontSize={'2xl'} noOfLines={1}>
      {text}
    </Heading>
  )
}
