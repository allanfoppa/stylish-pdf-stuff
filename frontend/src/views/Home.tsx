import { Container, Flex } from "@chakra-ui/react";
import CardItem from "../components/DataDisplay/CardItem";
import { PATHS } from "../enums/paths.enum";

export default function Home() {
  return(
    <Container centerContent>
      <Flex>
        <CardItem title="HTML to PDF" description="description 1" link={PATHS.HTML_TO_PDF} />
        <CardItem title="PDF from a URL" description="description 2" link={PATHS.PDF_FROM_A_URL} />
        <CardItem title="PDF File from Images" description="description 3" link={PATHS.PDF_FILE_FROM_IMAGES} />
      </Flex>
    </Container>
  )
}
