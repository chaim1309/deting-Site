import axios from "axios";
import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import './Login.css';
import ISuccessfulLoginData from "../../models/ISuccessfulLoginData";
import { IoClose } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";



function Login() {
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");

    async function loginClicked() {
        try {
            const response = await axios.post("http://localhost:8080/users/login", {
                userName,
                password

            });
            console.log(response);
            let token = response.data;
            let decodedToken: any = jwt_decode(token);
            let strSuccessfulLoginData: string = decodedToken.sub;

            let successfulLoginData: ISuccessfulLoginData = JSON.parse(strSuccessfulLoginData)

            console.log(successfulLoginData)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


        } catch (e: any) {
            console.error(e);
            if (e.response?.data?.error?.massage) {
                alert(e.response.data.error.massage)
            } else {
                alert("Login invalid,try later")
            }
        }

    }
    return (
        <div className="Login">

            <div className="wrapper">
                <a href="http://localhost:3000/"><span className="icon-close"><IoClose /></span></a>

                <div className="form-box login">
                    <h2> login</h2>
                    <form action="#">
                        <div className="input-box">

                            <span className="icon"><AiOutlineMail /></span>
                            <input
                                type="text" required onChange={(event) => setUserName(event.target.value)}

                            />
                            <label> User name</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><RiLockPasswordLine /></span>
                            <input
                                type="password" required

                                onChange={(event) => setPassword(event.target.value)}

                            />
                            <label> Password</label>
                        </div>

                        <div className="remember-forgot">
                            <label><input type="checkbox" />
                                remember me
                            </label>
                            <a href="#">forgot password?</a>
                        </div>
                        <input type="button" className="btn" value="login" onClick={loginClicked} />
                        <div className="login-register">
                            <p>Don't have an account?


                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;