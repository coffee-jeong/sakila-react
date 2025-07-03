import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AddCity() {
    const {countryId} = useParams();
    const [city, setCity] = useState("");
    const navigate = useNavigate();

    function addCity() {
        fetch("http://localhost/city",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({countryId : countryId
                                , city : city}),
        })
        .then((res) => {
            if(res.ok) {
                alert('입력성공')
            } else{
                alert('입력실패')
            }
        })
    }

    return (
        <div>
            <h1>AddCity</h1>
            city: <input type="text" onChange={(e) => {
                setCity(e.target.value);
            }}/>
            <br />
            <button onClick={addCity}>입력</button>
        </div>
    )
}
