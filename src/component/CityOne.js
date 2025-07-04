import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function CityOne() {
    const {cityId} = useParams();
    const [city, setCity] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
            fetch(`http://localhost/cityOne/${cityId}`)
            .then((res) => {return res.json()})
            .then((data) => {setCity(data)});
        }, []);

    function remove() {
        if(window.confirm('삭제하시겠습니까?')) {
            fetch(`http://localhost/city/${cityId}`, {method: 'DELETE'})
                .then((res) => {
                    if (res.ok) {
                        navigate('/City');
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
        <button onClick={() => {navigate(`/EditCity/${cityId}`)}}>수정</button>
        <button onClick={remove}>삭제</button>
        </div>
    )
}
