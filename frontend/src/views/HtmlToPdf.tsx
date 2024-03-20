import { Container, Flex, Text } from "@chakra-ui/react";
import Title from "../components/Typography/Title";

export default function HtmlToPdf() {
  return(
    <Container centerContent>
      <Flex direction={"column"} marginTop={12}>
        <Title text={"Convert HTML to PDF Document"} />
        <Text>Convert web pages to PDF documents with gracefully.</Text>
      </Flex>
      <Flex direction={"column"} marginTop={12}>
        
      </Flex>
    </Container>
  )
}
