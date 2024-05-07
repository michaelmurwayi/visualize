import React, {useState} from 'react';
import Sidebar from '../features/sideBar/sidebar'
import Navbar from '../features/navbar/navbar'

const Site = () =>{
    const [openNavRight, setOpenNavRight] = useState(false);

    return (
        <div>
            <Navbar/>
            <Sidebar />
        </div>
    );
}

export default Site 