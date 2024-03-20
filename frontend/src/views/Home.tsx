import { Container, Flex, Text } from "@chakra-ui/react";

import CardItem from "../components/DataDisplay/CardItem";
import Hero from "../components/Layout/Hero";

import { features } from "../constants/features.constant";

export default function Home() {
  return(
    <Container centerContent>
      <Flex marginTop={12} direction={"column"} align={"center"}>
        <Hero />
      </Flex>
      <Flex>
        {features.map((feature) => {
          return(
            <CardItem
              key={feature.id}
              cardId={feature.id}
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          )
        })}
      </Flex>
    </Container>
  )
}
