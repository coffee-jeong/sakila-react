import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

export default function CustomerOne() {
    const {customerId} = useParams();
    const [customer, setCustomer] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
            fetch(`http://localhost/customerOne/${customerId}`)
            .then((res) => {return res.json()})
            .then((data) => {setCustomer(data)});
        }, []);
    
    function remove() {
         if(window.confirm('삭제하시겠습니까?')) {
            // window.alert('삭제 API통신.')
            fetch(`http://localhost/customer/${customerId}`, {method: 'DELETE'})
                .then((res) => {
                    if (res.ok) {
                        navigate('/Customer');
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
            <h1>CustomerOne</h1>
            <table border="1">
            <tr>
                <th>customerId</th>
                <td>{customer.customerId}</td>
            </tr>
            <tr>
                <th>storeId</th>
                <td>{customer.storeEntity?.storeId}</td>
            </tr>
            <tr>
                <th>firstName</th>
                <td>{customer.firstName}</td>
            </tr>
            <tr>
                <th>lastName</th>
                <td>{customer.lastName}</td>
            </tr>
            <tr>
                <th>email</th>
                <td>{customer.email}</td>
            </tr>
            <tr>
                <th>addressId</th>
                <td>{customer.storeEntity?.addressEntity?.addressId}</td>
            </tr>
            <tr>
                <th>active</th>
                <td>{customer.active}</td>
            </tr>
            <tr>
                <th>createDate</th>
                <td>{customer.createDate}</td>
            </tr>
            <tr>
                <th>lastUpdate</th>
                <td>{customer.lastUpdate}</td>
            </tr>
        </table>
        <button onClick={() => {navigate(`/EditCustomer/${customerId}`)}}>수정</button>
        <button onClick={remove}>삭제</button>
        </div>
    )
}
