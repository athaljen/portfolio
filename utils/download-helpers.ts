// download cv that is on public/documents, name starts with Bisworanjan/bisworanjan, its a .pdf file
export const downloadMyCv = () => {
  const link = document.createElement("a");
  link.href = "/documents/Bisworanjan-Jena.pdf";
  link.download = "Bisworanjan_Jena.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
