import './CharacterDetails.css'

export default function CharacterDetails(props){
    return (
        <div id='full_page_character'>
            <h1 class='head_pro'>{props.character_info.slice(0,props.character_info.length-4)}</h1>
                <div id='head_details_character'>
                    <img src={require('./assest/'+props.title+'/'+props.character_info)} alt='not_found' width={'250px'} id='img_4'/>
                    <div id='info_of_character'>
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
            </div>
    )
}