import React from 'react';
import { Layout, Menu } from "antd";

const {Header} = Layout;

const Navbar = () => {
    const headerStyle = {
        backgroundColor: '#FFF',
        width: '100%',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    }

    return(
        <Header style={headerStyle}>
            <Menu mode="horizontal" defaultOpenKeys={[1]}>
                <Menu.Item key="1" >View all information</Menu.Item>
                <Menu.Item key="2" >Add information</Menu.Item>
            </Menu>
        </Header>
    )
}

export default Navbar;