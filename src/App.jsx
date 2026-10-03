import React, { useState } from "react";
import Login from "./login/Login.jsx";
import Signup from "./signup/signup.jsx";
import Left from "./Home/left/left.jsx";
import Right from "./Home/right/right.jsx";
import Logout from "./Home/left1/Logout.jsx";

function App() {
  const [authUser, setAuthUser] = useState(null); // null = logged out
  const [isLoginView, setIsLoginView] = useState(true);

  // User Authentication Handler
  const handleAuthSuccess = (userData) => {
    setAuthUser(userData);
  };

  // Logout Handler
  const handleLogout = () => {
    setAuthUser(null);
  };

  return (
    <div data-theme="light" className="min-h-screen bg-slate-100 text-black">
      {/* User logged in thakle Chat App UI dekhabe */}
      {authUser ? (
        <div className="flex flex-row w-full min-h-screen">
          <Logout onLogout={handleLogout} />
          <Left />
          <Right />
        </div>
      ) : (
        /* Logged out thakle Login / Signup View dekhabe */
        <div>
          {isLoginView ? (
            <Login
              onLoginSuccess={handleAuthSuccess}
              onSwitch={() => setIsLoginView(false)}
            />
          ) : (
            <Signup
              onSignupSuccess={handleAuthSuccess}
              onSwitch={() => setIsLoginView(true)}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;