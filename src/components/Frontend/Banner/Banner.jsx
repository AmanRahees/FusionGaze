import React from 'react'
import "./banner.css"

function Banner() {
  return (
    <div className="Banner"> {/* style={{backgroundImage: `url("")`}} */}
      <div className="content">
        <h1 className="title whitespace-normal">Extraction 2</h1>
        <div className="banner-btns">
          <button className="button">Trailer &nbsp;<i class="fa-solid fa-play text-sm"></i></button>
          <button className="button">Get Ticket</button>
        </div>
        <h1 className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis facere iusto dicta perspiciatis ullam quidem nam, eum excepturi at corporis dolorum explicabo beatae veniam quasi rerum laboriosam minus nemo nihil!</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
