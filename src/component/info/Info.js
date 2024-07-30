import './Info.css'
import profile from './../../img/profile.jpg';
import resume from './../../resume/Resume Wan Mohamad Iliya.pdf'


const Info=()=> {
  return (
   
    <div className='container col-xxl-8 px-4 py-5'>
      <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
        <div className='col-10 col-sm-8 col-lg-6'>
         <img className='d-block mx-lg-auto img-fluid'  src={profile} alt="pic" width='500' height='500'/>
        </div>
        <div className='col-lg-6'>
          <h1><span>Wan Mohamad Iliya</span> Bin Wan Rashid</h1>
          
          <div className='list-group' >
            <ul className='flex-container' >
            <li className='list-group-item ms-1 mt-1' id="post">Software Developer</li>
            <li className='list-group-item ms-1 mt-1'id="post">Web Developer</li>
            <li className='list-group-item ms-1 mt-1' id="post">Video Editor</li>
          </ul>
          <p>I am degree holder of computer science and seeking a position which related to web development, software 
            development or graphic design. 
          </p>
          <ul id="info">
          <li className='list-group-item'><b>Email Address:</b> waniliya97@gmail.com</li>
          <li className='list-group-item'><b>Address:</b> Desa Petaling, Kuala Lumpur</li>
          <li className='list-group-item'><b>Github:</b> Wan Iliya</li>
          <li className='list-group-item'><b>Linkedin:</b> Wan Mohamad Iliya</li>
        </ul>
        <p><small>Get more information via download my resume or email to me:</small> </p>
        <div class="btn-group" role="group" aria-label="Basic example">
            <a type="button" className="btn btn-outline-primary" href={resume} download="Resume Wan Mohamad Iliya.pdf"><i class="bi bi-file-earmark-arrow-down"></i> Download Resume <small>(117KB)</small></a>
            <a type="button" className="btn btn-outline-primary" href = "mailto: waniliya8@gmail.com"><i class="bi bi-envelope"></i> Contact me via email</a>
        </div>
        </div>

        </div>
      </div>
    </div>
  )
}
export default Info;
