
import { useParams } from "react-router-dom";
import { type ViewIdeaRouteParams } from "../../lib/routes";


//import css from './index.module.scss'


export const ViewIdeaPage = ()=>{
const {ideaNick} = useParams() as ViewIdeaRouteParams

    return(
        <div>
            <h1>{ideaNick}</h1>
            <p>Description of idea 1 ...</p>
            <div>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    )
}