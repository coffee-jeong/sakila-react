import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Customer() {

  const [customerList, setCustomerList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalpages, setTotalpages] = useState(1);

  useEffect(() => {
        fetch("http://localhost/customerList/"+pageNumber)
        .then(function(res){return res.json();})
        .then(function(data){setCustomerList(data.content);
                            setTotalpages(data.totalpages);}) // date는 객체타입 {} page타입이고, data.content 가 배열
    }, [pageNumber]);
  
  return (
    <div>
      <h1>Customer</h1>
      <table border="1">
        <tr>
            <th>customerId</th>
            <th>firstNmae</th>
            <th>lastNmae</th>
        </tr>
        {
            customerList.map((c)=>(
                <tr key={c.customerId}>
                    <td>{c.customerId}</td>
                    <td><Link to={`/CustomerOne/${c.customerId}`}>{c.firstName}</Link></td>
                    <td><Link to={`/CustomerOne/${c.customerId}`}>{c.lastName}</Link></td>
                </tr>
            ))
        }
      </table>
        {pageNumber > 1 ? <button onClick={()=>{setPageNumber(pageNumber - 1)}}>이전</button> : <span></span>}
        {pageNumber < totalpages ? <span></span> : <button onClick={()=>{setPageNumber(pageNumber + 1)}}>다음</button>}
    </div>
  )
}
