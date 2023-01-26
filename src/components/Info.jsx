import email from '../assets/email-icon.png'
import headshot from '../assets/headshot.png'

function Info() {
   return (
    <div className="info">
         <img src={headshot} alt="profile photo" />
        <h3 className="title">Laura Smith</h3>
        <p className="subtitle">Frontend Developer</p>
        <p className="website">laurasmith.website</p>
      <div className="btn">
        <img src={email} alt="email icon" />
        <p className="email">Email</p>
      </div>
    </div>
    )
}

export default Info