// Write your code here
import './index.css'

const Login = props => {
  const {onclicklogin} = props
  return (
    <button type="button" className="loginbutton" onClick={onclicklogin}>
      Login
    </button>
  )
}

export default Login
