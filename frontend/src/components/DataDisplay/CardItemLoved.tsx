import { Flex } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import storageManager from "../../utils/storage-manager";

interface ICardItemLoved {
  cardId: number
  liked: boolean,
  likedStoraged: boolean,
  setLiked: Dispatch<SetStateAction<boolean>>,
  toggleColors: any | undefined
}

export default function CardItemLoved({
  cardId,
  likedStoraged,
  liked,
  setLiked,
  toggleColors
}: ICardItemLoved) {
  return(
    <Flex
      p={4}
      alignItems="center"
      justifyContent={'space-between'}
      roundedBottom={'sm'}
      borderLeft={'1px'}
      cursor="pointer"
      onClick={() => setLiked(!liked)}>
      {liked && likedStoraged
        ? <BsHeartFill color={toggleColors} fill="red" fontSize={'24px'} onClick={() => storageManager.delete({ featureToRemove: cardId })} />
        : <BsHeart color={toggleColors} fontSize={'24px'} onClick={() => storageManager.save({ featureToSave: cardId })} />
      }
    </Flex>
  )
}
