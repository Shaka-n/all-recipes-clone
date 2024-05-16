import { json, LoaderFunctionArgs, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react"
import { Maybe} from "~/utils"
import { Recipe } from "~/routes/recipes.$recipe.$recipeId"

export async function loader({
  params,
}: LoaderFunctionArgs) {
  const res = await fetch(`http://127.0.0.1:5000/api/recipe/topic/${params.topic}`)
  const topic_recipes = await res.json()

  console.log(topic_recipes)
  return topic_recipes
  // return json({topic: "Breakfast", recipeTitles: [{id: 1, title: "Fluffy Microwave Scrambled Eggs"}]})
}

export default function Topic() {
  const topic_recipes = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Articles on {topic_recipes.topic}</h1>
      <ul>
        {topic_recipes.recipes.map( (recipe : Recipe) => (
          <Link key = {recipe.id} to={`/recipes/${recipe.title}/${recipe.id}`}><li>{recipe.title}</li></Link>
        ))}
      </ul>
    </div>
  )
}