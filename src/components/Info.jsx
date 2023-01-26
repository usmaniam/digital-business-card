import email from '../assets/email-icon.png'
import headshot from '../assets/headshot.png'

function Info() {
   return (
    <div className="info">
        <img src={headshot} alt="profile-photo" className="info--photo" />
        <h3 className="info--name">Laura Smith</h3>
        <p className="info--role">Frontend Developer</p>
        <p className="info--site">laurasmith.website</p>
      <div className="info--btn">
        <img src={email} alt="email icon" />
        <p className="email">Email</p>
      </div>
    </div>
    )
}

export default Info