import React from 'react';
import "./About.css"
import bs1 from "../../Images/bs1.jpg"
import bs2 from "../../Images/bs2.png"
import bs3 from "../../Images/bs3.png"

import bs5 from "../../Images/bs5.png"
const About = () => {
    return (
        <div className="container vision my-5">
        <h2>Best Selling Products</h2>
        <p>OCLOCK is a very reputed and popular name for world class watches and writing instruments in Bangladesh. There are 49 OCLOCK strategically located at the entrances of key shopping malls and 5-star hotels. OCLOCK maintains an international standard interior, with uniform looking point of sales with an elegant outlook and ambience. It is operated by trained sales & customer care officers.</p>
       <div className="row text-center d-flex flex-column d-md-flex flex-md-row justify-content-center align-items-center  ">
           
           <div className="col-md-5">
           
           
               <div >
                   <img className="img" src={bs1} alt="" />
               </div>
           </div>
           <div className="col-md-7">
             <div className="row  card">
               
                   <div className="col-12 my-5  d-md-flex justify-content-center align-items-center  my-md-0 ">
                       <a href=""><img src={bs2}></img></a>
                       <div className="my-5 my-md-2"> 
                       <h4 >OBAKU-V219GXUUMU BK BK MT</h4>
                       <p className=" ms-5"> Barcode : 7031839.Dial Color : GRAY/GUN.In Stock : Available </p>
                       </div>
                       
                   </div>
               
           </div>
           <div className="row  card">
               
               <div className="col-12  my-5 d-md-flex justify-content-center align-items-center my-md-0 ">
                   <a href=""><a href=""><img src={bs3}></img></a></a>
                   <div className="my-5 my-md-2"> 
                       <h4>SEIKO-SUR261P1 ST BK MT 1 SEIKO</h4>
                       <p className="ms-5">Model : SUR261P1 ST BK MT.Barcode : 7030210.In Stock :Available</p>
                    </div>
               </div>
           </div>
         
           <div className="row  card">
               
               <div className="col-12  my-5 d-md-flex justify-content-center align-items-center my-md-0">
                   <a href=""><a href=""><img src={bs5}></img></a></a>
               
                   <div className="my-5  my-md-2"> 
                   <h4>CITIZEN-AN8168-51H ST BK MT</h4>
                   <p className="ms-5">OBarcode : 7032966.Dial Color : BLACK.In Stock : Available</p>
                   </div>
                   
               </div>
           </div>   

           {/* <div className="row  card">
               
               <div className="col-12  my-5 d-md-flex justify-content-center align-items-center my-md-0">
                   <a href=""><a href=""><img src={bs5}></img></a></a>
               
                   <div className="my-5  my-md-2"> 
                   <h4>Ticketing</h4>
                   <p className="ms-5">Our team also helping you in ticketing issues </p>
                   </div>
                   
               </div>
           </div>   */}
       </div>
       
    </div>
</div> 
    );
};

export default About;