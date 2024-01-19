"use client";
import React from "react";
import styles from "../../../public/static/css/footer.css";
import { Row, Divider, Col } from "antd";
import Logo from "../../../public/static/image/logo.png";
import Logo_2 from "../../../public/static/image/award.png";
import Image from "next/image";

export default function Footer(props) {
  const { Title } = props;
  const links = [
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Vision And Mission",
      path: "/vison",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
    {
      title: "Media Coverage",
      path: "/media",
    },
    {
      title: "Glosaary",
      path: "/glossary",
    },
    {
      title: "Pricing",
      path: "/pricing",
    },
    {
      title: "Kalkine Media",
      path: "/kalkine",
    },
  ];

  const data =[
    {
      title: "Research Overview and Methodlogy",
      path: "/research",
    },
    {
      title: "Stocks Covered",
      path: "/stocks",
    },
    {
      title: "Past Performance",
      path: "/past",
    },
    {
      title: "Past Recomendation",
      path: "/recomendation",
    },
    {
      title: "FAQs",
      path: "/faq",
    },
    {
      title: "Pricing",
      path: "/pricing",
    },
    {
      title: "Kalkine Professional",
      path: "/kalkine",
    },
  ]

  console.log(links);
  console.log(data)

  return (
    <div className="box_design">
      <footer>
        <Row>
          <div className="boxes">
            <Col span={6}>
              <div
                className="items"
                
              >
                <Image
                  src={Logo}
                  width={130}
                  height={46}
                  style={{ padding: "13px" }}
                  className="footerlogo"
                  alt="logo"
                />
              </div>
              <div className="logoitem" style={{ paddingTop: "20px" }}>
                <Image
                  src={Logo_2}
                  width={200}
                  height={100}
                  className="footerimage"
                  alt="award"
                />
              </div>
            </Col>
            <Col span={6}>
              <div className="footer_container">
                <div className="heading">
                  <h3>{Title}</h3>
                </div>
                <div className="points">
                  <ul className="footerlinks">
                    {links.map((list, index) => (
                      <li className="" key={index}>{list.title}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="footer_container">
                <div className="heading">
                  <h3>Useful Links</h3>
                </div>
                <div className="points">
                  <ul className="footerlinks">
                    {
                      data.map((list, index) => (
                        <li className="" key={index}>{list.title}</li>
                      )
                      )
                    }
                  </ul>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="heading">
                <h3>Contact Us</h3>
              </div>
              <div className="points">
                <ul className="footerlinks_3">
                  <li>
                    <p className="iconss_location">
                      50 California St, Suite 1500, San Francisco, CA, United
                      States of America, USA, 94111
                    </p>
                  </li>
                  <li>
                    <p className="iconss_phone">+1 415-450-6569</p>
                  </li>
                  <li>
                    <p className="iconss_mail">support@kalkine.com</p>
                  </li>
                  <li>
                    <p className="iconss_clock"> Mon - Fri [9.00am - 5.00pm]</p>
                  </li>
                </ul>
              </div>
            </Col>
          </div>
        </Row>
        <a id="scrollUp" href="#top" className="foot_1">
          <span className="text">top</span>
        </a>
        <Divider orientation="left"></Divider>
      </footer>
    </div>
  );
}
