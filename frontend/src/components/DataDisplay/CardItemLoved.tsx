import { Flex } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

interface ICardItemLoved {
  liked: boolean,
  setLiked: Dispatch<SetStateAction<boolean>>,
  toggleColors: any | undefined
}

export default function CardItemLoved({
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
      {liked
        ? <BsHeartFill color={toggleColors} fill="red" fontSize={'24px'} />
        : <BsHeart color={toggleColors} fontSize={'24px'} />
      }
    </Flex>
  )
}
