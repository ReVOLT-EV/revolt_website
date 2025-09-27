/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import login_style from "@/styles/Login.module.scss";

import axios from 'axios';
axios.defaults.withCredentials = true;

export const LoginControl = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [inputUser, setInputUser] = useState('');
    const [inputPass, setInputPass] = useState('');

    const router = useRouter();

    useEffect(() => {
        axios.get('https://revolt-website-logsys.onrender.com/check', { withCredentials: true }).then((res) => {
        if (res.data.loggedIn) {
            setLoggedIn(true);
            setUsername(res.data.user);
            router.push('/revolt-team'); 
        }
        });
    }, []);

    const login = () => {
        axios.post('https://revolt-website-logsys.onrender.com/login', {
            username: inputUser,
            password: inputPass
        }).then(() => {
            setLoggedIn(true);
            setUsername(inputUser);
            router.push('/revolt-team');
        }).catch(() => alert("Invalid credentials"));
    };

    return (
        <div className={login_style.login_container}>
            {loggedIn ? (<div style={{ opacity: "0" }}>{username}</div>) : (
                <>
                    <div className={login_style.login_title}>
                        <h1>ReVOLT Login</h1>
                        <p>Login to Access ReVOLT Content</p>
                    </div>
                    <div className={login_style.login_cred_container}>
                        <div className={login_style.login_user}>
                            <input
                                type="text"
                                placeholder="Username"
                                value={inputUser}
                                onChange={e => setInputUser(e.target.value)}
                                className={login_style.text_style}
                            />
                        </div>
                        <div className={login_style.login_pass}>
                            <input
                                type="password"
                                placeholder="Password"
                                value={inputPass}
                                onChange={e => setInputPass(e.target.value)}
                                className={login_style.text_style}
                            />
                        </div>
                        <div className={login_style.login_button}>
                            <button onClick={login} className={login_style.button}>
                                Login
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
