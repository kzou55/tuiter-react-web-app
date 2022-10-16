import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={`/images/${who.avatarIcon}`} className="rounded-circle" width="48px" height="48px"/>
                </div>
                <div className="col-7 pe-0">
                    <div className="fw-bold">{who.userName}
                        <span className="fa-stack fa-2x wd-verify-icon mb-1">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fas fa-check fa-stack-1x"></i>
                                </span>
                    </div>
                    @{who.handle}
                </div>
                <div className="col-3 mt-auto mb-auto ps-0">
                    <button className="btn btn-primary rounded-pill ms-auto">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;