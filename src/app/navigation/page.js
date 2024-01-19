import { Divider, Row ,Col} from 'antd'
import React from 'react'
import styles from './navigation.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import a from 'next/link';



export default function Navigation() {
return (
<div className='nav_color'>
   <nav className="navbar navbar-expand-xl">
      <FaPhoneAlt />
      <a className="navbar-brand text -white" href="#"> 18889881171</a>
      <button className="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" className="collapse navbar-collapse">
         <div className="navbar-nav d-none d-xl-flex">
            <div className="nav-item mx-2 active text-white">
               <a className="nav-link" href="# ">Free Trial</a>
            </div>
            <div id="link-1" className="nav-item dropdown-hover mx-2">
               <a className="nav-link dropdown -hover-button" href="#">Products <IoMdArrowDropdown/><span className="sr-only">(current)</span></a>
               <div className="dropdown-hover-content nav_color">
                  <div className="row">
                     <div className="col-lg-3 ">
                        <div className="mb-3 ">
                           <h6 className="high_color"><a  href="#">High-Risk High-Reward</a><IoMdArrowDropright/></h6>
                          
                           <a className="dropdown-item p-0 " href="#">American Tech Report</a>
                        </div>
                     </div>
                     <div className="col-lg-3">
                        <div className="mb-3">
                           <h6 className="high_color"><a href="#">Technical Analysis  Reports</a><IoMdArrowDropright/></h6>
                           <a className="dropdown-item  " href="#">Global Accomodity Technical Analysis Report</a>
                           <a className="dropdown-item  " href="#">US Technical Analysis Report</a>
                           <a className="dropdown-item  " href="#">Kalkine Bearish Chart Report</a>
                        </div>
                     </div>
                     <div className="col-lg-3">
                        <div className="mb-3">
                           <h6 className="high_color"><a href="#">Low-To-Medium Risk</a><IoMdArrowDropright/></h6>
                           <a className="dropdown-item p-0 " href="#">Earning Hunter Report</a>
                           <a className="dropdown-item p-0 " href="#">US Dividend Income Report</a>
                           <a className="dropdown-item p-0 " href="#">Inflation Report</a>
                           <a className="dropdown-item p-0 " href="#">Diversified Oppurtunities Report</a>
                        </div>
                     </div>
                     <div className="col-lg-3">
                        <div className="mb-3">
                           <h6 className="high_color"><a href="#">Diversified Theme R eports</a><IoMdArrowDropright/></h6>
                           <a className="dropdown-item p-0 " href="#">Global Big Money Report</a>
                           <a className="dropdown-item p-0 " href="#">Global Fully Charged Report</a>
                           <a className="dropdown-item p-0 " href="#">Global Green Energy Report</a>
                           <a className="dropdown-item p-0 " href="#">Kalkine IPO Report</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div id="link-2" className="nav-item dropdown-hover mx-2">
               <a className="nav-link dropdown -hover-button text -white" href="#"> Stock Research <IoMdArrowDropdown/></a>
               <div className="dropdown-hover-content">
                  <div className="row">
                     <div className="col-lg-4">
                        <div className="mb-2">
                           <h6 className="colour-2" > <a href="# ">Industries</a><IoMdArrowDropright/></h6>
                           <a className="dropdown-item p-0 " href="#">Industrials</a>
                           <a className="dropdown-item p-0 " href="#">Health Care</a>
                           <a className="dropdown-item p-0 " href="#">Energy</a>
                           <a className="dropdown-item p-0 " href="#">Consumer Discretionary</a>
                           <a className="dropdown-item p-0 " href="#">Information Technology</a>
                        </div>
                        <div className=" next ">
                           <a className="dropdown-item p-0 " href="#">Utlities</a>
                           <a className="dropdown-item p-0 " href="#">Real Estate</a>
                           <a className="dropdown-item p-0 " href="#">Communication Services</a>
                           <a className="dropdown-item p-0 " href="#">Consumer Staples</a>
                           <a className="dropdown-item p-0 " href="#">Financials</a>
                           <a className="dropdown-item p-0 " href="#">Materials</a>
                           <a className="dropdown-item p-0 " href="#">Miscellaneous</a>
                        </div>
                     </div>
                     <div className="col-lg-3">
                        <div className="mb-2">
                           <h6 a className="colour-2"> < a href="# ">Market Capitalization</a><IoMdArrowDropright/></h6>
                           <a className="dropdown-item p-0 " href="#">Blue-Chip</a>
                           <a className="dropdown-item p-0 " href="#">Mid-Cap</a>
                           <a className="dropdown-item p-0 " href="#">Small-Cap</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="nav-item mx-2">
               <a className="nav-link" href="# ">About Us</a>
            </div>
            <div id="link-1" className="nav-item dropdown-hover mx-2">
               <a className="nav-link dropdown -hover-button" href="#">Investing News <IoMdArrowDropdown/><span className="sr-only">(current)</span></a>
               <div className="dropdown-hover-content">
                  <div className="row">
                     <div className="col-lg-3">
                        <div className="mb-3">
                           <h6 className="colour-2" ><a  href="# ">General News</a><IoMdArrowDropright/></h6>
                           <a className="dropdown-item p-0 " href="#">Economics News</a>
                           <a className="dropdown-item p-0 " href="#">Market News</a>
                           <a className="dropdown-item p-0 " href="#">Curriences</a>
                           <a className="dropdown-item p-0 " href="#">Analyst Forecast</a>
                           <a className="dropdown-item p-0 " href="#">Commodities</a>
                           <a className="dropdown-item p-0 " href="#">Corporate News</a>
                           <a className="dropdown-item p-0 " href="#">General News</a>
                           <a className="dropdown-item p-0 " href="#">Politics</a>
                        </div>
                     </div>
                     <div className="col-lg-4">
                        <div className="mb-2">
                           <h6 className="colour-2"><a  href="# ">By-Industries</a><IoMdArrowDropright/></h6>
                           <a className="dropdown-item p-0 " href="#">Financial</a>
                           <a className="dropdown-item p-0 " href="#">Health Care</a>
                           <a className="dropdown-item p-0 " href="#">Infrastructure</a>
                           <a className="dropdown-item p-0 " href="#">Industrials</a>
                           <a className="dropdown-item p-0 " href="#">Real Estate</a>
                           <a className="dropdown-item p-0 " href="#">Energy</a>
                        </div>
                        <div className="mb-2">
                           <a className="dropdown-item p-0 " href="#">Utlities</a>
                           <a className="dropdown-item p-0 " href="#">Consumers</a>
                           <a className="dropdown-item p-0 " href="#">Services</a>
                           <a className="dropdown-item p-0 " href="#">Mining Materials</a>
                           <a className="dropdown-item p-0 " href="#">Financials</a>
                           <a className="dropdown-item p-0 " href="#">Technology Media Telecommunications</a>
                           <a className="dropdown-item p-0 " href="#">Others</a>
                        </div>
                     </div>
                     <div className="col-lg-3">
                        <div className="mb-3">
                           <h6 className="colour-2"><a  href="# ">By-Type</a><IoMdArrowDropright/></h6>
                           <a className="dropdown-item p-0 " href="#">IPO News</a>
                        </div>
                     </div>
                     <div className="col-lg-2">
                        <div className="mb-3">
                           <h6 className="colour-2"><a  href="# ">Discover More</a><IoMdArrowDropright/></h6>
                           <a className="dropdown-item p-0 " href="#">Educational Topics</a>
                           <a className="dropdown-item p-0 " href="#">Lifestyle</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="nav-item mx-2">
               <a className="nav-link" href="# ">Premium</a>
            </div>
            <div className="nav-item mx-2">
               <a className="nav-link" href="# ">Screeners</a>
            </div>
         </div>
      </div>
   </nav>
</div>
)
}
