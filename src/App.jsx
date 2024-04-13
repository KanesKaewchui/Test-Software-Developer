import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ViewAllInformation from './page/Viewall';
import AddInformation from './page/Adddata';

const App = () => {
    const [currentPage, setCurrentPage] = useState('viewall');

    const navigateToPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Navbar navigateToPage={navigateToPage} />
            {currentPage === 'viewall' && <ViewAllInformation />}
            {currentPage === 'add' && <AddInformation />}
        </div>
    );
}

export default App;





