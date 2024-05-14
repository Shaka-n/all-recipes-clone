import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from 'react';

import RecipeIntro from './RecipeIntro'
import RecipeDetails from './RecipeDetails'
import RecipeIngredients from './RecipeIngredients'
import RecipeDirections from './RecipeDirections'
import RecipeNutritionFacts from './RecipeNutritionFacts'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// TODO: move these to shared module
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
  yieldServings: number;
  ingredients: Array<string>;
  directions: Array<Step>;
}

interface RecipeState {
  recipe: Recipe | null;
  loading: boolean;
  // error: string | null;
}

const directions: Array<Step> = [
  {text: "Gather all ingredients", 
  images: [{
    src: "https://www.allrecipes.com/thmb/8Sh854Yx4Ys7CMeSg_1dMTjXvBM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/272293-Fluffy-Microwave-Scrambled-Eggs-mfs-STEP-001-f333435c6f174a54877c8d6cf228b2ac.jpg",
    attr: "DOTDASH MEREDITH FOOD STUDIOS"}]
  },
  {text: "Break the eggs into a microwave-proof mixing bowl. Add milk and salt; mix well.", 
  images: [
    {src: "https://www.allrecipes.com/thmb/BqQp0DjsNBGMTlrS9Xr-tBiQw8c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/272293-Fluffy-Microwave-Scrambled-Eggs-mfs-STEP-002-e26696f3233d49fe926295cca75ca622.jpg",
    attr: ""}, 
    {src: "https://www.allrecipes.com/thmb/hNxjOkQpAGYPJ_R9pVAY73_oxMA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/272293-Fluffy-Microwave-Scrambled-Eggs-mfs-STEP-005-a1e93fa280a34a4ea889c49ec0c9ca8c.jpg", 
    attr: "DOTDASH MEREDITH FOOD STUDIOS"}]
  },
  {text: "Pop the bowl into the microwave and cook on high power for 30 seconds. Remove bowl, beat eggs very well, scraping down the sides of the bowl, and return to the microwave for another 30 seconds.", 
  images: [{
    src: "https://www.allrecipes.com/thmb/4i4yJ8SYqVhxcGTof7HVdWzhw-M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/272293-Fluffy-Microwave-Scrambled-Eggs-mfs-STEP-008-f128d77189c247b796f830c3f654ac3d.jpg",
    attr: "DOTDASH MEREDITH FOOD STUDIOS"}]
  },
  {text: "Repeat this pattern, stirring every 30 seconds for up to 2 1/2 minutes. Stop when eggs have the consistency you desire.", 
  images: [{
    src: "https://www.allrecipes.com/thmb/Zap-2MYfJ4bTvPAJDHmcwbpUKCU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/272293-Fluffy-Microwave-Scrambled-Eggs-mfs-STEP-009-bce2d1a412a5447bbe4389aa2e06d47d.jpg",
    attr: "DOTDASH MEREDITH FOOD STUDIOS"}]
  },
  {text: "Serve warm and enjoy!", 
  images: [{
    src: "https://www.allrecipes.com/thmb/Kx1T75MDHIeMkr2BF5DZ8LEKrmM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/272293-fluffy-microwave-scrambled-eggs-DDMFS-4x3-5b0c4f0fc5b4464e8ba1d1886667631e.jpg",
    attr: "DOTDASH MEREDITH FOOD STUDIOS"}]
  }]

const recipe1: Recipe = {
  title: "Fluffy Microwave Scrambled Eggs",
  summary: "Use your microwave to make light and fluffy scrambled eggs for a quick and easy breakfast to start your day. Follow the technique in this recipe for perfect results every time.",
  prepTimeMinutes: 4,
  cookTimeMinutes: 5,
  totalTimeMinutes: 10,
  servings: 2,
  yieldServings: 3,
  ingredients: ["4 eggs", "1/4 milk", "1/8 teaspoon salt"],
  directions: directions,
}

export default function Index() {
  const [state, setState] = useState<RecipeState>({
    recipe: null,
    loading: true,
  })
  useEffect(() => {
    const fetchRecipe = async () => {
      setState({recipe: recipe1, loading: false})
    }

    fetchRecipe();
  }, [])

  if(state.loading) {
    return (<div>Loading...</div>);
  } 

  let recipe = state.recipe;

  if(recipe == null) {
    return (<div>No recipe...</div>)
  } else {
    return (
      <div id="body" className=" max-w-2xl p-8 ml-10 flex flex-col space-y-4">
            <RecipeIntro title={recipe.title} summary={recipe.summary} />
            <RecipeDetails prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} totalTimeMinutes={recipe.totalTimeMinutes} servings={recipe.servings} yieldServings={recipe.yieldServings}/>
            <RecipeIngredients ingredients={recipe.ingredients}/>
            <RecipeDirections steps={recipe.directions}/>
            <RecipeNutritionFacts/>
          </div>
    );
  }
}

