import React, {useState} from "react"

export default function App() {
    const [profile, setProfile] = useState({
      name: 'Mari',
      lastname: 'Chaidze',
      age: 15,
    });

    const handleAge = () => {
      setProfile({...profile, age: profile.age + 1})
    }

    const handleNameChange = (e) => {
        setProfile({ ...profile, name: e.target.value});
    }
    
    const handleLastName = (e) =>{
      setProfile({...profile, lastname : e.target.value})
    }

    const handleReset = () =>{
        setProfile({name: 'Mari', lastname: 'Chaidze', age: 15})
    }

    return (
        <>
        <p>{profile.name} - {profile.lastname} - {profile.age} - {profile.online}</p>
        <button onClick={handleAge}>Increase Age</button>
        
        <input type="text" placeholder="Enter Name" value={profile.name} onChange={handleNameChange} />

        <input placeholder="Enter lastname" value={profile.lastname} onChange={handleLastName}></input>

        <button onClick={handleReset}>Reset Profile</button>
        </>
    )
  }
