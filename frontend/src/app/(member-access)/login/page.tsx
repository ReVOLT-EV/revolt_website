
import React from "react";
import { LoginControl } from "@/components/Login_Function";
import Under_Development from "@/components/Under_Development";

export default function Login_Main() {
    return (
        <>
            <div style={{ 
                height: "100vh", display: "flex", 
                justifyContent: "center", alignItems: "center"
            }}>
                <Under_Development />
            </div>
            <div style={{display: "none"}}>
                <LoginControl/>
            </div>
            
        </>
    );
};