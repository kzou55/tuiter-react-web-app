const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i>
     </a>
     <a href="#" class="list-group-item">
          <div class="row">
            <div class="col-2"><i class="fa fa-house"></i></div>
            <div class="col-10 d-none d-xl-block ps-2">Home</div>
          </div>
     </a>
     <a href="#" class="list-group-item active">
          <div class="row">
            <div class="col-2"><i class="fa fa-hashtag"></i></div>
            <div class="col-10 d-none d-xl-block ps-2">Explore</div>
          </div>
        </a>
        <a href="#" class="list-group-item">
          <div class="row">
            <div class="col-2"><i class="fa fa-bell"></i></div>
            <div class="col-10 d-none d-xl-block ps-2">Notification</div>
          </div>
        </a>
        <a href="#" class="list-group-item">
          <div class="row">
            <div class="col-2"><i class="fa fa-envelope"></i></div>
            <div class="col-10 d-none d-xl-block ps-2">Messages</div>
          </div>
        </a>
        <a href="#" class="list-group-item">
          <div class="row">
            <div class="col-2"><i class="fa fa-bookmark"></i></div>
            <div class="col-10 d-none d-xl-block ps-2">Bookmarks</div>
          </div>
        </a>
        <a href="#" class="list-group-item">
          <div class="row">
            <div class="col-2"><i class="fa fa-list"></i></div>
            <div class="col-10 d-none d-xl-block ps-2">Lists</div>
          </div>
        </a>
        <a href="#" class="list-group-item">
          <div class="row">
            <div class="col-2"><i class="fa fa-user"></i></div>
            <div class="col-10 d-none d-xl-block ps-2">Profile</div>
          </div>
        </a>
        <a href="#" class="list-group-item">
          <div class="row">
            <div class="col-2">
                <span class="fa-stack fa-2xs">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fas fa-ellipsis fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div class="col-10 d-none d-xl-block">More</div>
          </div>
        </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}

export default NavigationSidebar;

