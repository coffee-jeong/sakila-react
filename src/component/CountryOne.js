import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function CountryOne() {
    const {countryId} = useParams();
    const [country, setCountry] = useState({});

    useEffect(() => {
        fetch(`http://localhost/countryOne/${countryId}`)
        .then((res) => {return res.json()})
        .then((data) => {setCountry(data)});
    }, []);

  return (
    <div>
        <h1>CountryOne(countryId: {countryId})</h1>
        <table border="1">
            <tr>
                <th>countryId</th>
                <td>{country.countryId}</td>
            </tr>
            <tr>
                <th>country</th>
                <td>{country.country}</td>
            </tr>
            <tr>
                <th>lastUpdate</th>
                <td>{country.lastUpdate}</td>
            </tr>
            <tr>
                <th>city</th>
                <td><Link to={`/AddCity/${country.countryId}`}>등록하기</Link></td>
            </tr>
        </table>
        <button>수정</button>
        <button>삭제</button>
    </div>
  )
}
