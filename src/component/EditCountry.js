import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"

export default function EditeCountry() {
    const navigate = useNavigate();
    const {countryId} = useParams();
    const [country, setCountry] = useState({});

    useEffect(() => {
            fetch(`http://localhost/countryOne/${countryId}`)
            .then((res) => {return res.json()})
            .then((data) => {setCountry(data)});
        }, []);

    function edit() {
        fetch("http://localhost/country", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({countryId: country.countryId
                                , country: country.country
            }),
        })
        .then((res) => {
            if(res.ok) {
                alert('수정성공');
                navigate(`/countryOne/${countryId}`)
            } else {
                alert('수정실패')
            }
        })
    }
    return (
        <div>
            <h1>EditCountry(countryId: {countryId})</h1>
            <div>
                country : <input type="text" value={country.country} 
                    onChange={(e) => setCountry({ ...country, country: e.target.value })} 
                />
                <button onClick={edit}>수정</button>
            </div>
        </div>
    )
}

