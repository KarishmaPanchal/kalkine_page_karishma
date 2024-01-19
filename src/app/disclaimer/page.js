'use client'
import React from 'react'
import styles from './disclaimer.css'
import{ Row, Col, Divider} from 'antd'
   

export default function Disclaimer() {
return (
<div class='box_design policy'>
   <Row>
      <Col span={24}>
      <div className='divide'>
         <ul>
          <li>
           <a href=''>T&C</a>
          </li>
          <li>
           <a href=''>Privacy Policy</a>
          </li>
         </ul>
         <p className='disc'>Disclaimer</p>
         <p className='ref'>Kalkine Equities LLC., having Delaware File Number 4697384 is authorised to provide general advice only. The information on https://kalkine.com/ does not take into account any of your investment objectives, financial situation or needs. Before you make a decision about whether to acquire a financial product, you should obtain the Product Disclosure Statement from the product issuer. You should consider the appropriateness of advice taking into account your own objectives, financial situation and needs and seek independent financial advice before making any financial decisions.</p>
         <p className='ref'>The link to our <a href="https://kalkine.com/cms/terms-and-conditions"> Terms &amp; Conditions </a> and <a href="https://kalkine.com/cms/privacy-policy"> Privacy Policy </a> of our services have been provided for your reference.</p>
         <p className='copyright'>Copyright © 2024 Krish Capital Pty Ltd. All rights reserved. No part of this website, or its content, may be reproduced in any form without our prior consent.</p>
      </div>
      
      </Col>
   </Row>
</div>
   
)
}


