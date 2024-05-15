import { useState, useEffect } from 'react';
import { json, LoaderFunctionArgs, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react"
import RecipeIntro from './RecipeIntro'
import RecipeDetails from './RecipeDetails'
import RecipeIngredients from './RecipeIngredients'
import RecipeDirections from './RecipeDirections'
import RecipeNutritionFacts from './RecipeNutritionFacts'

type Figure = {
  src: string,
  attr: string
}

type Step = {
  text: string,
  images: Array<Figure>,
}


interface Recipe {
  title: string;
  summary: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  totalTimeMinutes: number;
  servings: number;
  yields: string;
  ingredients: Array<string>;
  directions: Array<Step>;
  // TOOD: move nutrition facts into parameters
}

interface RecipeState {
  recipe: Recipe | null;
  loading: boolean;
  // error: string | null;
}

export async function loader(params: LoaderFunctionArgs) {
  const res = await fetch("http://127.0.0.1:5000/api/recipe/0")
  const recipes = await res.json()
  return recipes
}

export default function Recipe(){
  const recipe = useLoaderData<typeof loader>()
  return(
    <div>
      <RecipeIntro title={recipe.title} summary={recipe.summary} />
      <RecipeDetails prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} totalTimeMinutes={recipe.totalTimeMinutes} servings={recipe.servings} yields={recipe.yields}/>
      <RecipeIngredients ingredients={recipe.ingredients}/>
      <RecipeDirections steps={recipe.directions}/>
      <RecipeNutritionFacts/>
    </div>
  )
}