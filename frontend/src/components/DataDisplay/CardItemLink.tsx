import { Flex, Text } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

interface ICardItemLink {
  link: String
}

export default function CardItemLink({
  link
}: ICardItemLink) {
  return(
    <Link to={`${link}`} style={{ width: "100%" }}>
      <Flex
        p={4}
        alignItems="center"
        justifyContent={'space-between'}
        roundedBottom={'sm'}
        cursor={'pointer'}
      >
          <Text fontSize={'md'} fontWeight={'semibold'}>
              Go to
          </Text>
          <BsArrowUpRight />
      </Flex>
    </Link>
  )
}
