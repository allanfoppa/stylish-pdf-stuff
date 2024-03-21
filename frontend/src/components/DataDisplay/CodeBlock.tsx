import { Flex } from '@chakra-ui/react'
import SyntaxHighlighter from 'react-syntax-highlighter'

interface ICodeBlock {
  lang: String
  codeCurrentTheme: any
  codeString: any
}

export default function CodeBlock({
  lang,
  codeCurrentTheme,
  codeString
}: ICodeBlock) {
  return(
    <Flex marginBottom={10}>
      <SyntaxHighlighter
        language={`${lang}`}
        style={codeCurrentTheme}
        showLineNumbers
        wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </Flex>
  )
}
