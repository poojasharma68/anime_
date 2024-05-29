import Header from "./Header"
import Footer from "./Footer"
import "./Home.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Founder from "./Founder";
function Home(props){

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const respon = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 700 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 2
        }
      };

    return (
        <>
        <Header/>
        <div style={{display:'flex',justifyContent:'center',paddingBottom:'20px'}}>
            <div style={{width:'70vw'}}>
                <Carousel responsive={responsive} autoPlay={true}>
                        <div className="img__1"><img src={require("../src/HomeAsesst/Wallpaper.jpg")} alt="not_found" /></div>
                        <div className="img__1"><img src={require("../src/HomeAsesst/AnimeGirl.jpg")}  alt="not_found"/></div>
                        <div className="img__1"><img src={require("../src/HomeAsesst/Wallpaper.webp")}  alt="not_found"/></div>
                        <div className="img__1"><img src={require("../src/HomeAsesst/DeathNote.jpg")}  alt="not_found"/></div>
                        <div className="img__1"><img src={require("../src/HomeAsesst/NightCore.jpg")}  alt="not_found"/></div>
                        <div className="img__1"><img src={require("../src/HomeAsesst/JujutsuKaisen.jpg")}  alt="not_found"/></div>
                </Carousel>
            </div>  
        </div> 
        <div style={{flexWrap:'wrap', display:'flex',alignItems:'center',justifyContent:'center',gap:'20px', backgroundColor:'rgb(246, 246, 255)',paddingBottom:'20px'}}>
          <div style={{flexBasis:'45%', borderRadius:'10px',display: 'flex',height:'400px',marginTop:'50px',flexWrap:'wrap',boxShadow:'rgba(0, 0, 0, 1) 0px 3px 8px',backgroundImage:'url('+require('./HomeAsesst/background.webp')+')'}}>
            <div style={{width:'40%', height:'100%',backgroundColor:'rgb(255, 254, 215)'}}>
              <img src={require("../src/HomeAsesst/3Line.jpg")} alt="not_found" width={40} style={{margin:'10px',borderRadius:'10px'}}/>
              <div style={{display:'flex',flexDirection:'column',gap:'10px',marginTop:'30px',marginLeft:'10px'}}>
                <h1 style={{color:'blueviolet',fontFamily: 'Playfair Display'}}>ABOUT</h1><h1 style={{color:'blueviolet',fontFamily: 'Playfair Display'}}>US</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <button id="btn_1_1">Read More</button>
              </div>
            </div>
            <div style={{height:'100%',width:'50%'}}>
              <div style={{marginTop:'30%',marginLeft:'30%'}}>
                <img src={require("../src/HomeAsesst/about_us.png")} alt="not_found" width={200}/>
              </div>
            </div>
          </div>
          <div>
            {/* <img src={require("./HomeAsesst/vishu_dev.jpg")} alt="not_found" width={250}  height={250} style={{flexBasis:'38%',border:'2px solid rgb(92, 92, 92)',borderRadius:'50%',boxShadow:'rgba(10, 0, 27, 200) 0px 3px 8px',opacity:0.9}}></img> */}
          </div>
        </div>
        <div style={{backgroundColor:'rgb(241, 241, 245)',marginTop:'-8px',padding:'10px',height:'300px'}}>
            <h1 id="popular_anime_home">Popular Animes</h1>
            <div style={{display:'flex',justifyContent:'center'}}>
                <div style={{width:'70vw',height:'200px'}}>
                    <Carousel responsive={respon} autoPlay={true}>
                        {props.data.map((element)=>
                          <Link to={`/allanime/${element.name}`}><div className="img__11"><img src={require(`./assest/${element.name}/themeImg.jpg`)}  alt="not_found"/></div></Link>
                        )}
                    </Carousel>
                </div>  
            </div> 
        </div>  
        <Founder/>
        <Footer/>
        </>
    )
}
export default Home;