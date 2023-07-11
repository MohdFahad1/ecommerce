import React, { useState } from 'react'

const MyImage = ({imgs = [{url: ""}]}) => {

  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <div className="flex md:flex-row justify-center items-center gap-5 flex-col">
    <div className="flex md:flex-col flex-row">
      {imgs.map((currElem, index) => {
        return (
          <figure>
            <img src={currElem.url} alt={currElem.filename} key={index} className="h-[100px] w-[160px] mt-3 cursor-pointer" onClick={() => setMainImage(currElem)}/>
          </figure>
        )
      })}
      </div>

      <div>
        <img src={mainImage.url} alt={mainImage.filename} className="h-[200px] w-[350px]"/>
      </div>
    </div>
  )
}

export default MyImage