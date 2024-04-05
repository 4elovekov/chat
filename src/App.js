import React, {useEffect, useState} from "react";
import "./styles/App.css";
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from "./context";
import AppRouter from "./components/AppRouter";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(localStorage.getItem("auth")) {
            setIsAuth(true)
        }
        setIsLoading(false)
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading,
            setIsLoading
        }}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
