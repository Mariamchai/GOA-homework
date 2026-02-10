import { useState } from "react";


function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const fetchUser = async (username) => {
    if (!username) return;

    setError("");
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${username}`);

    if (!res.ok) {
      setError("User not found");
      return;
    }

    const data = await res.json();
    setUser(data);
  };

  return (
    <div className="app">
      <h1>devfinder</h1>

      <SearchBar onSearch={fetchUser} />

      {error && <p className="error">{error}</p>}

      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;