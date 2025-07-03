import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";

export default function Address() {
    const [addressList, setAddressList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalpages, setTotalpages] = useState(1);

    useEffect(() => {
        fetch("http://localhost/addressList/"+pageNumber)
        .then(function(res){return res.json();})
        .then(function(date) {setAddressList(date.content);
                            setTotalpages(data.totalpages);
        })
    }, [pageNumber]);

  return (
    <div>
      <h1>Address</h1>
      <table border="1">
        <tr>
            <th>addressId</th>
            <th>address</th>
        </tr>
        {
            addressList.map((c)=>(
                <tr kye={c.addressId}>
                    <td>{c.addressId}</td>
                    <td><Link to={`/AddressOne/${c.addressId}`}>{c.address}</Link></td>
                </tr>
            ))
        }
      </table>
        {pageNumber > 1 ? <button onClick={()=>{setPageNumber(pageNumber - 1)}}>이전</button> : <span></span>}
        {pageNumber < totalpages ? <span></span> : <button onClick={()=>{setPageNumber(pageNumber + 1)}}>다음</button>}
    </div>
    
  )
}
