import './Card.css'
import "./AllAnimes.css"

export default function Card(props){
    return(
        <>
            <div id="card_item_1">
                <img src ={require('./assest/'+props.title+'/themeImg.jpg')} alt ="not found" className='img1'></img>
                <button id="btn2">{props.title}</button>
            </div>
        </>
    );
}