import './PopularAnime.css'

export default function PopularAnime(props){

    return (
        <>
            <div>
                <div id="card_item">
                <img src ={require('./assest/'+props.title+'/themeImg.jpg')} alt ="not found" className='img1'></img>
                <button id="btn2">{props.title}</button>
            </div>
            </div>
        </>
    );
}