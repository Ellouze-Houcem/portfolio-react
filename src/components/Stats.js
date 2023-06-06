import React from 'react'
import {stats} from '../assets/data'
import parse from 'html-react-parser' //hethi bch yna7i biha <br> mil donnee
const Stats = () => {
  return (
    <>
    {stats.map(({no,title},index)=>{
      return(
        <div className="stats__box" key={index}>
          <h3 className="stats__no">{no}</h3>
          {<p className="stats__title">{parse(title)}</p>}
        </div>
      )
    })}
    </>
  )
}

export default Stats