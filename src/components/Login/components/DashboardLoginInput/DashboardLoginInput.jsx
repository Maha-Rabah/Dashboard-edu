import './dashboardLoginInput.css'
 
const DashboardLoginInput = () => {
  return ( 
    <div className="dashboard-login-input">
      <label htmlFor="fullname">Full name</label>
      <br />
      <input type="text" name="fullname" />
    </div>

  )
}

export default DashboardLoginInput