import React from 'react';

type Props = {
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  totalTimeMinutes: number;
  servings: number;
  yields: string;
}

const RecipeDetails: React.FC<Props> = 
   ({prepTimeMinutes, cookTimeMinutes, totalTimeMinutes, servings, yields}) => {
  return (
    <div className="border-2 rounded-md border-gray-300 border-t-8 border-t-orange-400">
  <div className="grid grid-cols-3 grid-rows-2">
  <div className="p-4">
    <div className="font-bold">Prep Time:</div>
    <div className="">{prepTimeMinutes} mins</div>
  </div>
  <div className="p-4">
    <div className="font-bold">Cook Time:</div>
    <div className="">{cookTimeMinutes} mins</div>
  </div>
  <div className="p-4">
    <div className="font-bold">Total Time:</div>
    <div className="">{totalTimeMinutes} mins</div>
  </div>
  <div className="p-4">
    <div className="font-bold">Servings:</div>
    <div className="">{servings}</div>
  </div>
  <div className="p-4">
    <div className="font-bold">Yield:</div>
    <div className="">{yields}</div>
  </div>
  </div>
  <hr/>
  <div className="p-7 text-center"><a href="" className="font-light underline">Jump to Nutrition Facts</a>
  </div>
  </div>);
}

export default RecipeDetails