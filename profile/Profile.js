import React from 'react'
import PropTypes from "prop-types";
import './Profile.css';

const Profile=(props)=> {
  return (
    <div className="profile">
    <h1 id='texte' style={{color:"#a19292",fontweight: "900" }}>
        Nom: {props.person.fullName}
        <br/>
        Bio: {props.person.Bio}
        <br/>
        Profession : {props.person.profession}
        <br/>
       
        <img style= {{width:500, height:500}}src={props.person.photo} alt=""/>
    </h1>
   
       
    <div className="BTN">
    <button onClick={props.ClickMe}>Click me</button>
    </div>
   
    </div>
  )
}
Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    clickMe: PropTypes.func.isRequired
}
Profile.defaultProps = {
    fullName:"Nozha Jlidi",
    Bio:"Phd student at the University of Sfax Enet Com",
    profession:"Teacher at the University of ISIMG",
    clickMe: () => alert('click me')
}

export default Profile;