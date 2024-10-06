import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { UserService } from "../classes/database/UserService";

const Signup = ({ signUp }) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setEmailError(false);
        setUsernameError(false);
        setPasswordError(false);

        if (email === "") {
            setEmailError(true);
        }
        if (username === "") {
            setUsernameError(true);
        }
        if (password === "") {
            setPasswordError(true);
        }

        console.log(
            `email ${email}, username ${username}, password = ${password}`
        );

        if (email && username && password) {
            const response = await UserService.signupUserLogin(
                email,
                username,
                password,
                "user"
            );
            console.log("response");
            console.log(response);
        }
    }

    return (
        <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl mb-8">Register Form</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="type"
                    sx={{ mb: 3 }}
                    fullWidth
                    value={username}
                    error={usernameError}
                />

                <TextField
                    label="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    sx={{ mb: 3 }}
                    fullWidth
                    value={email}
                    error={emailError}
                />

                <TextField
                    label="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    sx={{ mb: 3 }}
                    fullWidth
                    value={password}
                    error={passwordError}
                />

                <Button variant="outlined" color="secondary" type="submit">
                    Register
                </Button>
            </form>
        </div>
    );
};

export default Signup;
