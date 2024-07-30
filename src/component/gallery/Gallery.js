import React from 'react'
import "./Gallery.css"
import newyear from "../../img/newyearposter.jpg";
import awalmuharram from "../../img/awalmuharram.jpg";


const Gallery = () => {
  return (
    <div className="container py-5 mt-4">
     <h1 className='text-center'><i class="bi bi-images"></i> Gallery </h1>
     <div id="carouselExampleAutoplaying" class="carousel slide mt-3" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={newyear} class="d-block w-50" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={awalmuharram} class="d-block w-50" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon btn btn-dark" id="carousel" aria-hidden="true"></span>
    <span class="visually-hidden" >Previous</span>
  </button>
  <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon btn btn-dark" id="carousel" aria-hidden="true"></span>
    <span class="visually-hidden" >Next</span>
  </button>
</div>
    </div>
  )
}

export default Gallery