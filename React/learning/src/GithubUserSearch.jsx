import { useState } from "react";
import "./style.css";

const GitHubUserSearch = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!username) return;
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      if (data.message === "Not Found") {
        setError("User Not Found");
        setUserData(null);
      } else {
        setUserData(data);
        setError(null);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
      setUserData(null);
    }
  };

  return (
    <main className="container">
      <section className="search-section">
        <img src="github.png" alt="GitHub Logo" className="logo" />
        <div className="input-data">
          <input
            type="text"
            placeholder="Enter the Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={fetchData}>Search</button>
        </div>
      </section>

      <section className="result-section">
        {error && (
          <div className="error">
            <h1>404</h1>
            <p>{error}</p>
          </div>
        )}

        {userData && (
          <div className="user-info">
            <div className="image">
              <img src={userData.avatar_url} alt="User Avatar" />
            </div>
            <div className="information">
              <p>Name: {userData.name || "N/A"}</p>
              <p>Company: {userData.company || "N/A"}</p>
              <p>Id: {userData.id}</p>
              <p>Bio: {userData.bio || "N/A"}</p>
              <p>Location: {userData.location || "N/A"}</p>
              <p>
                <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                  More Details ..
                </a>
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default GitHubUserSearch;