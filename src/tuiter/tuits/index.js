import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./TuitItem";
import {findTuitsThunk} from "../../services/tuits-thunks";


const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {dispatch(findTuitsThunk())}, [])

    return(
        <ul className="list-group">
            {console.log(tuits)}
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit =>
                    <TuitItem key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    );
};
export default TuitsList;