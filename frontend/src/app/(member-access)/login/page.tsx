
import React from "react";
import { LoginControl } from "./login_functions";

import login_style from "@/styles/Login.module.scss";

export default function Login_Main() {
    return (
        <div className={login_style.login_main_section}>
            <div className={login_style.block}>
                <LoginControl/>
            </div>
        </div>
    );
};