                                            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
                                            * {
                                                margin: 0;
                                                padding: 0;
                                                box-sizing: border-box;
                                                font-family: 'Poppins', sans-serif;
                                            }
                                            
                                            body {
                                                height: 100vh;
                                                width: 100%;
                                                background: linear-gradient(#2196f3, #e91e63);
                                                overflow: hidden;
                                                display: flex;
                                                justify-content: center;
                                                align-items: center;
                                            }
                                            
                                            .bubbles {
                                                position: absolute;
                                                bottom: -100px;
                                                display: flex;
                                                width: 100%;
                                                justify-content: space-around;
                                            }
                                            
                                            .bubbles span {
                                                height: 60px;
                                                width: 60px;
                                                background: rgba(255, 255, 255, 0.1);
                                                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
                                                backdrop-filter: blur(5px);
                                                animation: move 10s linear infinite;
                                                position: relative;
                                                overflow: hidden;
                                            }
                                            
                                            @keyframes move {
                                                100% {
                                                    transform: translateY(-100vh);
                                                }
                                            }
                                            
                                            .bubbles span.one {
                                                animation-delay: 2.2s;
                                                transform: scale(2.15);
                                            }
                                            
                                            .bubbles span.tow {
                                                animation-delay: 3.5s;
                                                transform: scale(1.55);
                                            }
                                            
                                            .bubbles span.three {
                                                animation-delay: 0.2s;
                                                transform: scale(0.35);
                                            }
                                            
                                            .bubbles span.four {
                                                animation-delay: 6s;
                                                transform: scale(2.15);
                                            }
                                            
                                            .bubbles span.five {
                                                animation-delay: 7s;
                                                transform: scale(0.5);
                                            }
                                            
                                            .bubbles span.six {
                                                animation-delay: 4s;
                                                transform: scale(2.5);
                                            }
                                            
                                            .bubbles span.seven {
                                                animation-delay: 3s;
                                                transform: scale(1.5);
                                            }
                                            
                                            .bubbles span:before {
                                                content: '';
                                                position: absolute;
                                                left: 0;
                                                top: 0;
                                                height: 60px;
                                                width: 40px;
                                                transform: skew(45deg)translateX(150px);
                                                background: rgba(255, 255, 255, 0.15);
                                                animation: mirror 3s linear infinite;
                                            }
                                            
                                            @keyframes mirror {
                                                100% {
                                                    transform: translateX(-450px);
                                                }
                                            }
                                            
                                            .bubbles span.one:before {
                                                animation-delay: 1.5s;
                                            }
                                            
                                            .bubbles span.tow:before {
                                                animation-delay: 3.5s;
                                            }
                                            
                                            .bubbles span.three:before {
                                                animation-delay: 2.5s;
                                            }
                                            
                                            .bubbles span.four:before {
                                                animation-delay: 7.5s;
                                            }
                                            
                                            .bubbles span.five:before {
                                                animation-delay: 4.5s;
                                            }
                                            
                                            .bubbles span.six:before {
                                                animation-delay: 0.5s;
                                            }
                                            
                                            .bubbles span.seven:before {
                                                animation-delay: 6s;
                                            }
                                            
                                            .container {
                                                z-index: 12;
                                                width: 360px;
                                                padding: 15px;
                                                border-radius: 12px;
                                                background: rgba(255, 255, 255, 0.1);
                                                box-shadow: 0 20px50px rgba(0, 0, 0, 5);
                                                backdrop-filter: blur(5px);
                                                border-top: 1px solid rgba(255, 255, 255, 0.5);
                                                border-left: 1px solid rgba(255, 255, 255, 0.5);
                                            }
                                            
                                            .container input[type="text"] {
                                                width: 100px;
                                                height: 100px;
                                                margin: 0 3px;
                                                outline: none;
                                                border: none;
                                                color: #fff;
                                                font-size: 20px;
                                                padding-right: 10px;
                                                text-align: right;
                                                background: transparent;
                                            }
                                            
                                            .container input[type="button"] {
                                                height: 65px;
                                                color: #fff;
                                                width: calc(100% / 4 - 5px);
                                                background: transparent;
                                                border-radius: 12px;
                                                margin-top: 15px;
                                                outline: none;
                                                border: none;
                                                font-size: 20px;
                                                cursor: pointer;
                                                transition: all 0.3s ease;
                                            }
                                            
                                            .container input[type="button"]:hover {
                                                background: rgba(255, 255, 255, 0.1);
                                            }
