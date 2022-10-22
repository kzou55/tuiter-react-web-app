const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
          <div class="row">
            <div class="col-2">
              <img src="../../images/${who.avatarIcon}" class="rounded-circle" width="48px" height="48px">
            </div>
            <div class="col-7 pe-0">
              <div class="fw-bold">${who.userName}
                <span class="fa-stack fa-2x wd-verify-icon mb-1">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fas fa-check fa-stack-1x"></i>
                                </span>
              </div>
              @${who.handle}
            </div>
            <div class="col-3 mt-auto mb-auto ps-0 wd-nudge-left">
              <button class="btn btn-primary rounded-pill ms-auto">Follow</button>
            </div>
          </div>
        </li>
    `)
}

export default WhoToFollowListItem;

