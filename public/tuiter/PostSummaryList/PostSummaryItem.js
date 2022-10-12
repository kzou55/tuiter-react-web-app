const PostSummaryItem = (post) => {
    return(`
          <li class="list-group-item">
            <div class="row">
              <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-9">
                <div class="text-secondary">
                  ${post.topic}
                </div>
                <div>
                  <span class="fw-bold">${post.userName}</span>
                  <span class="fa-stack fa-2xs wd-verify-icon mb-1">
                                        <i class="fas fa-circle fa-stack-2x"></i>
                                        <i class="fas fa-check fa-stack-1x fa-inverse"></i>
                                    </span>
                  <span class="text-secondary">
                                       - ${post.time}
                                    </span>
                </div>
                <div class="fw-bold">
                  ${post.title}
                </div>
              </div>
              <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3">
                <img src="${post.image}" class="w-100 rounded-3">
              </div>
            </div>
          </li>
    `);
}

export default PostSummaryItem;