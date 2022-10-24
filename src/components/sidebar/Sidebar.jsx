import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import {useAppStore} from '../../store'

function Sidebar() {
    const { darkMode, setdarkMode } = useAppStore();

    // console.log("darkMode: ", darkMode)
  return (
    <div className={darkMode ? 'sidebar dark' : 'sidebar'}>
        <div className="top">
            <span className="logo">Dashboard</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p>MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p>LISTS</p>
                <li>
                    <PersonIcon className='icon'/>
                    <span><a href="/users" className="">Users</a></span>
                </li>
                <li>
                    <StoreMallDirectoryIcon className='icon'/>
                    <span>Products</span>
                </li>
                <li>
                    <CreditCardIcon className='icon'/>
                    <span>orders</span>
                </li>
                <li>
                    <LocalShippingOutlinedIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p>USFUL</p>
                <li>
                    <InsertChartIcon className='icon'/>
                    <span>Status</span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p>SERVICE</p>
                <li>
                    <MonitorHeartIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p>USER</p>
                <li>
                    <AccountBoxOutlinedIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppOutlinedIcon className='icon'/>
                    <span>logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className='colorOption' onClick={() => setdarkMode(false)}></div>
            <div className='colorOption' onClick={() => setdarkMode(true)}></div>
        </div>
    </div>
  )
}

export default Sidebar