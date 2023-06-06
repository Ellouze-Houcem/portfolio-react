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
            <span >I'm Ellouze Mohamed Houcem.</span> Web Developer
          </h1>

          <p className="home__description">
          Currently a student in the second year of the computer engineering 
          cycle at National School of Computer Science with a specialty in 
          embedded software systems.
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