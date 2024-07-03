import { FaStore } from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { GiTakeMyMoney } from "react-icons/gi";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RiCustomerServiceFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
const About=()=>{
    return(
        <>
       <div className="main">
        <div className="abtheading">
           <h1> Our Story </h1>
        
                <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
        
               <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
       
         <div className="abtimg">
            <img src="images/abt.jpg" alt="notfound" />
         </div>
       </div>
       <br/>
       <br/>
       <br/>

<div style={{display:"flex"}}>
       <div className="midmain" style={{width:"200px",height:"200px",border:"1px solid black",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
         <div className="iconouter" style={{backgroundColor:"dodgerblue", borderRadius:"50%",width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div className="iconinner"style={{borderRadius:"50%",width:"40px",height:"40px",fontSize:"30px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <FaStore />

            </div>
            
         </div>
         <h2 style={{marginBottom:"-10px"}}>10.5k</h2>
         <h5>Sellers active our site</h5>

         
       </div>
       {/* ................. */}
       <div className="midmain" style={{width:"200px",height:"200px",border:"1px solid black",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
         <div className="iconouter" style={{backgroundColor:"dodgerblue", borderRadius:"50%",width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div className="iconinner"style={{borderRadius:"50%",width:"40px",height:"40px",fontSize:"30px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <BiSolidDollarCircle />

            </div>
            
         </div>
         <h2 style={{marginBottom:"-10px"}}>10.5k</h2>
         <h5>Monthly Products Sale</h5>

         
       </div>
       <div className="midmain" style={{width:"200px",height:"200px",border:"1px solid black",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
         <div className="iconouter" style={{backgroundColor:"dodgerblue", borderRadius:"50%",width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div className="iconinner"style={{borderRadius:"50%",width:"40px",height:"40px",fontSize:"30px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <HiMiniShoppingBag />

            </div>
            
         </div>
         <h2 style={{marginBottom:"-10px"}}>10.5k</h2>
         <h5>Customer active in our site</h5>

         
       </div>
       <div className="midmain" style={{width:"200px",height:"200px",border:"1px solid black",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
         <div className="iconouter" style={{backgroundColor:"dodgerblue", borderRadius:"50%",width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div className="iconinner"style={{borderRadius:"50%",width:"40px",height:"40px",fontSize:"30px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <GiTakeMyMoney />

            </div>
            
         </div>
         <h2 style={{marginBottom:"-10px"}}>10.5k</h2>
         <h5>Annual gross sale in our site</h5>

         
       </div>
       </div>
       {/* .............................. */}
       <div className="picmain"style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"50px"}}>
         <div style={{}}>
            <img src="images/p1.jpg" alt="" style={{height:"200px",width:"200px"}}/>
            <h2>Tom Cruise</h2>
            <h5>Founder & Chairman</h5>
            <center><div className="innericon"style={{display:"flex"}}>
               <div><CiTwitter /></div>
               <div  style={{marginLeft:"10px"}}><CiInstagram /></div>
               <div  style={{marginLeft:"10px"}}><FaLinkedinIn /></div>
            </div></center>
         </div>

         <div style={{marginLeft:"100px"}}>
            <img src="images/p2.jpg" alt=""style={{height:"200px",width:"200px"}} />
            <h2>Emma Watson</h2>
            <h5>Managing Director</h5>
            <div className="innericon"style={{display:"flex"}}>
               <div><CiTwitter /></div>
               <div  style={{marginLeft:"10px"}}><CiInstagram /></div>
               <div  style={{marginLeft:"10px"}}><FaLinkedinIn /></div>
            </div>
         </div>

         <div style={{marginLeft:"100px"}}>
            <img src="images/p3.jpg" alt=""style={{height:"200px",width:"200px"}} />
            <h2>Will Smith</h2>
            <h5>Product Designer</h5>
            <div className="innericon"style={{display:"flex"}}>
               <div><CiTwitter /></div>
               <div  style={{marginLeft:"10px"}}><CiInstagram /></div>
               <div  style={{marginLeft:"10px"}}><FaLinkedinIn /></div>
            </div>
         </div>
       </div>
       {/* ......................................... */}
       <div className="lastmain" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
         <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>


               <div style={{borderRadius:"50%",backgroundColor:"dodgerblue",height:"50px",width:"50px",
            display:"flex",alignItems:"center",justifyContent:"center"
         }}>
               <div style={{borderRadius:"50%",backgroundColor:"white",height:"40px",width:"40px"
                  ,display:"flex",alignItems:"center",justifyContent:"center"
               }}>
                  <TbTruckDelivery />
               

               </div>
            </div>


            <h5>FREE AND FAST DELIVERY</h5>
            <p>Free delivery for all orders over $140</p>
         </div>

         <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginLeft:"100px"

         }}>



            <div style={{borderRadius:"50%",backgroundColor:"dodgerblue",height:"50px",width:"50px",
            display:"flex",alignItems:"center",justifyContent:"center"
         }}>
               <div style={{borderRadius:"50%",backgroundColor:"white",height:"40px",width:"40px"
                  ,display:"flex",alignItems:"center",justifyContent:"center"
               }}>
                  <RiCustomerServiceFill />
               

               </div>
            </div>

            <h5>24/7 CUSTOMER SERVICE</h5>
            <p>Friendly 24/7 customer support</p>
         </div>

         <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginLeft:"100px"}}>

         <div style={{borderRadius:"50%",backgroundColor:"dodgerblue",height:"50px",width:"50px",
            display:"flex",alignItems:"center",justifyContent:"center"
         }}>
               <div style={{borderRadius:"50%",backgroundColor:"white",height:"40px",width:"40px"
                  ,display:"flex",alignItems:"center",justifyContent:"center"
               }}>
               <VscWorkspaceTrusted  />

               </div>
            </div>
            <h5>MONEY BACK GUARANTEE</h5>
            <p>We return money within 30 days</p>
         </div>

       </div>
     
       </>
    )
}


export default About;