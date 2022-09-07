import "./App.css";
import Profile from "./profile/Profile";
function App() {
  const person = {
    fullName: "Nozha Jlidi",
    Bio: "Phd student at the University of Enet Com",
    profession: " Teacher at the University of ISIMG",
    photo: "./photo.jpg",
   
  };
  function handleName() {
    alert(person.fullName);
  }
  return (
    <>
      <Profile person={person} clickMe={handleName} >
         </Profile>
      
    </>
    
  
    
  )


}

export default App;