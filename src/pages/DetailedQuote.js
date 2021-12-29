import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

export const DetailedQuote = (params) => {

    const { id } = useParams();

    return (
        <div>
            <h1>detailed</h1>
            <p>{id}</p>
            <Route path={`/quotes/${id}/comments`}>
                <Comments />
            </Route>
        </div>
    )
}

export default DetailedQuote;