import { Dispatch, SetStateAction } from "react";
import { a11yLight, a11yDark, solarizedDark, solarizedLight, stackoverflowDark, stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export interface IHandleSetCodeTheme {
  theme: String,
  setCodeCurrentTheme: Dispatch<SetStateAction<any>>
}

export const handleSetCodeTheme = ({
  theme,
  setCodeCurrentTheme
}: IHandleSetCodeTheme) => {
  switch (theme) {
    case "a11yLight":
      setCodeCurrentTheme(a11yLight)
      break;
    case "a11yDark":
      setCodeCurrentTheme(a11yDark)
      break;
    case "solarizedDark":
      setCodeCurrentTheme(solarizedDark)
      break;
    case "solarizedLight":
      setCodeCurrentTheme(solarizedLight)
      break;
    case "stackoverflowDark":
      setCodeCurrentTheme(stackoverflowDark)
      break;
    case "stackoverflowLight":
      setCodeCurrentTheme(stackoverflowLight)
      break;
    default:
      setCodeCurrentTheme(stackoverflowDark)
      break;
  }
}
