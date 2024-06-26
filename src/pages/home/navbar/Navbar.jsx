import { Dropdown, Menu, Layout, Image, Typography, Flex } from 'antd';
import React from 'react';
import bgg from '../../../image/header-logo-bomb-left.svg'
import { InstagramOutlined, XOutlined, FacebookOutlined } from '@ant-design/icons'
import { items } from './Navigation';
import { Link } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector';
import { TranslateFunction } from '../../../utils/internationalisation';


const { Header } = Layout;









const Navbar = () => {
    const labels = TranslateFunction("labels");

    const subMenu = (submenu) => (
        <Menu style={{ backgroundColor: "#19398a" }}>
            {submenu.map(item => (
                <Menu.Item key={item.key} style={{ color: "white" }}>
                    <Link to={item.path}>{labels(item.label)}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <>
         <LanguageSelector />

            <Header style={{ height: 45, backgroundColor: '#061e59' }}>
                <Flex justify="space-between">

                    <a href='https://www.wplt20.com/?_gl=1*1bfjc6i*_ga*MTQwOTMyMTAzNy4xNzEwMzIwOTc1*_ga_VHLTEJRMR0*MTcxMjgyNDAzMS4zNC4xLjE3MTI4MzA2NjMuMTAuMC4w' alt='BCCI LOGO' style={{ fontFamily: "Rubik, sans-serif", fontSize: '90%', lineHeight: 2.9, color: 'white' }}>
                        <Image preview={false} style={{ width: 22 }} src="assets\home\BCCI_logo.png" />
                        BCCI.TV
                    </a>


                    <a href='https://www.wplt20.com/?_gl=1*1a9oyce*_ga*MTQwOTMyMTAzNy4xNzEwMzIwOTc1*_ga_VHLTEJRMR0*MTcxMjgyNDAzMS4zNC4xLjE3MTI4MzM1OTAuNTAuMC4w' style={{ marginRight: 1000, lineHeight: 2.9 }}>
                        <Image preview={false} src='assets\home\wpl_logo.svg' />
                    </a>


                    <Typography style={{ color: 'white', paddingTop: 20, lineHeight: 1, fontWeight: 'bold', opacity: 0.4 }}>Follow Us</Typography>

                    <a href="https://www.instagram.com">
                        <InstagramOutlined style={{ color: 'white', fontSize: '24px', opacity: 0.4, }} />
                    </a>
                    <a href='https://twitter.com/?lang=en'>
                        <XOutlined style={{ color: 'white', fontSize: '24px', opacity: 0.4 }} />
                    </a>
                    <a href="https://www.facebook.com" >
                        <FacebookOutlined style={{ color: 'white', fontSize: '24px', opacity: 0.4 }} />
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
            }}>
                     
                <div style={{ marginLeft: '-100px' }}>
                    <div style={{ backgroundImage: `url(${bgg})`, backgroundRepeat: 'no-repeat', height: '100%', width: '380px', backgroundSize: '100% auto', backgroundPosition: ' left 5px', position: 'absolute' }}> </div>
                    <Link to={'/'}> <Image preview={false} style={{ width: 95, marginLeft: 145 }} width={200} src="assets\home\logo.png" />
                    </Link>

                </div>

                <Menu

                    mode="horizontal"
                    style={{
                        fontSize: 20, flex: 1,
                        minWidth: 0,
                        flex: 1,
                        width: "100%",
                        marginLeft: 310,
                        fontSize: 20,
                        backgroundColor: '#19398a',
                        transition: "none",

                    }}
                >

                    {items.map(item => (
                        <React.Fragment key={item.key}> 
                            {item.label === 'matches' ? (
                                <Dropdown overlay={subMenu(item.submenu)} key={item.key}>
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ marginTop: "1px", margin: '0 20px', color: 'white' }}>
                                    {labels(item.label)}
                                    </a>
                                </Dropdown>
                            ) : (
                                <a href={item.path}>
                                    <Menu.Item key={item.key} style={{ margin: '0px 20px', color: "white", backgroundColor: "transparent" }}>
                                        {labels(item.label)}
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

