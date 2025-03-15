import React from 'react'
import './HomeComponent.css';
const HomeComponent = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-lg sticky-top">
        <div className="container-fluid">
            <a className="navbar-brand" href='#'>Harish Ragavendra S</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto gap-4">
                  <li className="nav-item-center text-center">
                    <a className="nav-link active" aria-current="page" href="#">Resume</a>
                  </li>

                  <li className="nav-item-center border-start ps-3 text-center">
                    <a className="nav-link active" aria-current="page" href="#">Project</a>
                  </li>

                  <li className="nav-item-center border-start ps-3 text-center">
                    <a className="nav-link active" aria-current="page" href="#">Contact</a>
                  </li>
              </ul>
            </div>
        </div>
      </nav>

      <div className="container">
        <div className="image-container">
          <img id="my_image" src="src/assets/image_2.png" alt="profile" />
        </div>
        <div className="text-container">
          <h1>Hello</h1>
          <h3>A Bit About Me</h3>
          <p>
            I'm a developer passionate about creating amazing experiences. I work with AI, ML, and full-stack technologies.
          </p>
          <div className="buttons">
            <button className="resume">Resume</button>
            <button className="projects">Projects</button>
            <button className="contact">Contact</button>
          </div>
        </div>
      </div>

      

    </>

    
  )
}

export default HomeComponent;
