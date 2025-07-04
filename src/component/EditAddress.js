import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

export default function EiteAddress() {
    const {addressId} = useParams();
    const [address, setAddress] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
                fetch(`http://localhost/addressOne/${addressId}`)
                .then((res) => {return res.json()})
                .then((data) => {setAddress(data)});
            }, []);

    function edit() {
        fetch("http://localhost/address", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({addressId: address.addressId
                                , address: address.address
                                , address2: address.address2
                                , district: address.district
                                , postalCode: address.postalCode
                                , phone: address.phone
            }),
        })
        .then((res) => {
            if(res.ok) {
                alert('수정성공');
                navigate(`/addressOne/${addressId}`)
            } else {
                alert('수정실패')
            }
        })
    }

    return (
        <div>
            <h1>EiteAddress</h1>
        <div>
            address :<input type="text" value={address.address}
                onChange={(e) => setAddress({...address, address: e.target.value})}></input>
            <br />
            address2 : <input type="text" value={address.address2}
                onChange={(e) => setAddress({...address, address2: e.target.value})}></input>
            <br />
            district : <input type="text" value={address.district}
                onChange={(e) => setAddress({...address, district: e.target.value})}></input>
            <br />
            postalCode : <input type="text" value={address.postalCode}
                onChange={(e) => setAddress({...address, postalCode: e.target.value})}></input>
            <br />
            phone : <input type="text" value={address.phone}
                onChange={(e) => setAddress({...address, phone: e.target.value})}></input>
            <br />
            <button onClick={edit}>수정</button>
        </div>
        </div>
    )
}
