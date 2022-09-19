
import './counter.css';
import React,{useState} from 'react';
import img from './mango.jpg';
import img1 from './bananas.jpg';
import { Routing } from './Routing';

export function Counter()
{   

    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);

    return(
        <div>
            <Routing/>
        <div className="bgdiv1" >

            <div className="bgdiv2" >

                <h1 className='h1' >Bob ate {count1} mangoes {count2} bananas </h1>
                <img src = {img} className="manimg" />
                <img src = {img1} className="banimg" />

                <button className='btn1' onClick={()=>setCount1(count1+1)}> Eat Mango</button>
                <button className='btn2' onClick={()=>setCount2(count2+1)} >Eat Banana</button>
                



            </div>





            </div>


        
        
        </div>










    );

}