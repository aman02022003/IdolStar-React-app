import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

export default function Home() {
  return (
   <>
    <div className='home' id='home' >
      <main>
        <h1>IdolStar</h1>
        <p>solution to all your problems</p>
        
      </main>
    </div>
 
   <div className="home2">
         <img src={vg} alt="graphics" />
         <div>
          <p>
            we are your one and only solution to the tech problems
            you face every day. we are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
         </div>
   </div>
   
   <div className="home3" id='about'>
      <div>
        <h1>who we are?</h1>
        <p>A service-based company is the one that provides customers, clients the ultimate solution to their requirements or a service to another company. The service offered by the company is intangible and can be provided in the form of skills, amenities, and expertise.</p>
      </div>
   </div>
   <div className="home4" id='brands'>
    <div>
      <h1>Brands</h1>
      <article>
        <div style={{
          animationDelay: "0.3s"
         } }>
            <AiFillGoogleCircle/>
            <p>Google</p>

        </div>
        <div style={{
          animationDelay: "0.5s"
         } }>
            <AiFillAmazonCircle/>
            <p>Amozon</p>

        </div>
        <div style={{
          animationDelay: "0.7s"
         } }>
            <AiFillYoutube/>
            <p>Youtube</p>

        </div>
        <div style={{
          animationDelay: "1s"
         } }>
            <AiFillInstagram/>
            <p>Instagram</p>

        </div>
      </article>
    </div>
   </div>
   </>
  )
}
