import './sidebar.css'
import logo from '../../assets/EduBridgeLogo.svg'
import opp from '../../assets/Opp.svg'
import team from '../../assets/team.svg'
import epi from '../../assets/epi.svg'
import stats from '../../assets/stats.svg'
import blog from '../../assets/blog.svg'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className="sidebar">

    {/* Logo Section */}
    <div className="sidebar-logo">
      <Link to="">
        <img src={logo} alt="Logo" className="dashboard-logo" />
      </Link>
    </div>

     {/* Navigation Items  */}
      <nav className="sidebar-nav">
        <ul>
          <li>
            {/* <Link to="/dashboardopp"><img src={opp} alt="" /> Opportunities</Link> */}
          </li>
          <li>
            <Link to="/dashboardteam"><img src={team} alt="" /> Team</Link>
          </li>
          <li>
            <Link to="/dashboardepi"><img src={epi} alt="" /> Episodes</Link>  
          </li>
          <li>
            <Link to="/dashboardstats"><img src={stats} alt="" /> Statistics</Link>  
          </li>
          <li>
            {/* <Link to="/dashboardblog"><img src={blog} alt="" /> Blog</Link>   */}
          </li>
        </ul>
      </nav>
  </div>
  );
}

export default Sidebar