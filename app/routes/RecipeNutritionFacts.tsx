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
        <h3>Nutrition Facts</h3>
        <p> Servings Per Recipe: </p>
        <p> Calories: </p>
          <table className="my-8 py-4">
            <tbody>
              <tr>
                <th></th>
                <th>Daily Value %</th>
              </tr>
              <tr><td className='pl-4'>Total Fat:</td> </tr>
              <tr><td>Saturated Fat: </td> </tr>
              <tr><td>Cholesterol: </td> </tr>
              <tr><td>Sodium: </td> </tr>
              <tr><td>Total Carbohydrates: </td> </tr>
              <tr><td>Total Sugars: </td> </tr>
              <tr><td>Protein: </td> </tr>
              <tr><td>Vitamin C: </td> </tr>
              <tr><td>Calcium: </td> </tr>
              <tr><td>Iron: </td> </tr>
              <tr><td>Potassium: </td> </tr>
            </tbody>
          </table>
          <div className="font-light"> 
            <p>* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.</p>
            <p>** Nutrient information is not available for all ingredients. Amount is based on available nutrient data.</p>
            <p>(-) Information is not currently available for this nutrient. If you are following a medically restrictive diet, please consult your doctor or registered dietitian before preparing this recipe for personal consumption.</p>
            <br></br>
            <p className="font-normal">Powered by the ESHA Research Database © 2018, <a href='https://www.esha.com/'>ESHA Research</a>, Inc. All Rights Reserved</p>
          </div>
         </details>
    </div>
  </div>
  )
}
