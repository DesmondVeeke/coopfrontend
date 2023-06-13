import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            };

            console.log('Request:', requestOptions); // Log the request

            const response = await fetch('http://localhost:9090/api/users/login', requestOptions);

            console.log('Response:', response); // Log the response

            if (response.ok) {
                const token = response.headers.get('Authorization');
                const tokenWithoutPrefix = token.replace('Bearer ', ''); // Remove the "Bearer " prefix
                console.log("Token is: " + tokenWithoutPrefix);
                localStorage.setItem('token', tokenWithoutPrefix);



                navigate("/");
                // Redirect or perform any other necessary action upon successful login
            } else {
                // Handle login error
            }
        } catch (error) {
            // Handle network or server error
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;
