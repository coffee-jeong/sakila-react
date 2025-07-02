import { useEffect, useState } from "react";
import { data } from "react-router-dom";

export default function City() {
    const [cityList, setCityList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalpages, setTotalpages] = useState(1);

    useEffect(() => {
        fetch("http://localhost/cityList/"+pageNumber)
        .then(function(res){return res.json();})
        .then(function(data){setCityList(data.content);
                            setTotalpages(data.totalpages);}) // date는 객체타입 {} page타입이고, data.content 가 배열
    }, [pageNumber]);

  return (
    <div>
      <h1>City</h1>
      <table border="1">
        <tr>
            <th>cityId</th>
            <th>city</th>
        </tr>
        {
            cityList.map((c)=>(
                <tr key={c.cityId}>
                    <td>{c.cityId}</td>
                    <td>{c.city}</td>
                </tr>
            ))
        }
      </table>
        {pageNumber > 1 ? <button onClick={()=>{setPageNumber(pageNumber - 1)}}>이전</button> : <span></span>}
        {pageNumber < totalpages ? <span></span> : <button onClick={()=>{setPageNumber(pageNumber + 1)}}>다음</button>}
    </div>
  )
}
