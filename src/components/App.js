
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">
        {isLoggedIn ? "Parent Component" : "Parent Component"}
      </h1>
      <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

// Child Component
function LoginForm({ isLoggedIn, setIsLoggedIn }) {
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };
  
  return (
    <div className="border p-6 rounded-lg shadow-lg bg-white">
      {!isLoggedIn ? (
        <form onSubmit={handleLogin} className="flex flex-col">
          <label className="mb-2">Username:</label>
          <input type="text" className="border p-2 mb-4 rounded" required />
          <br />
          <br />
          <label className="mb-2">Password:</label>
          <input type="password" className="border p-2 mb-4 rounded" required />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      ) : (
        <p className="text-green-600 font-semibold">You are logged in!</p>
      )}
    </div>
  )
}

export default App
