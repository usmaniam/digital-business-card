import headshot from '../assets/headshot.png'
import icon from '../assets/email-icon.png'

function Info() {
   return (
    <div>
      <img src={headshot} />
        <h3>Laura Smith</h3>
        <p>Frontend Developer</p>
        <p>laurasmith.website</p>
      <div>
        <img src={icon} />
        <p>Email</p>
      </div>
    </div>
    )
}

export default Info