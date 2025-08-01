import React,{ useEffect}from 'react'
import './footer.css'
import video1 from '../../Assets/video1.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video1} muted autoPlay loop type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div data-aos="fade-up" className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv">
            <input type="text" placeholder='Enter Email Address' />
            <button className='btn flex' type='submit'>SEND<FiSend className="icon"/></button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className="icon"/>TripTales
              </a>
            </div>

            <div data-aos="fade-up" className="footerPara">
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Illo in corporis cupiditate 
              deserunt neque rem mollitia quae reprehenderit 
              impedit eaque corporis cupiditate deserunt 
              neque rem?
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
            </div>
          </div>
          
          <div className="footerLinks grid">

            {/* Group one */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icons"/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons"/>
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons"/>
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons"/>
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons"/>
                Payment
              </li>

            </div>

            {/* Group 2 */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icons"/>
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons"/>
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons"/>
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons"/>
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons"/>
                TripAdvisor
              </li>

            </div>

            {/* Group 3 */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icons"/>
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons"/>
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons"/>
                Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons"/>
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons"/>
                Oceania
              </li>

            </div>


          </div>

          <div className="footerDiv flex">
            <small>Your Journey Begins Here</small>
            <small>COPYRIGHTS RESERVED - PRINDA</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
