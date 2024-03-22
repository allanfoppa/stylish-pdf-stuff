
const BASE_URL = process.env.REACT_APP_BASE_URL;

// BELOW SOME SUGGESTIONS TO PREFIX ENDPOINT AND STANDARDIZING
// to get all - fetch***
// to get by id - fetchById***
// to save some information - create***
// to edit some information - update***
// to delete some information - delete***
// to filter - filter***

/*==========================================================================
  HTML TO PDF
  ========================================================================== */

export const htmlToPDF = `${BASE_URL}/html-to-pdf`;

/*==========================================================================
  PDF TO PDF
  ========================================================================== */

export const pdfToPDF = `${BASE_URL}/url-to-pdf/generate`;
