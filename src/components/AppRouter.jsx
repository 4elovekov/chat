import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader marginTop={"300px"} height={"400px"}/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map((route, index) =>
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.element />}
                    />
                )}
                <Route path="/*" element={<Navigate to="/Chat" replace />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route, index) =>
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.element />}
                    />
                )}
                <Route path="/*" element={<Navigate to="/Entry" replace />} />
            </Routes>
    );
};

export default AppRouter;