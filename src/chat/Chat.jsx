import { useState } from 'react'
import '../style/chat.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function Chat() {
    return (
        <>
            <section className="cha.main-grid">
                <aside className="main-side">
                    <header className="common-header">
                        <div className="common-header-start">
                            <button className="u-flex">
                                <img className="profile-image" src="https://yt3.googleusercontent.com/ytc/APkrFKa8IiToDb9bnp5k21PTRCA-S0Dl5l1UnWDQkf6E=s900-c-k-c0x00ffffff-no-rj" alt="Elad Shechter"></img>
                                    <div className="common-header-content">
                                        <h1 className="common-header-title">Hackaton 2023</h1>
                                    </div>
                            </button>
                        </div>
                        <nav className="common-nav">
                            {/* aqui pueden ir cosas al lado del titulo */}
                        </nav>
                    </header>

                    {/* PREGUNTAS FRECUENTES VAN AQUI */}
                </aside>
                <main className="main-content">
                    <header className="common-header">
                        <div className="common-header-start">
                            <button className="common-button is-only-mobile u-margin-end js-back"><span class="icon icon-back">⬅</span></button>
                            <button className="u-flex js-side-info-button">
                                <img className="profile-image" src="https://yt3.googleusercontent.com/ytc/APkrFKa8IiToDb9bnp5k21PTRCA-S0Dl5l1UnWDQkf6E=s900-c-k-c0x00ffffff-no-rj" alt="CSS Masters Israel"></img>
                                    <div className="common-header-content">
                                        <h2 className="common-header-title">Finny</h2>
                                        <p className="common-header-status">Online</p>
                                    </div>
                            </button>
                        </div>
                        <nav className="common-nav">
                            <ul className="common-nav-list">
                                <li className="common-nav-item">
                                    <button className="common-button">
                                        <span className="icon">🔎</span>
                                    </button>
                                </li>
                                <li className="common-nav-item">
                                    <button className="common-button">
                                        <span className="icon icon-attach">📎</span>
                                    </button>
                                </li>
                                <li className="common-nav-item">
                                    <button className="common-button u-animation-click js-side-info-button">
                                        <span className="icon icon-menu" aria-label="menu"></span>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <div className="messanger">
                        <ol className="messanger-list">
                            <li className="common-message is-time">
                                <p className="common-message-content">
                                    {/* <!-- dia del mensaje --> */}
                                    Today
                                </p>
                            </li>


                            {/* mensaje de la ia */}
                            <li className="common-message is-other">
                                <p className="common-message-content" id="ia-msg">
                                    ¡Hola! Soy Finny, tu asistente virtual. ¿En que puedo ayudarte el dia de hoy?
                                </p>
                                <time datetime>14:33</time>
                            </li>
                            {/* <!-- mensaje del usuario --> */}
                            <li className="common-message is-you" id="user-block">
                                <p className="common-message-content" id="user-msg">

                                </p>
                                <span className="status is-seen">✔️✔️</span>
                                <time datetime>14:11</time>
                            </li>
                        </ol>
                    </div>
                    <form id="main-form">
                        <div className="message-box">
                            <button className="common-button"><span class="icon">😃</span></button>
                            <input className="text-input" id="message-box" name="msg" type="text" placeholder="Escribe tu mensaje" contenteditable></input>
                                <button id="voice-button" className="common-button"><span class="icon">🎤</span></button>
                                <button id="submit-button" className="common-button"><span class="icon">➤</span></button>
                        </div>
                    </form>

                </main>
                <aside className="main-info u-hide">
                    <header className="common-header">
                        <button className="common-button js-close-main-info"><span class="icon">❌</span></button>
                        <div className="common-header-content">
                            <h3 className="common-header-title">Info</h3>
                        </div>
                    </header>
                    <div className="main-info-content">
                        <section className="common-box">
                            <img className="main-info-image" src="https://scontent.fhfa1-2.fna.fbcdn.net/v/t1.0-1/p100x100/10325799_276849335820343_269039155920934591_n.png?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=fxci6qYcSvoAX-bZfj2&_nc_ht=scontent.fhfa1-2.fna&oh=ad1c246e7e4a52c607aafd99ed7217a2&oe=5EEAF8B0" alt="CSS Masters Israel"></img>
                                <h4 className="big-title">CSS Masters Israel</h4>
                                <p className="info-text">Created 6/11/2013 at 22:45</p>
                        </section>
                        <section className="common-box">
                            <h5 className="section-title">Description</h5>
                            <p>Out main channel of the comunity is on Fecbook: <a href="https://www.facebook.com/groups/css.masters.israel/">http://bit.ly/2Up8On5</a></p>
                        </section>
                        <section className="common-box">
                            <h5 className="section-title">Other content</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto odit voluptatem magnam sequi dolorem soluta assumenda ipsum iusto culpa velit repudiandae vitae minus minima corporis labore sit, molestias, a ut!</p>
                        </section>
                    </div>
                </aside>
            </section>
        </>
    )
}

function CallBedrock() {
    
}