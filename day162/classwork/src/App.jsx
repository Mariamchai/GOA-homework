import React, {useState} from "react"

export default function App() {
    const [profile, setProfile] = useState({
      name: 'cola',
      price: 2,
      amount: 200,
    });

    const handleAge = () => {
      setProfile({...profile, amount: profile.amount + 1})
    }

    const handleNameChange = (e) => {
        setProfile({ ...profile, name: e.target.value});
    }
    
    const handleLastName = (e) =>{
      setProfile({...profile, price : e.target.value})
    }

    const handleReset = () =>{
        setProfile({name: 'Mari', price: 2, amount: 200})
    }

    return (
        <>
        <p>{profile.name} - {profile.price} - {profile.amount} - {profile.online}</p>
        <button onClick={handleAge}>Increase price</button>
        
        <input type="text" placeholder="..." value={profile.name} onChange={handleNameChange} />

        <input placeholder="..." value={profile.price} onChange={handleLastName}></input>

        <button onClick={handleReset}>Reset Profile</button>
        </>
    )
  }
