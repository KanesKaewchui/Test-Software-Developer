import React from 'react';
import { Layout, Menu } from "antd";

const {Header} = Layout;

const Navbar = ({navigateToPage}) => {
    const headerStyle = {
        backgroundColor: '#FFF',
        width: '100%',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    }

    return(
        <Header style={headerStyle}>
            <Menu mode="horizontal" defaultOpenKeys={[1]}>
                <Menu.Item key="1" onClick={() => navigateToPage('viewall')}>View all information</Menu.Item>
                <Menu.Item key="2" onClick={() => navigateToPage('add')}>Add information</Menu.Item>
            </Menu>
        </Header>
    )
}

export default Navbar;
