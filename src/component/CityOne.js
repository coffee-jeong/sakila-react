import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function CityOne() {
    const {cityId} = useParams();
    const [city, setCity] = useState({});

    useEffect(() => {
            fetch(`http://localhost/cityOne/${cityId}`)
            .then((res) => {return res.json()})
            .then((data) => {setCity(data)});
        }, []);

    return (
        <div>
        <h1>CityOne(cityId: {cityId})</h1>
        <table border="1">
            <tr>
                <th>cityId</th>
                <td>{city.cityId}</td>
            </tr>
            <tr>
                <th>country</th>
                <td>{city.countryEntity?.country}</td>
            </tr>
            <tr>
                <th>city</th>
                <td>{city.city}</td>
            </tr>
            <tr>
                <th>lastUpdate</th>
                <td>{city.lastUpdate}</td>
            </tr>
            <tr>
                <th>address</th>
                <td><Link to={`/AddAddress/${city.cityId}`}>등록하기</Link></td>
            </tr>
        </table>
        <button>수정</button>
        <button>삭제</button>
        </div>
    )
}
