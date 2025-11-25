import './Hero.css'
import heroVideo from '../../assets/adoptvideo.mp4'
export default function Hero() {
 return (
  <section className="adoption-hero">
  <video autoPlay loop muted playsInline className="background-video">
    <source src={"https://res.cloudinary.com/dgsnugmnb/video/upload/v1764072181/adoptvideo_nat1xi.mp4"} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="hero-content ">
    <div className="contents">
      <h1 style={{marginTop:"29rem"}}>
        Every Paw <br /> Deserves a <br />
        <span className="highlight">Loving</span> Home
      </h1>
    </div>
  </div>

 <div className="wave-bottom">
  <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path
      fill="#ffffff"
      d="M0,160L60,154.7C120,149,240,139,360,149.3C480,160,600,192,720,186.7C840,181,960,139,1080,128C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
    ></path>
  </svg>
</div>
 
</section>

  )
}
