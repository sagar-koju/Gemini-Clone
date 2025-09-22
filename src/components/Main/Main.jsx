import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className='main-container'>

        {!showResult
          ?<>
            <div className="greet">
              <p><span>Hello, Sagar</span></p>
              <p>How can i help you today?</p>
            </div>
            <div className='cards'>
              <div className="card">
                <p>Suggest beautiful places to visit on upcomming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Explain quantum computing in simple terms</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm the team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
          :<div className="result">
            <div className="result-title">
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
              ?<div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
              :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }

            </div>
            </div>
        }

        <div className="main-bottom">
          <div className="search-box">
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Ask Gemini" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
            {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>

      </div>
    </div>
  )
}

export default Main
