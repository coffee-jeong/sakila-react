import { useEffect, useState } from "react"
import { data } from "react-router-dom";

export default function Country() {
    // API 통신 "[GET] http://localhost/country"
    // const countryList = [];
    const [countryList, setCountryList] = useState([]);

    useEffect(() => {
        fetch("http://localhost/country")
        .then(function(res){return res.json();})
        .then(function(data) {setCountryList(data)})
    }, []); // 무한루프 방지 빈배열을 넣어준다

    return (
    <div>
        <h1>Country</h1>
        <table border="1">
            <tr>
                <th>country id</th>
                <th>country</th>
            </tr>
            {
                countryList.map((c) => (
                    <tr key={c.countryId}>
                        <td>{c.countryId}</td>
                        <td>{c.country}</td>
                    </tr>
                ))
            }
        </table>
    </div>
    )
}
