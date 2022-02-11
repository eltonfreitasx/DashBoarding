
import {Link} from 'react-router-dom'
import {FaAppleAlt, FaUserFriends, FaSignOutAlt} from 'react-icons/fa'
import {BiMessageDetail} from 'react-icons/bi'
import {GrHelp} from 'react-icons/gr'
import {AiFillSetting, AiFillLock,AiOutlineHome} from 'react-icons/ai'

import { Navigation } from './navstyle';
const Nav = ()=>(
    <>
        <header>
            <Navigation>
                <ul>
                    <li>
                        <Link to="/"/>
                        <span>icons<FaAppleAlt/></span>
                        <span>title  BRAND NAME</span>
                    </li>
                    <li>
                        <Link to="/"/>
                        <span>icons<AiOutlineHome/></span>
                        <span>title  Dashboard</span>
                    </li>
                    <li>
                        <Link to="/"/>
                        <span>icons<FaUserFriends/></span>
                        <span>title  Customers</span>
                    </li>
                    <li>
                        <Link to="/"/>
                        <span>icons<BiMessageDetail/></span>
                        <span>title  Message</span>
                    </li>
                    <li>
                        <Link to="/"/>
                        <span>icons<GrHelp/></span>
                        <span>title  Help</span>
                    </li>
                    <li>
                        <Link to="/"/>
                        <span>icons<AiFillSetting/></span>
                        <span>title  Settings</span>
                    </li>
                    <li>
                        <Link to="/"/>
                        <span>icons<AiFillLock/></span>
                        <span>title  Password</span>
                    </li>
                    <li>
                        <Link to="/"/>
                        <span>icons<FaSignOutAlt/></span>
                        <span>title  Sign Out</span>
                    </li>
                </ul>
            </Navigation>
        </header>
    </>
)

export default Nav;