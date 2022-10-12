import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
           <div class="row me-auto">
               <div class="col-11 position-relative">
                   <input placeholder="Search Tuiter" class="form-control rounded-pill ps-5"/>
                   <span class="position-absolute top-0 mt-2 ms-3"><i class="fa fa fa-magnifying-glass"></i></span>
               </div>
               <div class="col-1 pe-0">
                   <i class="fa-solid fa-gear fa-2x text-primary pt-1 pb-1 float-end"></i>
               </div>
           </div>
           <ul class="nav nav-tabs mt-2"> <!-- double check this line -->
             <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
             </li>
             <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
             </li>
             <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
             </li>
             <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
             </li>
             <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
             </li>
           </ul>
           <div class="position-relative mt-2 mb-2">
             <img src="../../images/spacexstarship.png" class="w-100">
             <h1 class="position-absolute start-0 bottom-0 text-white">SpaceX's Starship</h1>
           </div>
           ${PostSummaryList()}
    `);
}

export default ExploreComponent;
