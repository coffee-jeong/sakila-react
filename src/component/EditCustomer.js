import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function EditEustomer() {
    const {customerId} = useParams();
    const [customer, setCustomer] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
            fetch(`http://localhost/customerOne/${customerId}`)
            .then((res) => {return res.json()})
            .then((data) => {setCustomer(data)});
        }, []);
    
    function edit() {
        fetch("http://localhost/customer", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({customerId: customer.customerId
                                , firstName: customer.firstName
                                , lastName: customer.lastName
                                , email: customer.email
                                , active: customer.active
            }),
        })
        .then((res) => {
            if(res.ok) {
                alert('수정성공');
                navigate(`/customerOne/${customerId}`)
            } else {
                alert('수정실패')
            }
        })
    }

    
    return (
        <div>
            <h1>EditCustomer</h1>
            <div>
                firstName: <input type="text" value={customer.firstName}
                    onChange={(e) => setCustomer({...customer, firstName: e.target.value})}></input> <br />
                lastName: <input type="text" value={customer.lastName}
                    onChange={(e) => setCustomer({...customer, lastName: e.target.value})}></input> <br />
                email: <input type="text" value={customer.email}
                    onChange={(e) => setCustomer({...customer, email: e.target.value})}></input> <br />
                active: <input type="number" value={customer.active}
                    onChange={(e) => setCustomer({...customer, active: e.target.value})}></input> <br />
            </div>
            <button onClick={edit}>수정</button>
        </div>
    )
}
