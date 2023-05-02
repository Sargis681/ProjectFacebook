import { useState } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import NavbarTwo from './components/NavbarTwo/NavbarTwo';
import Nbot from './components/Nbot/Nbot';
import ProfileName from './components/ProfileName/ProfileName';


function App() {
  const [post,setPost]=useState([
    {
      name:"Sargis",
      id:"1",
      comment:[
        
      ],
      img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    {
      name:"harut",
      id:"2",
      comment:[],
      img:"https://scontent.fevn7-1.fna.fbcdn.net/v/t1.6435-1/120530158_1679435518901169_1349167255766488268_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=eRXA2A85VK4AX_142VQ&_nc_ht=scontent.fevn7-1.fna&oh=00_AfBWwDB5j3FTVXIaNh-hudMmQ3P3MP_zjea9tKwXgI3Wdw&oe=6472EBA4"
  
  
    },
    {
      name:"Artur",
      id:"3",
      comment:[],
      img:"https://scontent.fevn7-1.fna.fbcdn.net/v/t1.6435-1/120530158_1679435518901169_1349167255766488268_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=eRXA2A85VK4AX_142VQ&_nc_ht=scontent.fevn7-1.fna&oh=00_AfBWwDB5j3FTVXIaNh-hudMmQ3P3MP_zjea9tKwXgI3Wdw&oe=6472EBA4"
  
  
    },
    {
      name:"Gexam",
      id:"4",
      comment:[],
      img:"https://scontent.fevn7-1.fna.fbcdn.net/v/t1.6435-1/120530158_1679435518901169_1349167255766488268_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=eRXA2A85VK4AX_142VQ&_nc_ht=scontent.fevn7-1.fna&oh=00_AfBWwDB5j3FTVXIaNh-hudMmQ3P3MP_zjea9tKwXgI3Wdw&oe=6472EBA4"
  
  
    },
    {
      name:"Nahapet",
      id:"5",
      comment:[],
      img:"https://scontent.fevn7-1.fna.fbcdn.net/v/t1.6435-1/120530158_1679435518901169_1349167255766488268_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=eRXA2A85VK4AX_142VQ&_nc_ht=scontent.fevn7-1.fna&oh=00_AfBWwDB5j3FTVXIaNh-hudMmQ3P3MP_zjea9tKwXgI3Wdw&oe=6472EBA4"
  
  
    },
  
  ]
  )


  return (
    <div className="App">
      <Navbar/>
      <Nbot/>
      <ProfileName/>
      <NavbarTwo/>
      <Content post = {post} setPost={setPost} />

            
      
    
    </div>
  );
}

export default App;
