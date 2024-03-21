import { htmlToPDF as endpoint } from "../constants/endpoints.constant";
import { downloadPDF } from "../utils/download-pdf";

export interface IHTMLToPDF {
  htmlContent: String
}

export const htmlToPDF = async ({
  htmlContent
}: IHTMLToPDF): Promise<any> => {
  try {
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: htmlContent,
      })
    }

    let response = await fetch(endpoint, params)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)

    if (!response.ok) {
      const errorMessage = { code : response.status }
      throw errorMessage;
    }

    downloadPDF({ url })

  } catch(error: any) {
    switch (error.code) {
      case 400:
      case 404:
      case 422:
      case 500:
      case 504:
        console.error("Error")
        break;
      default:
        console.error("Unknow Error")
        break;
    }
  }
}
