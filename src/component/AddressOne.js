import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

export default function AddressOne() {
    const {addressId} = useParams();
    const [address, setAddress] = useState({});

     useEffect(() => {
                fetch(`http://localhost/addressOne/${addressId}`)
                .then((res) => {return res.json()})
                .then((data) => {setAddress(data)});
            }, []);

    return (
        <div>
            <h1>AddressOne</h1>
            <table border="1">
            <tr>
                <th>addressId</th>
                <td>{address.addressId}</td>
            </tr>
            <tr>
                <th>country</th>
                <td>{address.cityEntity?.countryEntity?.country}</td>
            </tr>
            <tr>
                <th>city</th>
                <td>{address.cityEntity?.city}</td>
            </tr>
            <tr>
                <th>address</th>
                <td>{address.address}</td>
            </tr>
            <tr>
                <th>address2</th>
                <td>{address.address2}</td>
            </tr>
            <tr>
                <th>district</th>
                <td>{address.district}</td>
            </tr>
            <tr>
                <th>postal_code</th>
                <td>{address.postalCode}</td>
            </tr>
            <tr>
                <th>phone</th>
                <td>{address.phone}</td>
            </tr>
            <tr>
                <th>lastUpdate</th>
                <td>{address.lastUpdate}</td>
            </tr>
        </table>
        <button>수정</button>
        <button>삭제</button>
            
        </div>
    )
}
