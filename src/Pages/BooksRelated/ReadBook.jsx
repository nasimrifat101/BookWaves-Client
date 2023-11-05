import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadBook = () => {
    const {id} = useParams();
    const [details, setDetails] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:5000/book/detail/${id}`).then((res) => {
      setDetails(res.data);
      console.log(res.data);
    });
    },[id])

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
  
    return (
        <div className="max-w-3xl mx-auto space-y-5 my-10">
            <h1 className="text-4xl mt-10 font-bold">{name}</h1>

            <h1 className="font-medium" dangerouslySetInnerHTML={{ __html: addLineBreaks(content) }}></h1>
        </div>
    );
};

export default ReadBook;