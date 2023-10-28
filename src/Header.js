import { Link } from "react-router-dom"
import './Header.css'

export default function Header(){
   
    return (
        <>
            <div className="header_of_web">
                <h3>InfiniteAnime</h3>
                <ul className="header_links">
                    <Link to={`/`} style={{textDecoration:'none'}}> <li>Home</li></Link>
                    <Link to={`/allanime`} style={{textDecoration:'none'}}><li>All Anime</li></Link>
                    <Link to={`/about`} style={{textDecoration:'none'}}><li>About</li></Link>
                    <Link to={`/contact`} style={{textDecoration:'none'}}><li>Contact</li></Link>
                </ul>
                <Link to={'/login'}><button id="btn2_">Login/SignUp</button></Link> 
            </div>    
        </>
    )
}