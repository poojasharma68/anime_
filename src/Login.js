import { Link } from 'react-router-dom';
import './Login.css'

export default function Login(){

    return (
        <>
            <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',backgroundImage:'url('+require('./HomeAsesst/login.jpg')+')',backgroundSize:'cover'}}>
                <div style={{flexBasis:'50%',display:'flex',justifyContent:'center',gap:'10px'}}>
                    <div style={{borderRadius:'25px',opacity:'0.6',padding:'20px',backgroundColor:'rgb(198, 197, 197)',flexBasis:'48%',display:'flex',justifyContent:'center',flexDirection:'column',gap:'10px'}}>   
                        <h2 style={{textAlign:'center',fontFamily: 'Playfair Display', color:'blueviolet'}}>Log In Here</h2>
                        <input type='text' className='input_' placeholder='email'style={{boxShadow: 'rgb(248, 248, 248) 0px 5px 5px'}}></input>
                        <input type='text' className='input_' placeholder='password' style={{boxShadow: 'rgb(248, 248, 248) 0px 5px 5px'}}></input>
                        <button id='btn2_' style={{height:'35px',width:'50%',boxShadow: 'rgb(248, 248, 248) 0px 5px 5px'}}>Login</button>
                        <p style={{textAlign:'center'}}>Have you <p style={{textAlign:'center',color:'green',fontWeight:'bolder'}}>Forget Password ?</p></p>
                     <Link to="/signUp"> <p style={{textAlign:'center'}}>Donot have account</p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}