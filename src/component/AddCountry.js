import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCountry() {
    const [country, setCountry] = useState("");
    const navigate = useNavigate();

    function addCountry() {
        // alert('addcountry');
        fetch("http://localhost/country", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({country : country}),
        })
        .then((res) => {
            if(res.ok) { // 200
                alert('입력성공');
                // country 컴퍼넌트를 랜더링
                navigate("/Country"); // <LINK to="/Country" />
            } else { // 에러 300, 400, 500
                alert('입력실패');
            }
        })
    }
  return (
    <div>
        <h1>AddCountry</h1>
        <div>
            country: <input type="text" onChange={(e) => {
                setCountry(e.target.value);
            }}/>
            <br />
            <button onClick={addCountry}>입력</button>
        </div>
    </div>
  )
}
