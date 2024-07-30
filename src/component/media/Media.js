import React from 'react'
import Thumbnail from '../../img/Perkeso Video Thumbnail.jpg'
import Video from '../../video/Jingle.mp4'

const Media = () => {
  return (
    <div class="container py-5 mt-2">
        <h1 className='text-center'><i class="bi bi-film"></i> Media Project </h1>
        <div class="row g-0 text-center mt-2">
        <div class="col-sm-6 col-md-8">
        <video width="750" height="500" controls >
                <source src={Video} type="video/mp4" thumbnail={Thumbnail}/>
            </video>
        </div>
        <div class="col-6 col-md-4">
            <h2>PERKESO - Prihatin Selamanya Jingle Video</h2>
            <p>Main purpose this video made is to participate 5 Decades SOCSO Celebration Contest. Congratulation to all staff of SOSCO for their 
                5 decades anniversary. Credit: All scenes in this video taken from SOCSO's media team.</p>
            <p>This video edited by using: Adobe Premiere Pro, Adobe After Effect and Audacity.</p>
            </div>
        </div>
    </div>
  )
}

export default Media