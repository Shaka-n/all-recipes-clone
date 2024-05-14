import React from 'react';

type Figure = {
  src: string,
  attr: string
}

type Step = {
  text: string,
  images: Array<Figure>,
}
// TODO: Would be nice to implement Maybe here

type DirectionsProps ={
  steps: Array<Step>
}

export default function RecipeDirections({steps}:DirectionsProps) {

  const directions = steps.map(step =>{
    const images = step.images.map(img =>
      <figure>
        <img src={ img.src }/>
        <figcaption>{img.attr}</figcaption>
      </figure>
    )

    return(
      <li>
        <p>{step.text}</p>
        {images}
      </li>
    )
  })

  return(
    <div id="directions" className="">
    <h2 className="mb-4 text-4xl">Directions</h2>
    <ol className="stepList list-none">
      {directions}
    </ol>
  </div>
  )
}
