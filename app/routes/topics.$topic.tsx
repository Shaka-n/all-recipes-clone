import { json, LoaderFunctionArgs, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react"
import { Maybe} from "~/utils"

export async function loader({
  params,
}: LoaderFunctionArgs) {
  // const res = await fetch()
  // const recipes = await res.text()
  // return getRecipesByTopic( Maybe.withDefault('', params.topic));
  return json({topic: "Breakfast", recipeTitles: [{id: 1, title: "Fluffy Microwave Scrambled Eggs"}]})
}

export default function Topic() {
  const topic = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Articles on {topic.topic}</h1>
      <ul>
        {topic.recipeTitles.map( recipe => (
          <Link key = {recipe.id} to={`/recipes/${recipe.title.toLowerCase()}`}><li >{recipe.title}</li></Link>
        ))}
      </ul>
    </div>
  )
}