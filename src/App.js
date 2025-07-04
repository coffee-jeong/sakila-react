import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './component/Home';
import Country from './component/Country';
import CountryOne from './component/CountryOne';
import EditCountry from './component/EditCountry';
import AddCountry from './component/AddCountry';
import City from './component/City';
import CityOne from './component/CityOne';
import EditCity from './component/EditCity';
import AddCity from './component/AddCity';
import Address from './component/Address';
import AddressOne from './component/AddressOne.js';
import AddAddress from './component/AddAddress';
import EditAddress from './component/EditAddress';
import Customer from './component/Customer';
import CustomerOne from './component/CustomerOne';
import EditCustomer from './component/EditCustomer';
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

                    {/* country CRUD */}
                    <Route path='/Country' element={<Country />}></Route>
                    <Route path='/CountryOne/:countryId' element={<CountryOne />}></Route>
                    <Route path='/AddCountry' element={<AddCountry />}></Route>
                    <Route path='/EditCountry/:countryId' element={<EditCountry />} />

                    {/* city CRUD */}
                    <Route path='/City' element={<City />}></Route>
                    <Route path='/CityOne/:cityId' element={<CityOne />}></Route>
                    <Route path='/AddCity/:countryId' element={<AddCity />}></Route>
                    <Route path='/EditCity/:cityId' element={<EditCity />} />
                    
                    {/* address CRUD */}
                    <Route path='/Address' element={<Address />}></Route>
                    <Route path='/AddressOne/:addressId' element={<AddressOne />}></Route>
                    <Route path='/AddAddress/:cityId' element={<AddAddress />}></Route>
                    <Route path='/EditAddress/:addressId' element={<EditAddress />} />

                    {/* customer CRUD */}
                    <Route path='/Customer' element={<Customer />}></Route>
                    <Route path='/CustomerOne/:customerId' element={<CustomerOne />}></Route>
                    <Route path='/EditCustomer/:customerId' element={<EditCustomer />}></Route>

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

