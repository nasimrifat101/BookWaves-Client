import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosNormal from "../../Hooks/useAxiosNormal";
import html2pdf from 'html2pdf.js';

const ReadBook = () => {
    const {id} = useParams();
    const [details, setDetails] = useState({})
    const axiosNormal = useAxiosNormal();

    useEffect(()=>{
        axiosNormal.get(`/book/detail/${id}`).then((res) => {
      setDetails(res.data);
      console.log(res.data);
    });
    },[id, axiosNormal])

    const {name, content } = details;

    function addLineBreaks(content) {

        if (content === undefined || content === null) {
            return ''; 
          }

        const words = content.split(' ');
        const chunkSize = 70;
        const chunks = [];
      
        for (let i = 0; i < words.length; i += chunkSize) {
          chunks.push(words.slice(i, i + chunkSize).join(' '));
        }
      
        return chunks.join('<br /> <br />');
      }

      const generatePDF = () => {
        const contentToPrint = `<h1 class="text-3xl font-bold mb-10 text-center">${name}</h1><h2 class="text-xl font-bold mb-5">Content:</h2><p>${addLineBreaks(content)}</p>`;
        const element = document.createElement('div');
        element.innerHTML = contentToPrint;
      
        const fileName = `${name}.pdf`;

        html2pdf(element, {
          margin: 10,
          filename: fileName,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        });
      };
  
    return (
      <div className="max-w-3xl mx-auto space-y-5 lg:my-10 px-4 lg:px-0">
        <h1 className="text-4xl lg:mt-10 font-bold">{name}</h1>
  
        <div
          className="font-medium"
          dangerouslySetInnerHTML={{ __html: addLineBreaks(content) }}
        ></div>
  
        <button className="btn btn-primary mb-10" onClick={generatePDF}>
          Download as PDF
        </button>
      </div>
    );
};

export default ReadBook;