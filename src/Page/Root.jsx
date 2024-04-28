 
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

const Root = () => {
    return (
        <div className='bg-gray-200 '>
            <Navbar/>
            <div className="min-h-screen">

            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;