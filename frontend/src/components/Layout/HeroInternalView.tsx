import { Flex, Text } from "@chakra-ui/react";
import Title from "../Typography/Title";

interface IHeroInternalView {
  title: string
  text: string
}

export default function HeroInternalView({
  title,
  text
}: IHeroInternalView) {
  return(
    <Flex direction={"column"} marginTop={12} textAlign={"center"}>
      <Title text={title} />
      <Text>{text}</Text>
    </Flex>
  )
}
