import React from 'react'
import './info.css'

export default function Info({images}) {
  
 

  return (
    <>
    <div className="container1  ">
    <div className="all mt-4 ">
      <div className="row"  style={{justifyContent:'space-around'}}>

   <div className="card md-4 " style={{width: "26rem"}}>
  <img src={images[0]}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Feed Strays</h5>
    <p className="card-text">Thousands of stray animals go hungry every day, searching through scraps just to survive. Your small act of kindness can fill an empty stomach and bring comfort to a life on the street. Help us provide regular meals to these voiceless souls who rely on compassionate hearts like yours</p>
    <a href="#" className="btn btn-primary">Donate</a>
  </div>
</div>
<div className="card md-4" style={{width: "26rem"}}>
  <img src={images[1]}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Adopt</h5>
    <p className="card-text">Every stray deserves a second chance at life, filled with love, care, and warmth. By choosing to adopt, you're not just saving a life—you're gaining a loyal friend forever. Open your heart and home to one who needs it most</p>
    <a href="/adopt" className="btn btn-primary">Adopt</a>
  </div>
</div>
<div className="card md-4 cd3" style={{width: "26rem"}}>
  <img src={images[2]} className="card-img-top" alt="..." style={{height:"22rem"}}/>
  <div className="card-body">
    <h5 className="card-title">Shelter Support</h5>
    <p className="card-text">When the streets are no longer safe, shelter becomes hope. Help us build and support safe havens where stray animals can heal, rest, and find the care they deserve. Your contribution creates comfort, protection, and a path to a better life.</p><br/>
    <a href="/contact" className="btn ">Shelter</a>
  </div>
</div>
</div>
</div>
  </div>
   </>
  )
}

