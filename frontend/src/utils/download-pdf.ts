
export interface IDownloadPDF {
  url: any
}

export const downloadPDF = ({
  url
}: IDownloadPDF) => {

  // Create a link element and trigger the download
  const link = document.createElement('a');
  link.href = url;
  link.download = 'example.pdf'; // Specify the desired file name
  document.body.appendChild(link);
  link.click();

  // Cleanup
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);

}
