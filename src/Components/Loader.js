import React from 'react'

export default function Loader() {

    return (
    <>
    <style>
    {`
    .loader {
        width: 160px;
        height: 100px;
        position: relative;
      }
      
      .loader-text {
        position: absolute;
        top: 0;
        padding: 0;
        margin: 0;
        color: #fff;
        animation: text_713 3.5s ease both infinite;
        font-size: 2.0rem;      
        letter-spacing: 1px;
      }
      
      .load {
        background-color: #FF0000;
        border-radius: 100px;   
        display: block;
        height: 32px;          
        width: 32px;           
        bottom: 0;
        position: absolute;
        transform: translateX(128px);  
        animation: loading_713 3.5s
      }
      
      .load::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-color: #FF4A4A;
        border-radius: inherit;
        animation: loading2_713 3.5s ease both infinite;
      }
      
      @keyframes text_713 {
        0% {
          letter-spacing: 1px;
          transform: translateX(0px);
        }
      
        40% {
          letter-spacing: 2px;
          transform: translateX(26px);
        }
      
        80% {
          letter-spacing: 1px;
          transform: translateX(32px);
        }
      
        90% {
          letter-spacing: 2px;
          transform: translateX(0px);
        }
      
        100% {
          letter-spacing: 1px;
          transform: translateX(0px);
        }
      }
      
      @keyframes loading_713 {
        0% {
          width: 16px;
          transform: translateX(0px);
        }
      
        40% {
          width: 100%;
          transform: translateX(0px);
        }
      
        80% {
          width: 16px;
          transform: translateX(64px);
        }
      
        90% {
          width: 100%;
          transform: translateX(0px);
        }
      
        100% {
          width: 16px;
          transform: translateX(0px);
        }
      }

      @keyframes loading2_713 {
        0% {
          transform: translateX(0px);
          width: 16px;
        }
      
        40% {
          transform: translateX(0%);
          width: 80%;
        }
      
        80% {
          width: 100%;
          transform: translateX(0px);
        }
      
        90% {
          width: 80%;
          transform: translateX(15px);
        }
      
        100% {
          transform: translateX(0px);
          width: 16px;
        }
      }
      .container {
        display: flex;
        justify-content: center;  
        align-items: center;      
        height: 100vh;            
        width: 100vw;             
        position: relative;      
    }
    `}
    </style>
    <div className="container">
        <div className="loader">
            <span className="loader-text">loading</span>
            <span className="load"></span>
        </div>
    </div>
    </>
  );
}


