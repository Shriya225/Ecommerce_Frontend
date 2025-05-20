import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useLoginUserMutation, useRegisterUserMutation } from "../redux/apiSlice";
import { toast } from "react-toastify";
import './Login.css';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [signup, setSignup] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [login, { isLoading: isLoginLoading }] = useLoginUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [registerUser, { isLoading: isRegisterLoading }] = useRegisterUserMutation();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            if (signup === false) {
                const response = await login(data).unwrap();
                dispatch(setAccessToken(response.access));
                console.log("successfully logged in");
                navigate('/');
                // toast.success("Successfully Logged in", { draggable: true });
            } else {
                if (data["password"] !== data["verifyPassword"]) {
                    toast.error("Passwords do not match.");
                    return;
                }
                const response = await registerUser(data).unwrap();
                setSignup(false);
                toast.success("Created Account");
            }
        } catch (err) {
            console.log("Login error:", err?.data?.detail || err.message);
            toast.error("Invalid Credentials");
        }
    };

    return (
        <Container className="login-container">
            <h2 className='login-heading'>{signup === true ? "Signup —" : "Login —"}</h2>
            <Form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        {...register('username', { required: "Enter Username" })}
                        placeholder="Enter Username"
                        className="login-input"
                    />
                    {errors.username && <p className="text-danger error-message">{errors.username.message}</p>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        type="password"
                        {...register("password", { required: "Enter Password" })}
                        placeholder="Enter Password"
                        className="login-input"
                    />
                    {errors.password && <p className="text-danger error-message">{errors.password.message}</p>}
                </Form.Group>

                {signup && (
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="password"
                            {...register("verifyPassword", { required: "Re-Enter password" })}
                            placeholder="Re-enter password"
                            className="login-input"
                        />
                    </Form.Group>
                )}

                <div className="d-flex justify-content-between mb-4 form-links">
                    <a href="#" className="forgot-password">Forgot your password?</a>
                    <Button
                        variant="link"
                        className="create-account p-0"
                        onClick={() => setSignup(!signup)}
                    >
                        {signup ? "Login instead" : "Create account"}
                    </Button>
                </div>

                <Button
                    type="submit"
                    className="signin-button"
                    disabled={isLoginLoading || isRegisterLoading}
                >
                    {signup === true ? "Sign Up" : "Sign In"}
                </Button>
            </Form>
        </Container>
    );
};

export default Login;