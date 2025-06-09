import React, { useState, useEffect, Profiler } from "react";
import { db } from "../utils";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  useEffect(() => {
    db.user;
    console.log(db.isAuthenticated());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    if (isLogin) {
      handleLogin();
    } else {
      handleSignUp();
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    // Handle login logic
    try {
      console.log("Logging in with:", formData);
      await db.login(formData.email, formData.password);
      // navigate to the home page or dashboard
      navigate("/");
    } catch (e) {
      // invalid password or email
      let detail;
      try {
        const parsed = JSON.parse(e.message.replace("Request failed:", ""));

        detail = parsed?.error?.detail;
      } catch (parseErr) {
        detail = "Could not parse error message.";
      }
      alert(`Login failed: ${detail || "An unknown error occurred."}`);
    }
  };

  const handleSignUp = async () => {
    // Handle sign-up logic
    try {
      // upload profile pic to api and get response

      await db.register(formData.email, formData.password, {
        fullName: formData.name,
      });
    } catch (error) {
      // Handle sign-up error
      let detail;
      try {
        const parsed = JSON.parse(error.message.replace("Request failed:", ""));
        detail = parsed?.error?.detail;
      } catch (parseErr) {
        detail = "Could not parse error message.";
      }
      alert(`Sign up failed: ${detail || "An unknown error occurred."}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
        {/* Header Tabs */}
        <div className="flex text-lg font-medium border-b">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 p-4 transition-colors duration-300 ${
              isLogin
                ? "bg-purple-500 text-white"
                : "hover:bg-purple-50 text-gray-600"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 p-4 transition-colors duration-300 ${
              !isLogin
                ? "bg-purple-500 text-white"
                : "hover:bg-purple-50 text-gray-600"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form Container */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {isLogin ? "Welcome Back!" : "Create Account"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field (Sign Up only) */}
            <div
              className={`transform transition-all duration-300 ${
                isLogin ? "scale-0 h-0" : "scale-100 h-auto"
              }`}
            >
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-200"
                    placeholder="John Doe"
                  />
                </div>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-200"
                placeholder="you@example.com"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-200"
                placeholder="••••••••"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-purple-500 text-white font-medium 
                       hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                       transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-500">
            {isLogin ? (
              <p>
                Don't have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-purple-500 hover:text-purple-600 font-medium transition-colors duration-200"
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-purple-500 hover:text-purple-600 font-medium transition-colors duration-200"
                >
                  Login
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
