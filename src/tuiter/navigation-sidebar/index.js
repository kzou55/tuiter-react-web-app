import React from "react";
import '@fortawesome/fontawesome-free/css/all.css'

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div>
            <div className="list-group">
                <a href="#" className="list-group-item">
                    <div className="row">
                        <div className="col-2"><i className="fab fa-twitter"></i></div>
                        <div className="col-10 d-none d-xl-block ps-2">Tuiter</div>
                    </div>
                </a>
                <a href="#" className={`list-group-item ${active === 'home'?'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="fa fa-house"></i></div>
                        <div className="col-10 d-none d-xl-block ps-2">Home</div>
                    </div>
                </a>
                <a href="#" className={`list-group-item ${active === 'explore'?'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="fa fa-hashtag"></i></div>
                        <div className="col-10 d-none d-xl-block ps-2">Explore</div>
                    </div>
                </a>
                <a href="#" className={`list-group-item ${active === 'notifications'?'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="fa fa-bell"></i></div>
                        <div className="col-10 d-none d-xl-block ps-2">Notifications</div>
                    </div>
                </a>
                <a href="#" className={`list-group-item ${active === 'messages'?'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="fa fa-envelope"></i></div>
                        <div className="col-10 d-none d-xl-block ps-2">Messages</div>
                    </div>
                </a>
                <a href="#" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="fa fa-bookmark"></i></div>
                        <div className="col-10 d-none d-xl-block ps-2">Bookmarks</div>
                    </div>
                </a>
                <a href="#" className={`list-group-item ${active === 'lists'?'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="fa fa-list"></i></div>
                        <div className="col-10 d-none d-xl-block ps-2">Lists</div>
                    </div>
                </a>
                <a href="#" className={`list-group-item ${active === 'profile'?'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="fa fa-user"></i></div>
                        <div className="col-10 d-none d-xl-block ps-2">Profile</div>
                    </div>
                </a>
                <a href="#" className={`list-group-item ${active === 'more'?'active':''}`}>
                    <div className="row">
                        <div className="col-2">
                            <span className="fa-stack fa-2xs">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-ellipsis fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                        <div className="col-10 d-none d-xl-block ps-2">More</div>
                    </div>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="#" className="btn btn-primary btn-block rounded-pill">
                    Tuit
                </a>
            </div>
        </div>
    );
};

export default NavigationSidebar;