import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
    {
        tuit = {
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
    const likeHandler = () => {
        const updatedTuit = {
            ...tuit,
            likes: tuit.likes + 1,
            liked: true
        }
        dispatch(updateTuitThunk(updatedTuit));
    }
    const dislikeHandler = () => {
        const updatedTuit = {
            ...tuit,
            dislikes: tuit.dislikes + 1
        }
        dispatch(updateTuitThunk(updatedTuit));
    }
    return(
        <>
            <div className="row">
                <div className="col-2">
                    <i className="fa-regular fa-comment"></i> {tuit.replies}
                </div>
                <div className="col-2">
                    <i className="fa fa-retweet"></i> {tuit.retuits}
                </div>
                <div className="col-2">
                    <i className={`fa-heart ${tuit.liked ? 'wd-red fa' : 'fa-regular'}`} onClick={likeHandler}></i> {tuit.likes}
                </div>
                <div className="col-2">
                    <i className="fa fa-thumbs-down" onClick={dislikeHandler}></i> {tuit.dislikes}
                </div>
                <div className="col-2">
                    <i className="fa fa-arrow-up-from-bracket">
                    </i>
                </div>
            </div>
        </>

    );
};
export default TuitStats;