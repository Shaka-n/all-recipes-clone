import React from 'react';

export default function RecipeNutritionFacts(){
  return (
    <div className="nutrition-facts">
      <div className="nutrition-facts__summary">
      <h2 className="text-4xl mb-4">Nutrition Facts <span className="text-sm font-light">(per serving)</span></h2>
      <table >
        <tbody>
          <tr>
            <td>141</td>
            <td>Calories</td>
          </tr>
          <tr>
            <td>9g</td>
            <td>Fat</td>
          </tr>
          <tr>
            <td>2g</td>
            <td>Carbs</td>
          </tr>
          <tr>
            <td>12g</td>
            <td>Protein</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="nutrition-facts__details">
      <details>
        <summary>Show Full Nutrition Label</summary>
        
        </details>
    </div>
  </div>
  )
}