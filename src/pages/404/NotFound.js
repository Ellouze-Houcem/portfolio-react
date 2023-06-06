import React from 'react'
import './NotFound.css'
import {FaGhost} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function NotFound() {
    return (
        <div className="not-found">
                <h1>4<span><FaGhost className='ghost'/></span>4</h1>
                <h2>Error : 404 page not found</h2>
                <p>Sorry, the page you're looking for cannot be accessed</p>
                <Link to="/"> Back to the Home Page ... </Link>
        </div>
    )
}

export default NotFound