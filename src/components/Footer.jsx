import twitter from '../assets/twitter-icon.png'
import facebook from '../assets/facebook-icon.png'
import instagram from '../assets/instagram-icon.png'
import linkedin from '../assets/linkedin-icon.png'
import github from '../assets/github-icon.png'

function Footer() {
    return (
      <div className="footer">
        <img src={twitter} alt="twitter icon" />
        <img src={facebook} alt="facebook icon" />
        <img src={instagram} alt="instagram icon" />
        <img src={linkedin} alt="linkedin icon" />
        <img src={github} alt="github icon" />
      </div>
    )
  }
  
export default Footer