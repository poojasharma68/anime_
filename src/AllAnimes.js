import "./AllAnimes.css"
import Card from "./Card";
import PopularAnime from './PopularAnime'
import { Link} from "react-router-dom";
import Navbar from "./Navbar";
export default function AllAnimes(){

    const arr=[{id:1,name:'Naruto',link:'-G9BqkgZXRA'},
                {id:1,name:'BakiHanma',link:'-G9BqkgZXRA'},
                {id:1,name:'Jujutsu Kaisen',link:'-G9BqkgZXRA'},
                {id:1,name:'kimetsu no yaiba',link:'-G9BqkgZXRA'},
                {id:1,name:'OnePeice',link:'-G9BqkgZXRA'},
                {id:1,name:'Tokyo Revengers',link:'-G9BqkgZXRA'},
                {id:1,name:'One Punch Man',link:'-G9BqkgZXRA'},
                {id:1,name:'Mushoku Tensei',link:'-G9BqkgZXRA'},
                {id:1,name:'Tokyo Ghoul',link:'-G9BqkgZXRA'},
                {id:1,name:'Dragon Ball',link:'-G9BqkgZXRA'}]

    const popular=[{id:1,name:'Naruto'},
                {id:1,name:'BakiHanma'},
                {id:1,name:'Jujutsu Kaisen'}];

    return (
        <>
        <Navbar />
        <div id="anime">
            <div className="allanime">
               {arr.map((element,index)=>
                <Link to={`${element.name}`}>
                    <Card title={element.name}/>
                </Link>
               )} 
            </div>
            <div className='popularanime' >
                <h2 classname="head" style={{marginTop:'-10px',fontFamily: 'Kanit',marginBottom:'20px'}}>Popular Animes</h2> 
                 <div className="popanime">
                    {popular.map((element,index)=>{
                    return <PopularAnime title={element.name}/>
                    })}
               </div>
            </div>
        </div>
        </>
    );
}