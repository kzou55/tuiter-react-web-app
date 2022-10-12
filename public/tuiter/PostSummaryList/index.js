import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
            <div>
                <ul class="list-group">
                   ${posts.map(PostSummaryItem).join('')}
                </ul>
            </div>
    `)
}

export default PostSummaryList;