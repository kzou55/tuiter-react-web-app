import React, {useEffect} from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk, findTuitsThunk} from "../../services/tuits-thunks";

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
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={48} className="rounded-circle" src={`/images/${tuit.image}`} alt="tuiticon"/>
                </div>
                <div className="col-10 ps-0">
                    <div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <span className={"fw-bold"}>
                            {tuit.userName}
                        </span>
                        &nbsp;
                        <span className="fa-stack fa-2x wd-verify-icon mb-1">
                            <i className="fas fa-certificate fa-stack-2x wd-blue"></i>
                            <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                        &nbsp;
                        {tuit.handle} &middot; {tuit.time}
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