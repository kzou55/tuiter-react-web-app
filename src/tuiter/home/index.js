import React from "react";
import Tuits from "../tuits";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <Tuits/>
        </>
    );
};
export default HomeComponent;