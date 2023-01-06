import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerGlobal } from '../store/slices/trainer.slice'
import './styles/home.css'

const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSumit = e => {
    e.preventDefault()
    dispatch(setTrainerGlobal(e.target.name.value.trim()))
    e.target.name.value = ''
    navigate('/pokedex')
  }

  return (
    <div className='article__home'>
      <img src="/Home/pokedex.png" alt="" />
           
      <h1>Hi Trainer!</h1>
      <p>Give me your name to start</p>
      <form onSubmit={handleSumit} className='form__home' >
        <input id='name' type="text" placeholder='tu nombre...' />
        <button>Start</button>
      </form>
      
      <footer className='footer Principal'>
        <div className='line__red' ></div>
        <div className='line__black' >
          <div className="circle__write">
            <div className="circle__gray"></div>
          </div>
        </div>
      </footer>

    </div >
  )
}

export default Home