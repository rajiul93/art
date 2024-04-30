 
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

const Root = () => {
    return (
        <div className='bg-base-100 '>
            <Navbar/>
            <div className="min-h-screen mt-[100px]">

            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;