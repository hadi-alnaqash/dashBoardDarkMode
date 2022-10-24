import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Featured() {
  return (
    <div className='featured'>
        <div className="top">
            <p className="title">Total Revenue</p>
            <MoreVertIcon />
        </div>
        <div className="progressBar">
            <CircularProgressbar value={66} text={"70%"} strokeWidth={5} className="progressChart"/>
        </div>
        <div className="text">
            <p className="title">Total sales made today</p>
            <p className="amount">$420</p>
            <p className="description">Previous transactions processing. Last payments may not be included.</p>
        </div>
        <div className="progress">
            <div className="container">
                <p className="target">Target</p>
                <div className="amount negtive">
                    <KeyboardArrowDownIcon />
                    $12.4k
                </div>
            </div>
            <div className="container">
                <p className="target">Target</p>
                <div className="amount positive">
                    <KeyboardArrowUpIcon />
                    $12.4k
                </div>
            </div>
            <div className="container">
                <p className="target">Target</p>
                <div className="amount positive">
                    <KeyboardArrowUpIcon />
                    $12.4k
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured