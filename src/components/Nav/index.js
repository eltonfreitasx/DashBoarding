
import {Link} from 'react-router-dom';
import {FaAppleAlt, FaUserFriends, FaSignOutAlt} from 'react-icons/fa';
import {BiMessageDetail} from 'react-icons/bi';
import {IoMdHelp} from 'react-icons/io';
import {AiFillSetting, AiFillLock,AiOutlineHome} from 'react-icons/ai';

import { Header } from './navstyle';
const Nav = ()=>(
    <>
        <Header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                        <span><FaAppleAlt/></span>
                        <span>BRAND NAME</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <span><AiOutlineHome/></span>
                        <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <span><FaUserFriends/></span>
                        <span>Customers</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <span><BiMessageDetail/></span>
                        <span>Message</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <span><IoMdHelp/></span>
                        <span>Help</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <span><AiFillSetting/></span>
                        <span>Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <span><AiFillLock/></span>
                        <span>Password</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <span><FaSignOutAlt/></span>
                        <span>Sign Out</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </Header>
    </>
)

export default Nav;