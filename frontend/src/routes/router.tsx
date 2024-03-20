import { createBrowserRouter } from "react-router-dom"

import { PATHS } from "../enums/paths.enum";

import { App } from "../layout/App";

import Home from "../views/Home"

import PdfFromUrl from "../views/PdfFromUrl";
import HtmlToPdf from "../views/HtmlToPdf";
import PdfFileFromImages from "../views/PdfFileFromImages";

import NoMatch from "../views/NoMatch";

export const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <App />,
    children: [
      {
        path: PATHS.HOME,
        element: <Home />,
      },
      {
        path: PATHS.HTML_TO_PDF,
        element: <HtmlToPdf />,
      },
      {
        path: PATHS.PDF_FROM_A_URL,
        element: <PdfFromUrl />
      },
      {
        path: PATHS.PDF_FILE_FROM_IMAGES,
        element: <PdfFileFromImages />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ]
  }
]);
