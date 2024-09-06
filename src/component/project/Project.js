import './Project.css'
import calculator from './../../img/calculatorapp.png';
import todo from './../../img/todo.png';
import ecommerce from './../../img/ecommerce.jpg';
import expense from './../../img/expensesapp.jpg';

const Project=()=> {
  return (
    <div className='album py-5 '>
      <div className='container'>
      <h1 className='text-center'><i class="bi bi-window-stack"></i> Project </h1>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md g-3 mt-2'>
          <div className='col'>
            <div className='card shadow-sm'>
              <img className='bd-placeholder-img card-img-top' width="100%" height="225"  preserveAspectRatio='xMidYMid slice'
              focusable="false" src={calculator} alt="imageprj1" id="projectimage"></img>
              <div className="card-body">
                <p className='card-text'>Project 1: Simple Calculator App </p>
                <p> Stack: React JS</p>
                <a type="button" className="btn btn-outline-primary" href="https://github.com/waniliya"><i class="bi bi-github"></i> Github</a>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card shadow-sm'>
              <img className='bd-placeholder-img card-img-top' width="100%" height="225"  preserveAspectRatio='xMidYMid slice'
              focusable="false" src={todo} alt="imageprj2" id="projectimage"></img>
              <div className="card-body">
                <p className='card-text'>Project 2: Simple TODO App</p>
                <p> Stack: React JS</p>
                <a type="button" className="btn btn-outline-primary" href="https://github.com/waniliya"><i class="bi bi-github"></i> Github</a>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card shadow-sm'>
              <img className='bd-placeholder-img card-img-top' width="100%" height="225"  preserveAspectRatio='xMidYMid slice'
              focusable="false" src={expense} alt="imagepej3" id="projectimage"></img>
              <div className="card-body">
                <p className='card-text'>Project 3: Atlas Expenses Tracker App </p>
                <p> Atlas Expenses Tracker App is a tool to manage and monitor our expenditure. This app has authentication feature.
                Therefore, new users need to register new account first. 
                  
                </p>
                <p> Stack: React JS, ExpressJS, NodeJS, JWT and MySQL</p>
                <a type="button" className="btn btn-outline-primary" href="https://github.com/waniliya"><i class="bi bi-github"></i> Github</a>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card shadow-sm'>
              <img className='bd-placeholder-img card-img-top placeholder-glow' width="100%" height="225" preserveAspectRatio='xMidYMid slice'
              focusable="false" src={ecommerce} alt="imagepej4" id="projectimage"></img>
              <div className="card-body">
                <p className='card-text'>Project 4: E-commerce Web + Admin Panel </p>
                <p> E-commerce web for a company sells the products to their customers. This project contains admin panel to manage product, client for customers buy the products and backend 
                part.
                </p>
                <p> Stack: React JS, ExpressJS, NodeJS, JWT and Mongodb</p>
                <a type="button" className="btn btn-outline-primary disabled" href="https://github.com/waniliya" ><i class="bi bi-github"></i> Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
