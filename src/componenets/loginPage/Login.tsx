import axios from "axios";
import React, { useState } from "react";
import jwt_decode from "jwt-decode";



async function Login() {
    let [userName, setUserName] = useState("");
    let [password,setPassword]=useState("");


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


    return (
        <div className="Login">

        </div>

    );
} export default Login;