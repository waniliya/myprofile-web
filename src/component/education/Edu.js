import './Edu.css'


const Edu=()=> {
  return (   
   
    <div className='container col-xxl-8 px-4 py-5'>
      <h1><i class="bi bi-mortarboard"></i> Education </h1>
      <div className='row flex-lg-row align-items-center g-5 py-5'>
        <div className='col-lg-6'>
        <ul>
            <li><h4>Bachelor of Computer Science (Hons.)</h4>
              <h4>Universiti Teknologi Mara Jasin Campus, Malacca</h4>
              <p>September 2018 - February 2021</p>
              <p><b>Coursework: </b>Artificial Intelligence Algorithms, Database Engineering, 
                Principles of Operating Systems, Data Structures, Software Engineering, 
                Dynamic Web Application Development, Enterprise Programming, Algorithm Analysis and Design, 
                Image Processing, Computer Security and Game Design and Development.</p></li>
          </ul>
        </div>
        <div className='col-lg-6'>
          <ul>
           <li>
            <h4>Diploma in Computer Science</h4>
            <h4>Universiti Teknologi Mara Kuala Terengganu Campus, Terengganu</h4>
            <p>June 2015 - May 2018</p>
            <p><b>Coursework: </b>Object-Oriented Programming, Database Design and Development, 
            Introduction of Data Communication and Networking, Visual Programming, Web Application Development, 
            Information System Development, Introduction of Database Management System and Computer Organization.</p>
           </li>
          </ul>
          </div>
          <div className='row flex-lg-row align-items-center g-5 py-1'>
          <h1><i class="bi bi-patch-check"></i> Certificates</h1>
          <ul>
          <li className='list-group-item'><b>HRD Corp e-LATiH:</b> Beginning React  <i class="bi bi-caret-right-fill"></i> 2022</li>
          <li className='list-group-item'><b>MDEC-Intel Ai Academy:</b> Deep Learning <i class="bi bi-caret-right-fill"></i> 2019</li>
        </ul>
        </div>

        </div>
        </div>
  
  )
}

export default Edu;