import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

export default function AddressOne() {
    const {addressId} = useParams();
    const [address, setAddress] = useState({});
    const navigate = useNavigate();

     useEffect(() => {
                fetch(`http://localhost/addressOne/${addressId}`)
                .then((res) => {return res.json()})
                .then((data) => {setAddress(data)});
            }, []);
        
    function remove() {
        if(window.confirm('삭제하시겠습니까?')) {
            // window.alert('삭제 API통신.')
            fetch(`http://localhost/address/${addressId}`, {method: 'DELETE'})
                .then((res) => {
                    if (res.ok) {
                        navigate('/Address');
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
        <button onClick={() => {navigate(`/EditAddress/${addressId}`)}}>수정</button>
        <button onClick={remove}>삭제</button>
            
        </div>
    )
}
