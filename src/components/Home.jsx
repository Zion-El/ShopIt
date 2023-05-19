import React from 'react'
import BackImg from '../assets/images/bg.jpeg'
import Products from './Products'

const Home = () => {
  return (
    <div className='hero'>
        <div class="card bg-dark text-white border-0">
            <img src={BackImg} class="card-img" alt="card img" height='550px'/>
            <div class="card-img-overlay d-flex flex-column justify-content-center">
                <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
            </div>
        </div>
        <Products/>
    </div>
  )
}

export default Home