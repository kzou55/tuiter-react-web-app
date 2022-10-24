import React from "react";
import TuitStats from "./TuitStats";

const TuitItem = (
    {
        tuit = {
            "_id": "20",
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "tweets": ""
        }
    }
) => {
    return(
        <li key={tuit._id} className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={48} className="rounded-circle" src={`/images/${tuit.image}`} alt="tuiticon"/>
                </div>
                <div className="col-10 ps-0">
                    <div>
                        {tuit.userName}
                        <span className="fa-stack fa-2x wd-verify-icon mb-1">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                        {tuit.handle} * {tuit.time}
                    </div>
                    <div>
                        {tuit.tuit}
                    </div>
                    <br/>
                    <div>
                        <TuitStats tuit={tuit}/>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;