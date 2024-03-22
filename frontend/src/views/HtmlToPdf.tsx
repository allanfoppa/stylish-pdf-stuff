import { CSSProperties, useContext, useState } from 'react';
import { Box, Button, Container, Flex, Select, Spinner, Text, Textarea } from "@chakra-ui/react";
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { initalHTMLSnippet } from '../constants/inital-html-snippet';
import { codeTheme } from '../constants/code-theme';
import { handleWithTabPressed } from '../utils/handle-with-tab-pressed';
import { handleSetCodeTheme } from '../utils/handle-set-code-theme';
import CodeBlock from '../components/DataDisplay/CodeBlock';
import { htmlToPDF } from '../services/html-to-pdf.service';
import { AppContext } from '../contexts/App.context';
import HeroInternalView from '../components/Layout/HeroInternalView';

export default function HtmlToPdf() {

  const [ codeString, setCodeString ] = useState<string>(initalHTMLSnippet)
  const [ codeCurrentTheme, setCodeCurrentTheme ] = useState<CSSProperties>(stackoverflowDark)

  const { loading, setLoading } = useContext(AppContext)

  const generatePDF = async () => {
    setLoading(true);
    try {
      await htmlToPDF({ htmlContent: codeString });
      // After PDF generation is complete, set loading to false
      setLoading(false);
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Handle error as needed
      setLoading(false); // Make sure to set loading to false on error too
    }
  }

  return(
    <Container centerContent>
      <HeroInternalView
        title={'Convert HTML to PDF Document'}
        text={'Convert web pages to PDF documents with gracefully.'}
      />
      <Flex direction={"row"} marginTop={12} w={1200} gap={12}>
        <Box
          w={400}
        >
          <Flex marginBottom={3} direction={"row"} justify={"space-between"}>
            <Text fontWeight={"bold"}>Paste the HTML code:</Text>
            <Text onClick={() => setCodeString('')} cursor={"pointer"} color={"red.500"}>clear code</Text>
          </Flex>
          <Textarea
            resize="none"
            id="html-code"
            rows={15}
            onChange={(e) => {
              setCodeString(e.target.value)
              handleWithTabPressed({ id: "html-code" })
            }}
            value={codeString}
          />

          {codeString.length > 0 && (
            <Button
              width={"100%"}
              marginTop={3}
              onClick={() => generatePDF()}
            >
            <Flex alignItems={"center"} gap={2}>
              {loading && <Spinner />}
              CONVERT
            </Flex>
            </Button>
          )}
        </Box>
        <Box w={800}>
          <Flex direction={"row"} justify={"space-between"} marginBottom={3}>
            <Text fontWeight={"bold"} w={20}>Preview:</Text>
            <Select
              variant='unstyled'
              placeholder='Choose theme'
              w={40}
              size='sm'
              onChange={(e) => handleSetCodeTheme({
                theme: e.target.value,
                setCodeCurrentTheme
              })}
            >
              {codeTheme.map((t, index) => {
                return (
                  <option
                    key={index}
                    value={t.name}
                  >
                    {t.name}
                  </option>
                )
              })}
            </Select>
          </Flex>
          <CodeBlock
            lang={"html"}
            codeCurrentTheme={codeCurrentTheme}
            codeString={codeString}
          />
        </Box>
      </Flex>
    </Container>
  )
}
