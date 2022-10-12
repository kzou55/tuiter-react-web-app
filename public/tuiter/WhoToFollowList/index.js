import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
           <ul class="list-group">  
                <li class="list-group-item">
                    <div class="row">
                        <div class="col fw-bold">Who to follow</div>
                    </div>
                </li>
                ${who.map(WhoToFollowListItem).join('')}
           </ul>
    `);
}

export default WhoToFollowList;