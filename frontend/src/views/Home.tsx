import { Container, Flex } from "@chakra-ui/react";

import CardItem from "../components/DataDisplay/CardItem";
import { features } from "../constants/features.constant";

export default function Home() {
  return(
    <Container centerContent>
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
