import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import './index.css';
const App = () => {
    // const [data, setData] = useState(null);

  //   useEffect(() => {
  //     fetch('http://localhost:5132/api/users')
  //         .then(response => response.json())
  //         .then(data => setData(data))
  //         .catch(error => console.error('Error fetching data:', error));
  // }, []);

    return (
        <div>
           <BrowserRouter>
                <Routes>
                    <Route path='/' index element={<Login />}/>
                    <Route path="/pages/Registration" element={<Registration />} />
                </Routes>
            </BrowserRouter>
            {/* <h1>Data from API:</h1> */}
            {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>} */}
        </div>
    );
};

export default App;
