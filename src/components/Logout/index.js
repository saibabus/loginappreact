// Write your code here
import './index.css'

const Logout = props => {
  const {onclicklogout} = props
  return (
    <button type="button" className="logoutbutton" onClick={onclicklogout}>
      Logout
    </button>
  )
}

export default Logout
