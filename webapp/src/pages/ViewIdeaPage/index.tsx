
import { useParams } from "react-router-dom";
import { Segment } from '../../components/Segment'
import { type ViewIdeaRouteParams } from "../../lib/routes";
import { trpc } from '../../lib/trpc'

import css from './index.module.scss'


export const ViewIdeaPage = ()=>{
const {ideaNick} = useParams() as ViewIdeaRouteParams

const { data, error, isLoading, isFetching, isError } = trpc.getIdea.useQuery({
    ideaNick,
  })

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  if (!data || !data.idea) {
    return <span>Idea not found</span>;
  }

    return(
        <Segment title={data.idea.name} description={data.idea.description}>
            <h1 className={css.title}>{data.idea.name}</h1>
            <p className={css.description}>{data.idea.description}</p>
            <div className={css.text} dangerouslySetInnerHTML={{ __html: data.idea.text }} >
            </div>
        </Segment>
    )
}