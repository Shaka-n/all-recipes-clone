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
      <li>
        <p>Gather all ingredients</p>
        <figure>
          <img src="https://www.allrecipes.com/thmb/8Sh854Yx4Ys7CMeSg_1dMTjXvBM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/272293-Fluffy-Microwave-Scrambled-Eggs-mfs-STEP-001-f333435c6f174a54877c8d6cf228b2ac.jpg" />
          <figcaption>DOTDASH MEREDITH FOOD STUDIOS</figcaption>
        </figure>
      </li>
      <li>
        <p>Break the eggs into a microwave-proof mixing bowl. Add milk and salt; mix well.</p>
        <figure>
          <img src="https://www.allrecipes.com/thmb/BqQp0DjsNBGMTlrS9Xr-tBiQw8c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/272293-Fluffy-Microwave-Scrambled-Eggs-mfs-STEP-002-e26696f3233d49fe926295cca75ca622.jpg" />
        </figure>
        <figure>
          <img src="https://www.allrecipes.com/thmb/hNxjOkQpAGYPJ_R9pVAY73_oxMA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/272293-Fluffy-Microwave-Scrambled-Eggs-mfs-STEP-005-a1e93fa280a34a4ea889c49ec0c9ca8c.jpg" />
          <figcaption>DOTDASH MEREDITH FOOD STUDIOS</figcaption>
        </figure>
      </li>
      <li>
        <p>Pop the bowl into the microwave and cook on high power for 30 seconds. Remove bowl, beat eggs very well, scraping down the sides of the bowl, and return to the microwave for another 30 seconds.</p>
        <figure>
          <img src="https://www.allrecipes.com/thmb/on7SGvPEsm2UM5fdqamhM9ew3vU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/272293-Fluffy-Microwave-Scrambled-Eggs-mfs-STEP-008-f128d77189c247b796f830c3f654ac3d.jpg"/>
          <figcaption>DOTDASH MEREDITH FOOD STUDIOS</figcaption>
        </figure>
      </li>
      <li>
        <p>Repeat this pattern, stirring every 30 seconds for up to 2 1/2 minutes. Stop when eggs have the consistency you desire.</p>
        <figure>
          <img src="https://www.allrecipes.com/thmb/Uwlt0kG5vTF1zPCaTdL17iEFusw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/272293-Fluffy-Microwave-Scrambled-Eggs-mfs-STEP-009-bce2d1a412a5447bbe4389aa2e06d47d.jpg"/>
          <figcaption>DOTDASH MEREDITH FOOD STUDIOS</figcaption>
        </figure>
      </li>
      <li>
        <p>Serve warm and enjoy!</p>
        <figure>
          <img src="https://www.allrecipes.com/thmb/yudk4f7IAgziXptYH8Smu80zwwA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/272293-fluffy-microwave-scrambled-eggs-DDMFS-4x3-5b0c4f0fc5b4464e8ba1d1886667631e.jpg"/>
        <figcaption>DOTDASH MEREDITH FOOD STUDIOS</figcaption>
        </figure>
      </li>
    </ol>
  </div>
  )
}