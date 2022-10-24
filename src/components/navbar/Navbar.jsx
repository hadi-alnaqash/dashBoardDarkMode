import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import {useAppStore} from '../../store'

function Navbar() {
  const { darkMode, setdarkMode } = useAppStore();

  // console.log("darkMode: ", darkMode)

  const handleDarkmode = () =>{
    if(darkMode === true){
      setdarkMode(false);
    }else{
      setdarkMode(true);
    }
  }

  
  return (
    <div className='navbar'>
      <div className="warper">
        <div className='search'>
          <input type={'text'} placeholder='search...' />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            English
          </div>
          <div className="item" onClick={() => handleDarkmode()}>
            <DarkModeOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <img 
              src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar