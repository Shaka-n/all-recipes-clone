import React from 'react';

type Props = {
  title: string;
  summary: string;
}

const RecipeIntro: React.FC<Props> = ({title, summary}) => {
  return (
    <div>
      <div className="text-4xl font-bold mb-4">{title}</div>
      <div className="font-light">{summary}</div>
  </div>)
}

export default RecipeIntro
