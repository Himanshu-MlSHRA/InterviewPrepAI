import React, { useState } from "react";
import { User, AtSign, Eye, EyeOff, Lock } from "lucide-react";
import ProfilePhotoSelector from "../../Components/Inputs/ProfilePhotoSelector";

const SignUp = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");

    if (!fullName.trim()) return setError("Please enter your full name.");
    if (!validateEmail(email)) return setError("Please enter a valid email address.");
    if (password.length < 8) return setError("Password must be at least 8 characters long.");

    console.log("SignUp attempted with:", { profilePic, fullName, email, password });
  };

  return (
      <div className="w-full max-w-md p-8 bg-red-10 rounded-2xl ">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold text-black">Create an Account</h3>
          <p className="text-sm text-gray-700 mt-1">
            Please enter your details to sign up
          </p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-5">
          {/* Profile Photo */}
          <div className="flex justify-center mb-2">
            <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          </div>

          {/* Full Name */}
          <div className="relative w-full">
            <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 text-sm border-b border-gray-300 focus:border-[#BA181B] focus:outline-none bg-transparent"
              required
            />
          </div>

          {/* Email */}
          <div className="relative w-full">
            <AtSign className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="john@example.com"
              className="w-full pl-10 pr-4 py-3 text-sm border-b border-gray-300 focus:border-[#BA181B] focus:outline-none bg-transparent"
              required
            />
          </div>

          {/* Password */}
          <div className="relative w-full">
            <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Min 8 Characters"
              className="w-full pl-10 pr-12 py-3 text-sm border-b border-gray-300 focus:border-[#BA181B] focus:outline-none bg-transparent"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3.5 text-gray-400 hover:text-[#BA181B] transition-colors"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="text-[#E5383B] text-sm text-center">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#BA181B] text-white py-3 rounded-lg font-semibold hover:bg-[#A4161A] transition-colors"
          >
            SIGN UP
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700">
            Already have an account?{" "}
            <button
              type="button"
              className="font-medium text-[#E5383B] hover:text-[#BA181B] transition-colors"
              onClick={() => setCurrentPage("login")}
            >
              Login
            </button>
          </p>
        </div>
      </div>
  );
};

export default SignUp;
