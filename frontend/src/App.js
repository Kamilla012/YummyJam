import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import './index.css';
const App = () => {

    return (
        <div>
           <BrowserRouter>
                <Routes>
                    <Route path='/' index element={<Login />}/>
                    <Route path="/pages/Registration" element={<Registration />} />
                </Routes>
            </BrowserRouter>
    
        </div>
    );
};

export default App;
