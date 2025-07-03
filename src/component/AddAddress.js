import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AddAddress() {
    const {cityId} = useParams();
    const [address, setAddress] = useState("");
    const [address2, setAddress2] = useState("");
    const [district, setDistrict] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    function addAddress() {
        fetch("http://localhost/address",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ cityId: cityId
                                , address : address
                                , address2 : address2
                                , district : district
                                , postalCode : postalCode
                                , phone : phone}),
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
            <h1>AddAddress</h1>
            address: <input type="text" onChange={(e) => {
                    setAddress(e.target.value);
                }}/>
                <br />
            address2: <input type="text" onChange={(e) => {
                    setAddress2(e.target.value);
                }}/>
                <br />
            district: <input type="text" onChange={(e) => {
                    setDistrict(e.target.value);
                }}/>
                <br />
            postalCode: <input type="text" onChange={(e) => {
                    setPostalCode(e.target.value);
                }}/>
                <br />
            phone: <input type="text" onChange={(e) => {
                    setPhone(e.target.value);
                }}/>
            <br />
            <button onClick={addAddress}>입력</button>
        </div>
    )
}
