import { Route, Routes } from "react-router-dom";
import AllAnimes from "./AllAnimes";
import Home from "./Home";
import AnimeDetails from "./AnimeDetails";
import CharacterDetails from "./CharacterDetails";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Anime(props){
    const arr=[
                {id:1,name:'Naruto',link:'-G9BqkgZXRA', characters:['jiraya.webp','kakashi.jpg','naruto.jpg','sakura.jpg','sasuke.jpg']},
                {id:2,name:'BakiHanma',link:'xniBk7zAKMY',  characters:['Baki.webp','doppo orochi.png','Gouki Shibukawa.jpg','Hanayama Kaoru.jpg','Kaku Kaioh.jpg','Katsumi Orochi.jpg','Oliva.webp','Pickle.jpg','Retsu.jpg','Yujiro Hanma.jpg']},
                {id:3,name:'Jujutsu Kaisen',link:'Pm-wNmS9RGI',  characters:['Aoi Todo.jpg','Kento Nanami.png','Megumi Fushiguro.jpg','Nobara Kugisaki.jpg','Panda.jpg','Satoru Gojo.jpeg','Suguru Geto.jpg','Sukuna.jpg','Toge Inumaki.png','Toji Fushiguro.jpeg','Yuji Itadori.jpg','Yuta Okkotsu.jpg']},
                {id:4,name:'kimetsu no yaiba',link:'9DhuWapDDrw',  characters:['Genya Shinazugawa.png','Giyu Tomioka.jpg','Inosuke Hashibira.jpg','Kanao Tsuyuri.png','Kyojuro Rengoku.png','Muichiro Tokito.jpg','Muzan Kibutsuji.png','Nezuko Kamado.jpg','Shinobu Kocho.jpg','Tanjiro Kamado.png','Tengen Uzui.png','Zenitsu Agatsuma.jpg']},
                {id:5,name:'OnePeice',link:'S8_YwFLCh4U',  characters:['_Usopp.jpg','_zoro.png','Ace.jpg','Blackbeard.jpg','Brook.jpg','Chopper.jpg','Franky.png','Gol D. Rogers.jpg','Jimbei.png','Luffy.jpg','Nami.jpg','Robin.jpg','sanji.jpg','Shanks.jpg']},
                {id:6,name:'Tokyo Ghoul',link:'vGuQeQsoRgU',  characters:['Uta.jpg','Touka Kirishima.jpg','Shuu Tsukiyama.jpg','Rize Kamishiro.png','Kuzen Yoshimura.jpg','koutarou amon.jpg','Ken Kaneki.jpg','Kaya Irimi.jpg','Juuzou Suzuya.jpg','Hinami Fueguchi.jpg','Eto.jpg']},
                {id:7,name:'One Punch Man',link:'Poo5lqoWSGw',  characters:['atomic samurai.jpg','Deep Sea King.jpg','elder centipede.jpg','fubuki.jpg','garou.jpg','genos.jpg','king.jpg','metal knight.jpg','saitama.jpg','silver fang.jpg','tatsumaki.jpg','speed-o-sonic.png','mumen rider.jpg']},
                {id:8,name:'Mushoku Tensei',link:'jSCKo90DMK4',  characters:['Badigadi.jpeg','Hitogami.webp','Kishirika Kishirisu.jpg','Nanahoshi.jpeg','Orsted.jpg','Paul Greyrat.jpg','Perugius Dola.jpg','Roxy.jpg','Rudeus Greyrat.jpeg','Ruijerd Superdia.webp','Sylphiette.jpg']},
                {id:9,name:'Tokyo Revengers',link:'4GTWhDJmYYM',  characters:['Chifuyu Matsuno.jpg','Hinata.jpg','Izana Kurokawa.png','Keisuke Baji.png','Ken Ryuguji.jpg','Kisaki Tetta.jpg','Mikey.jpg','Nahoya Kawata.jpg','Taiju Shiba.jpg','Takashi Mitsuya.jpg','Takemichi Hanagaki.jpg']},
                {id:10,name:'Dragon Ball',link:'wHAaKXtfSOg',  characters:['Berus.jpg','Broly.jpg','Buu.jpg','Frieza.png','Gohan.jpg','Goku Black.jpg','Goku.jpg','Jiren.jpg','Master Roshi.png','Perfect Cell.jpg','Trunks.png','Vegeta.jpg']}
            ];

    return (
        <>
            <Routes>
                <Route path="/" element={<Home data={arr}/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
                <Route path="/allanime" element={<AllAnimes/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                {arr.map((ele,index)=>
                    <Route path={`/allanime/${ele.name}`} element={<AnimeDetails title={ele.name} link_anime={ele.link} anime_character={ele.characters}></AnimeDetails>}></Route>
                )}
                {arr.map((ele,index)=>
                    ele.characters.map((element,indec)=><Route path={`/allanime/${ele.name}/${element.slice(0,element.length-4)}`} element={<CharacterDetails title={ele.name} character_info={element}></CharacterDetails>}/>
                ))}
            </Routes>
        </>
    )
}