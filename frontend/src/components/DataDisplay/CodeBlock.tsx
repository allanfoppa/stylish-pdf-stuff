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
    <SyntaxHighlighter
      language={`${lang}`}
      style={codeCurrentTheme}
      showLineNumbers
      wrapLongLines={true}
    >
      {codeString}
    </SyntaxHighlighter>
  )
}
