import React from 'react';

type IngredientsProps = {
  ingredients: Array<string>
}

export default function RecipeIngredients({ ingredients }: IngredientsProps) {
  const ingredientsList = ingredients.map(ingr => 
    <li>{ingr}</li>
  );

  return (
    <div id="ingredients" className="font-sans">
    <h2 className="mb-4 text-4xl">Ingredients</h2>
    <ul className="ml-4 list-disc">
      {ingredientsList}
    </ul>
  </div>
  );
}