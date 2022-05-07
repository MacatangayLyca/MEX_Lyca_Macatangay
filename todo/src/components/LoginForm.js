import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function LoginForm(props) {
    const history = useHistory();
   
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const [isActive, setIsActive] = useState(true);

    function authenticate(e) {
     
        e.preventDefault();
        if (username === "admin" && password === "admin1234") {
       
            history.push({
                pathname: "/todo",
                state: { username: username },
            });
        }
    }

    useEffect(() => {
       
        if (username !== "" && password !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [username, password]);

    return (
        <React.Fragment>
            <h1>MY PERSONAL TODO LIST</h1>
            <Form onSubmit={(e) => authenticate(e)}>
                <Form.Group controlId="userEmail">
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        bsPrefix="form-input"
                        className="todo-input w-100 my-3"
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        bsPrefix="form-input"
                        className="todo-input w-100 mb-3"
                    />
                </Form.Group>
                <Link to="/forgot-password">
                    <small className="my-5">
                        <span className="text-link my-3">Forgot Password</span>
                    </small>
                </Link>

                <Button
                    bsPrefix="button"
                    type="submit"
                    id="submitBtn"
                    className="todo-button w-100 text-center d-flex justify-content-center my-3 "
                >
                    Login
                </Button>
                <Link to="/register-account">
                    <small className="my-3 text-link">
                        Don't have an account?{" "}
                        <span className="text-link">Register</span>
                    </small>
                </Link>
            </Form>
        </React.Fragment>
    );
}
