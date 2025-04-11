import React, { useState } from 'react'
import { Container,Form,Button,Alert } from 'react-bootstrap';
import {useForm} from "react-hook-form"
import {useLoginUserMutation,useRegisterUserMutation} from "../redux/loginApiSlice"
import {toast} from "react-toastify";
const Login = () => {
    const [signup,setSignup]=useState(false);
    const {register,handleSubmit,formState:{errors}}=useForm();
    const [login, { isLoading: isLoginLoading }] = useLoginUserMutation();
    const [registerUser, { isLoading: isRegisterLoading }] = useRegisterUserMutation();
    const onSubmit=async (data)=>{
        console.log(data);
        try{
            if(signup===false){
                const response=await login(data).unwrap();
                console.log("succesfully logged in ");
                toast.success("Succesfully Logged in",{draggable:true});
                console.log("response is ",response);
            }
            else{
                if(data["password"]!== data["verifyPassword"]){
                    console.log("oops! please enter valid passwrods ,both must match...");
                    toast.error("Passwords do not match.");
                    return;
                }
                const response=await registerUser(data).unwrap();
                console.log("Created A/c");
                console.log("response is ",response);
                toast.success("Created Account");
            }
            
        }
        catch(err){
            console.log("Login error:", err?.data?.detail || err.message);
            toast.error("Invalid Credentials");
            
        }
        
    }
    {console.log("rendering login component....");
    }
    return (
        <div>
            <h1 className='text-center'>{signup===true?"signup":"Login"}</h1>
            <Form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto mt-5">
                <Form.Group>
                    <Form.Control type="text" {...register('username',{required:"Enter Username"})} placeholder='Enter UserName'></Form.Control>
                    {errors.username && <p className='text-danger'>{errors.username.message}</p>}
                </Form.Group> <br/>
                <Form.Group>
                    <Form.Control type="password" {...register("password",{required:"Enter Password"})} placeholder='Enter Password' />
                    {errors.password &&<p className='text-danger'>{errors.password.message}</p>}
                </Form.Group> <br/> 
                    {signup===true && <Form.Group><Form.Control type="password" {...register("verifyPassword",{required:"Re-Enter password"})} placeholder='Re-enter password' /> </Form.Group>}
               
                <Button onClick={()=>{setSignup(!signup)}} className='btn-warning' >{signup===true?"Login Here":"Create Account"}</Button><br />
                <Button type='submit' disabled={isLoginLoading||isRegisterLoading}>{signup===true?"Sign Up":"Sign In"}</Button>
            </Form>


    </div>
  )
}

export default Login