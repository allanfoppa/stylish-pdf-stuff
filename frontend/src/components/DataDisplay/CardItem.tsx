import { useState } from 'react'
import { Box, Text, Center, useColorModeValue, HStack, useColorMode } from '@chakra-ui/react'
import Title from '../Typography/Title'
import CardItemLink from './CardItemLink'
import CardItemLoved from './CardItemLoved'

interface ICardItem {
  cardId: Number,
  title: String,
  description: String,
  link: String
}

export default function CardItem({
  cardId,
  title,
  description,
  link
}: ICardItem) {

  const [ liked, setLiked ] = useState(false)

  const { colorMode } = useColorMode();
  const toggleColors = colorMode === "light" ? 'unset' : 'white'

  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        border={'1px'}
        borderColor="gray.200"
        boxShadow={useColorModeValue('6px 6px 0 #E2E8F0', '6px 6px 0 #E2E8F0')}
      >
        <Box p={4}>
          <Title text={`${title}`} />
          <Text color={'gray.500'} noOfLines={2}>
            {description}
          </Text>
        </Box>
        <HStack borderTop={'1px'}>
          <CardItemLink link={link} toggleColors={toggleColors} />
          <CardItemLoved liked={liked} setLiked={setLiked} toggleColors={toggleColors} />
        </HStack>
      </Box>
    </Center>
  )
}
