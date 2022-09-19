import logo from './logo.svg';
import './App.css';




import { Menu } from './menu';
import { Home } from './home';
import img from './img1.jpg';
import { About } from './about';
import { Hello } from './heloo';
import { Cong } from './congrats';
import { Super } from './superlea';
import { Cards } from './cards';
// import { Routing } from './Routing';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Counter } from './counter';
import { Feedback } from './feedback';
import { Feedbackmsg } from './feebackmsg';


function App() {
  return (
     <div>
       {/* <Menu/>
      <Home/>
      <About/>
      <Hello/> 
      <Cong/>
      <Super/>
      <Cards/> 
      <Counter/>
      <Feedback/> */}
   
         
           {/* <BrowserRouter>
         <Routes>
            <Route path='/' element ={<Hello/>}/>
            <Route path='/congrats' element ={<Cong/>}/>
            <Route path='/super' element ={<Super/>}/>
            <Route path='/cards' element ={<Cards/>}/>
            <Route path='/Fruits' element ={<Counter/>}/>
            <Route path='/Feedback' element ={<Feedback/>}/>

         
            </Routes>
         </BrowserRouter>   */}

         {/* <Feedbackmsg/> */}
        

         <BrowserRouter>
         <Routes>
         <Route path='/' element ={<Hello/>}/>
            <Route path='/congrats' element ={<Cong/>}/>
            <Route path='/super' element ={<Super/>}/>
            <Route path='/cards' element ={<Cards/>}/>
            <Route path='/Fruits' element ={<Counter/>}/>
            <Route path='/Feedback' element ={<Feedback/>}/>
            <Route path='/Feedback1' element ={<Feedbackmsg/>}/>
            


         
            </Routes>
         </BrowserRouter> 


         

         
         

         

         


            
      
      

      

      


      
      





      
      
      
      
   </div>

);
}


export default App;















    