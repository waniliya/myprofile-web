import './Skill.css'

const Skill=()=> {
  return (
    <div className='skill'>
    <div className='container col-xxl-8 px-4 py-5'>
      <h1><i class="bi bi-gear-wide"></i> Skills </h1>
      <div className='row flex-lg-row align-items-center g-5 py-5'>
        <div className='col-10 col-sm-8 col-lg-6'>
        
            <h4>Programming Languages</h4>
            <ul>
              <li><b>Advanced: </b> HTML</li>
              <li><b>Intermediate: </b> CSS, Javascript, PHP, SQL</li>
              <li><b>Beginner: </b>Python, Java/Java EE, C/C++,</li></ul>
        </div>
        <div className='col-lg-6'>
        <h4>Software/Framework</h4>
        <ul>
              <li><b>Web/Software Development: </b> React JS, ExpressJS, Eclipse, Jupiter, Matlab, Dreamweaver</li>
              <li><b>Database: </b>Oracle, MySQL, MongoDB </li>
              <li><b>Graphic Design: </b>Adobe Premiere Pro, After Effect, CapCut, Photoshop, Canva</li>
              <li><b>Game Development: </b>Unity Game Engine, Blender3D</li>
              <li><b>CSS Frameworks:</b> Boostrap, Tailwinds</li></ul>
          </div>
          </div>
          </div>
          </div>
  )
}

export default Skill;
