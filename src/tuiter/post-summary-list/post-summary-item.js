import React from "react";
const PostSummaryItem = (
    {
        post = {
            "_id": 1,
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
        <li className="list-group-item">
            <div className="row">
                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-9">
                    <div className="text-secondary">{post.topic}</div>
                    <div>
                        <span className="fw-bold">{post.userName}</span>
                        <span className="fa-stack fa-2xs wd-verify-icon mb-1">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                    </span>
                        <span className="text-secondary">
                        - {post.time}
                    </span>
                    </div>
                    <div className="fw-bold">
                        {post.title}
                    </div>
                    <div className="text-secondary">
                        {post.tweets != null ? post.tweets : ""}
                    </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`} alt="post"/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;