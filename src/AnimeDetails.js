import './AnimeDetails.css'
import './AllAnimes.css'
import { Link } from 'react-router-dom'

export default function AnimeDetails(props){

    return (
        <>
        <div id='full_page_anime'>
            <h1 class='head_pro'>{props.title}</h1>
                <div id='head_details_anime'>
                    <img src={require('./assest/'+props.title+'/group.jpg')} alt='not_found' width={'200px'} id='img_4'/>
                    <div id='info_of_anime'>
                        <div>Rating : 8</div>
                        <div>Aired : 1905</div>
                        <div>Season : 3</div>
                        <div>Rank : 5</div>
                        <div>Score : 9</div>
                        <div>Duration : 5hr</div>
                     </div>
                     <div id='text_info'>Fugiat excepteur ullamco est irure Lorem eiusmod dolor eu elit. Ullamco laboris ipsum voluptate in nulla. Adipisicing anim quis enim veniam nulla tempor in officia cillum est magna mollit deserunt. Deserunt Lorem quis qui pariatur duis.
                     </div>
                </div>
                <div>
                    <h1 class='head_pro'>Official Trailer:</h1>
                    <div style={{textAlign:'center'}}>
                        <span id='trailor'>
                            <iframe src={`https://www.youtube.com/embed/${props.link_anime}`} height="253" width='453'></iframe>
                        </span>
                    </div>
                </div>
                <div>
                    <h1 class='head_pro'>Characters : </h1>
                    <div className="allanimecharacter">
                        {props.anime_character.map((element,index)=>
                           <Link to={`${element.slice(0,element.length-4)}`}>
                                <div>
                                    <img src={require('./assest/'+props.title+'/'+element)} alt='not_found' className='img_11'/>
                                    <div style={{textAlign:'center'}}>
                                        <button id='btn_2'>{element.slice(0,element.length-4)}</button>
                                    </div>
                                </div>
                            </Link>
                        )} 
                    </div>
                </div>
            </div>
        </>
    )
}