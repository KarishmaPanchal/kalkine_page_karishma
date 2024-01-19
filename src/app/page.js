'use client'
import React from "react";
import styles from "../../public/static/css/home.css";
import Image from "next/image";
import { Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import Disclaimer from "./disclaimer/page";
import Profile from "./profile/page";
import Cards from "./components/cards";
import Navigation from "./navigation/page";

export default function Page() {
   const data = [
      {
         name:"High-Risk High-Rewards",
         id:1,
         imageUrl:'/static/image/highrisk.png'
      },
      {
         name:"Technical Analysis Reports",
         id:1,
         imageUrl: '/static/image/pic2.png'
       },
      {
         name:"Low-To-Medium Risk",
         id:1,
         imageUrl:'/static/image/pic3.png'
      },
      {
         name:"Diversified Themes Reports",
         id:1,
         imageUrl:'/static/image/pic4.png'
      },
      
   ]
  const renderItem = (item) => {
    return (
      <>
        <Col span={6}>
          <div className="line">
            <Image
              src={item.imageUrl}
              width={180}
              height={180}
              layout="responsive"
              style={{ maxWidth: "200px", display: "inline" }}
            />
            <p className="pictures">{item.name}</p>
          </div>
        </Col>
      </>
    );
  };
  return (
    <div className="box_design body_back">
      <Row>
        <Col span={24}>
          <div className="product">
            <h1>Select Products</h1>
            <h3>That Suits Your Investment Type</h3>
            <p>
              Are you a conservative, Moderate or Aggressive investor? At
              Kalkine, we help you choose products as per your risk- tolerance
              and investment objective
            </p>
          </div>
        </Col>
      </Row>
      <Row>
         {data.map(renderItem)}
      </Row>
    </div>
  );
}
