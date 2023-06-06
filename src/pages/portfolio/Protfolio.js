import React from 'react'
import {portfolio} from '../../assets/data'
import PortfolioItem from '../../components/PortfolioItem'
import './Portfolio.css'
import Loading from '../home/loading'

const Protfolio = () => {
  const {isPending} = Loading();
  return (
    <section className="portfolio section">
      {isPending && <div className='loader'></div>}
      <h2 className="section__title">My <span>Projects</span></h2>

      <div className="portfolio__container container grid">
        {portfolio.map((item)=>{
          return <PortfolioItem key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default Protfolio