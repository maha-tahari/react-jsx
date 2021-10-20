import './App.css';
import imageInPublic from "./dog.jpg";
import "./style.css"; 

 function App(){
  return (
    <div style={{border:'solid 1px black;max-width:100vw'}} className="font">
        <><h1 className="title red">Your name here</h1><br />
        <img src="/cat.jpg" alt="chat" className="image"/>
        <br />
        <img src={imageInPublic} alt="chien" className="image" />
      </><iframe width="560" height="315" src="https://www.youtube.com/embed/NsUWXo8M7UA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="image"></iframe>
        
        </div>
  )
 }  



export default App;
