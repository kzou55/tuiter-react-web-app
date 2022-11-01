import React from "react";

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
    return(
        <>
            <div className="row">
                <div className="col-3">
                    <i className="fa-regular fa-comment"></i> {tuit.replies}
                </div>
                <div className="col-3">
                    <i className="fa fa-retweet"></i> {tuit.retuits}
                </div>
                <div className="col-3">
                    <i className={`fa-heart ${tuit.liked ? 'wd-red fa' : 'fa-regular'}`}></i> {tuit.likes}
                </div>
                <div className="col-3">
                    <i className="fa fa-arrow-up-from-bracket">
                    </i>
                </div>
            </div>
        </>

    );
};
export default TuitStats;