import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

export default function CountryOne() {
    const {countryId} = useParams();
    const [country, setCountry] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost/countryOne/${countryId}`)
        .then((res) => {return res.json()})
        .then((data) => {setCountry(data)});
    }, []);

    function remove() {
        if(window.confirm('삭제하시겠습니까?')) {
            // window.alert('삭제 API통신.')
            fetch(`http://localhost/country/${countryId}`, {method: 'DELETE'})
                .then((res) => {
                    if (res.ok) {
                        navigate('/Country');
                    } else {
                        window.alert('삭제실패');
                    }
                })
        } else {
            window.alert('삭제를 취소했습니다.')
        }
    }

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
        <button onClick={() => {navigate(`/EditCountry/${countryId}`)}}>수정</button>
        <button onClick={remove}>삭제</button>
    </div>
  )
}
