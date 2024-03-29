import * as React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

import { Avatar } from '@mui/material';

import fullLogo from '../../../assets/imgs/full_logo.png';
import logoA from '../../../assets/imgs/logoA.png';

import AddIcon from '@mui/icons-material/Add';

const Header = () => {
    return (
        <nav>
            <div className="navbar">
                <div className="header-container nav-container">
                    <div className='logo-a'>
                        <Link to={`/`}>
                            <Avatar sx={{ width: '100%', height: '100%' }} variant="square" alt="logo" src={logoA} />
                        </Link>
                    </div>
                    <div className="logo">
                        <Link to={`/`}>
                            <Avatar sx={{ width: '100%', height: '100%' }} variant="square" alt="logo" src={fullLogo} />
                        </Link>
                    </div>
                    <div className="menu">
                        <input className="checkbox" type="checkbox" name="" id="menu" />
                        <label className="hamburger-lines" htmlFor="menu">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </label>
                        <div className="menu-items">
                            <div className="sub-menu">
                                <input className="dropdown-sub" type="checkbox" id="dropdown-sub" name="dropdown-sub" />
                                <label className="for-dropdown-sub" htmlFor="dropdown-sub">
                                    Dự án
                                    <AddIcon />
                                </label>
                                <ul>
                                    <li><Link to={'/category/1'}>Nhà phố</Link></li>
                                    <li><Link to={'/category/2'}>Biệt thự</Link></li>
                                    <li><Link to={'/category/3'}>Văn phòng</Link></li>
                                    <li><Link to={'/category/4'}>Khách sạn</Link></li>
                                </ul>
                            </div>
                            <li><Link to={'/category/5'}>Xây dựng</Link></li>
                            <li><Link to={'/category/6'}>Chung cư</Link></li>
                            <li><Link to={'/category/7'}>Nhà hàng</Link></li>
                            <li><Link to={'/phongthuy'}>Phong thủy</Link></li>
                            <li><a href='#footer-container'>Giới thiệu</a></li>
                            <li><a href='#footer-container'>Liên hệ</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;