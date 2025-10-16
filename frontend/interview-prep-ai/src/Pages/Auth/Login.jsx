import React, { useState } from "react";
import Input from "../../Components/Inputs/Inputs";

const Login = ({ setCurrentPage }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login:', { email, password });
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-transparent p-8 w-full">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-black">Welcome Back</h2>
                    <p className="text-[#000000] mt-2">
                        Please enter your details to log in
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <Input
                        type="email"
                        label="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        required
                    />

                    <Input
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Min 8 Characters"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-[#BA181B] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#A4161A] transition-colors mt-8"
                    >
                        LOGIN
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-[#000000]">
                        Don't have an account?{' '}
                        <button 
                            type="button"
                            className="font-medium text-[#E5383B] hover:text-[#BA181B] transition-colors"
                            onClick={() => setCurrentPage("signup")}
                        >
                            SignUp
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;