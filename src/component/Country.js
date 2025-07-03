import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";

export default function Country() {
    // API 통신 "[GET] http://localhost/country"
    // const countryList = [];
    const [countryList, setCountryList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalpages, setTotalpages] = useState(1);

    useEffect(() => {
        fetch("http://localhost/countryList/"+pageNumber)
        .then(function(res){return res.json();})
        .then(function(data){setCountryList(data.content);
                            setTotalpages(data.totalpages);}) // date는 객체타입 {} page타입이고, data.content 가 배열
    }, [pageNumber]); // 무한루프 방지 빈배열을 넣어준다, 단 페이징시 pageNumber값이 변해도 빈 인자값이면 화면이 렌더링때 한번만 useEffect가 실행
    // 되니깐 빈배열말고 pageNumber를 넣어준다

    return (
    <div>
        <h1>Country</h1>
        <Link to="/AddCountry">add country</Link>
        <table border="1">
            <tr>
                <th>country id</th>
                <th>country</th>
            </tr>
            {
                countryList.map((c) => (
                    <tr key={c.countryId}>
                        <td>{c.countryId}</td>
                        <td><Link to={`/CountryOne/${c.countryId}`}>{c.country}</Link></td>
                    </tr>
                ))
            }
        </table>
        {pageNumber > 1 ? <button onClick={()=>{setPageNumber(pageNumber - 1)}}>이전</button> : <span></span>}
        {pageNumber < totalpages ? <span></span> : <button onClick={()=>{setPageNumber(pageNumber + 1)}}>다음</button>}
    </div>
    )
}
