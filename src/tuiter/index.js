import React from "react";
import "./styles.css"
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomeComponent from "./home";
import ExploreComponent from "./explore";
import {useLocation} from "react-router-dom";
import {Route, Routes} from "react-router";

const store = configureStore(
    {reducer: {
        who: whoReducer,
            tuitsData: tuitsReducer}});


function Tuiter() {
    const location = useLocation();
    const {pathname} = location;
    const parts = pathname.split('/')
    const pathLength = parts.length
    let currentNav = parts[pathLength - 1]
    if ((currentNav === "tuiter") || (currentNav === "")) {
        currentNav = "home"
    }
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active={currentNav}/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route index element={<HomeComponent/>}/>
                        <Route path="home" element={<HomeComponent/>}></Route>
                        <Route path="explore" element={<ExploreComponent/>}></Route>
                    </Routes>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter