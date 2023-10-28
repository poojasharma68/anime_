import "./Navbar.css"

function Navbar(){
    return (
        
        <div className="navhead">
            <h1 className="navbar">ALL ANIMES</h1>
            <div id="searchbox">
                <input type="text" placeholder="Search here"/> <span/> <button id="btn1">Explore</button>
            </div>
        </div>
    );
}

export default Navbar;