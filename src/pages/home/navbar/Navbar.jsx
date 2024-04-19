import { Dropdown, Menu, Layout, Image, Typography, Flex } from 'antd';
import React from 'react';
import bg from '../../../../src/image/header-curl-bg.svg'
import { InstagramOutlined, XOutlined, FacebookOutlined } from '@ant-design/icons'
import { items } from './Navigation';



const { Header } = Layout;


const subMenu = (
    <Menu style={{ backgroundColor: "#19398a" }}>
        <Menu.Item key="upcoming" style={{ color: "white" }}>Upcoming Matches</Menu.Item>
        <Menu.Item key="completed" style={{ color: "white" }}>Completed Matches</Menu.Item>
    </Menu>
);

const Navbar = () => {
    return (
        <>

            <Header style={{ height: 45 }}>
                <Flex justify="space-between">

                    <a href='https://www.wplt20.com/?_gl=1*1bfjc6i*_ga*MTQwOTMyMTAzNy4xNzEwMzIwOTc1*_ga_VHLTEJRMR0*MTcxMjgyNDAzMS4zNC4xLjE3MTI4MzA2NjMuMTAuMC4w' alt='BCCI LOGO' style={{ fontFamily: "Rubik, sans-serif", fontSize: '90%', lineHeight: 2.9, color: 'white' }}>
                        <Image style={{ width: 22 }} src="assets\home\BCCI_logo.png" />
                        BCCI.TV
                    </a>


                    <a href='https://www.wplt20.com/?_gl=1*1a9oyce*_ga*MTQwOTMyMTAzNy4xNzEwMzIwOTc1*_ga_VHLTEJRMR0*MTcxMjgyNDAzMS4zNC4xLjE3MTI4MzM1OTAuNTAuMC4w' style={{ marginRight: 1000, lineHeight: 2.9 }}>
                        <Image src='assets\home\wpl_logo.svg' />
                    </a>


                    <Typography style={{ color: 'white', paddingTop: 20, lineHeight: 1, fontWeight: 'bold' }}>Follow Us</Typography>

                    <a href="https://www.instagram.com">
                        <InstagramOutlined style={{ color: 'white', fontSize: '24px', }} />
                    </a>
                    <a href='https://twitter.com/?lang=en'>
                        <XOutlined style={{ color: 'white', fontSize: '24px', }} />
                    </a>
                    <a href="https://www.facebook.com" >
                        <FacebookOutlined style={{ color: 'white', fontSize: '24px' }} />
                    </a>


                </Flex>
            </Header>

            <Header style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#19398a',
                backgroundImage: `url(${bg})`
            }}>
                <div >
                    <Image style={{ width: 95 }} width={200} src="assets\home\logo.png" />
                </div>
                <Menu

                    mode="horizontal"
                    style={{
                        fontSize: 20, flex: 1,
                        minWidth: 0,
                        flex: 1,
                        width: "100%",
                        width: '600px',
                        marginLeft: 200,
                        fontSize: 20,
                        backgroundColor: '#19398a',
                    }}
                >
                    {items.map(item => (
                        <React.Fragment key={item.key} >
                            {
                            item.label === 'Matches' ? (
                                <Dropdown overlay={subMenu} key={item.key} >
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ marginTop: "1px", margin: '0 20px', color: 'white' }}>
                                        {item.label}
                                    </a>
                                </Dropdown>
                            ) : (
                                // <Link to="/">Home</Link>
                                <a href={item.path}>
                                    
                                <Menu.Item key={item.key} style={{ margin: '0px 20px', color: "white" }}>
                                    {item.label}
                                   
                                </Menu.Item>
                                </a>

                            )}


                        </React.Fragment>
                    ))}

                </Menu>
            </Header>
           
        </>
    )
}
export default Navbar

