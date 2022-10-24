import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import TableList from '../../components/table/TableList'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <hr />
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured />
            <Chart />
          </div>
          <div className="table">
            <div className="title">Latest Transactions</div>
            <TableList />
          </div>
        </div>
        
    </div>
  )
}

export default Home