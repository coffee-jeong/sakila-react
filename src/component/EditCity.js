import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditCity() {
    const {cityId} = useParams();
    const [city, setCity] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
            fetch(`http://localhost/cityOne/${cityId}`)
            .then((res) => {return res.json()})
            .then((data) => {setCity(data)});
        }, []);

    function edit() {
        fetch("http://localhost/city", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({cityId: city.cityId
                                , city: city.city
            }),
        })
        .then((res) => {
            if(res.ok) {
                alert('수정성공');
                navigate(`/cityOne/${cityId}`)
            } else {
                alert('수정실패')
            }
        })
    }

    return (
        <div>
        <h1>EditCity(cityId: {cityId})</h1>
        <table border="1">
            <div>
                city: <input type="text" value={city.city}
                    onChange={(e) => setCity({...city, city: e.target.value})}></input>
                <button onClick={edit}>수정</button>
            </div>

        </table>
        </div>
    )
}
