import { useEffect, useState } from 'react'
import { Box, Text, Center, useColorModeValue, HStack, useColorMode } from '@chakra-ui/react'
import Title from '../Typography/Title'
import CardItemLink from './CardItemLink'
import CardItemLoved from './CardItemLoved'
import storageManager from '../../utils/storage-manager'

interface ICardItem {
  cardId: number,
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
  const [ likedStoraged, setLikedStoraged ] = useState(false)
  const { colorMode } = useColorMode()
  const toggleColors = colorMode === "light" ? 'unset' : 'white'

  useEffect(() => {
    const featuresLiked = storageManager.get();

    if (featuresLiked !== null) {
      const parsedFeatures = JSON.parse(featuresLiked);
      // Process parsedFeatures here
      parsedFeatures.map((features: any) => {
        if (features === cardId) {
          setLiked(true)
          setLikedStoraged(true)
        }
      })
    }
  }, [liked])

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
          <CardItemLoved liked={liked} setLiked={setLiked} toggleColors={toggleColors} cardId={cardId} likedStoraged={likedStoraged} />
        </HStack>
      </Box>
    </Center>
  )
}
