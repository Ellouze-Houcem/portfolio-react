import React from 'react'
import './Home.css'
import Profile from "../../assets/me.png"
import { Link } from 'react-router-dom'
import { FaArrowRight } from './../../../node_modules/react-icons/fa/index.esm';
import Loading from './loading'
const Home = () => {
  const {isPending} = Loading();
  return (
    <section className="home section grid">
      {isPending && <div className='loader'></div>}
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span >I'm Ellouze Mohamed Houcem.</span> Computer science student
          </h1>

          <p className="home__description">
          Currently a third year student in the computer engineering cycle at the National School of Computer Sciences (ENSI), with a specialization in embedded software systems, I am also enrolled in a research master's degree in intelligent systems at ENSI
          </p>

          <Link to='/about' className='button' >
            More About Me <span className='button__icon'>
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default Home