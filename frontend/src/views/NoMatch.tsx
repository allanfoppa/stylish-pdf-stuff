import { Link } from "react-router-dom";
import { PATHS } from "../enums/paths.enum";
import { Container, Text } from "@chakra-ui/react";
import Title from "../components/Typography/Title";

export default function NoMatch() {
  return (
    <Container centerContent paddingTop={112}>
      <Title text="Nothing to see here!" />
      <Text fontSize='18px' color='tomato' paddingTop={6}>
        <Link to={PATHS.HOME}>Go to the home page</Link>
      </Text>
    </Container>
  );
}
