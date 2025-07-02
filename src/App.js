import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './component/Home';
import Country from './component/Country';
import City from './component/City';
import Address from './component/Address';
import Customer from './component/Customer';
import Store from './component/Store';

export default function App() {

    return (
        <BrowserRouter>
            <div>
                {/* header */}
                <h1>Sakila Project</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Country">Country</Link></li>
                    <li><Link to="/City">City</Link></li>
                    <li><Link to="/Address">Address</Link></li>
                    <li><Link to="/Customer">Customer</Link></li>
                    <li><Link to="/Store">Store</Link></li>
                </ul>
                <hr />

                {/* content  */}
                <Routes>
                    <Route path='/' element={<Home />}></Route> {/* 라우터는 -> 컴포넌트를 요청 */}
                    <Route path='/Country' element={<Country />}></Route>
                    {/*<Route path='/CountryOne/:countryId' element={<CountryOne />}></Route>*/}
                    <Route path='/City' element={<City />}></Route>
                    <Route path='/Address' element={<Address />}></Route>
                    <Route path='/Customer' element={<Customer />}></Route>
                    <Route path='/Store' element={<Store />}></Route>
                </Routes>


                {/* -----------------  */}

                {/* footer */}
                <hr />
                <div>
                    Copyright@ GDJ91.
                </div>
            </div>
        </BrowserRouter>
    );
}

