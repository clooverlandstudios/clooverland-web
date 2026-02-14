import React, { use, useEffect, useState } from 'react'
import './index.css'

export default function Home({isMobile}) {


    // ARCADE LOGIC
    const DEFAULT_ARCADE_URL = "https://play.clooverlandstudios.com/"

    const [arcadeImg, setArcadeImg] = useState("./images/arcade/arc_transit.gif")
    const [analogImg, setAnalogImg] = useState("./images/arcade/resources/analog_inactive.png")
    const [btnImg, setButtonImg] = useState("./images/arcade/resources/button_active.png")
    const [arcadeActive, setArcadeAtive] = useState(false)

    const ARCS_PATH = "./images/arcade/arcs/"
    const ARC_TRANSIT = "./images/arcade/arc_transit.gif"
    const __GAMES=[
        [DEFAULT_ARCADE_URL+"superplatform-original", ARCS_PATH+"sp_org.png"],
        [DEFAULT_ARCADE_URL+"demo/superplatform-old", ARCS_PATH+"sp_demo.png"],
        [DEFAULT_ARCADE_URL+"lightsout-classic", ARCS_PATH+"lo_org.png"],
        [DEFAULT_ARCADE_URL+"demo/poweroutage-old", ARCS_PATH+"po_org.png"],
        [DEFAULT_ARCADE_URL+"sm4lls/friendship-test", ARCS_PATH+"ft.png"],
        [DEFAULT_ARCADE_URL+"sm4lls/icecream-catch", ARCS_PATH+"ic.png"],
        [DEFAULT_ARCADE_URL+"superplatform-reoriginal", ARCS_PATH+"sp_re.png"],
        [DEFAULT_ARCADE_URL+"lightsout-relight", ARCS_PATH+"lo_re.png"],
    ]

    const [current_game, setCurrentGame] = useState(0);
    const [arcade_active, setArcadeActive] = useState(true);

    const changeArcadeGame = () => {
        console.log("Changing arcade game...")

        if (arcade_active) {
            setArcadeActive(false)
            setCurrentGame(current_game+1);
            
            if (current_game >= __GAMES.length-1) {
                setCurrentGame(0);
            }

            console.log(current_game)

            updateArcadeVisual(true)
        }

        console.log("Current game: "+__GAMES[current_game][0])

    }

    const gotoGame = () => {
        if (arcade_active) {
            
            setArcadeActive(false);
            window.open(__GAMES[current_game-1][0], "_blank")
            setButtonImg("./images/arcade/resources/button_inactive.png")

            setTimeout(()=>{
                setButtonImg("./images/arcade/resources/button_active.png")
                setArcadeActive(true);
            }, 3000)
        }

    }

    const updateArcadeVisual = (__bool) => {
        if (__bool) {
            setArcadeImg(ARC_TRANSIT)
            setAnalogImg("./images/arcade/resources/analog_active.png")
            setButtonImg("./images/arcade/resources/button_inactive.png")

            setTimeout(()=>{
                updateArcadeVisual(false)
            }, 1000)

        } else {
            setArcadeActive(true);
            setArcadeImg(__GAMES[current_game][1])
            setAnalogImg("./images/arcade/resources/analog_inactive.png")
            setButtonImg("./images/arcade/resources/button_active.png")
        }
    }

    // PRELOADING IMAGES
    const PRELOAD_IMAGES = [
        "./images/arcade/arc_transit.gif",
        "./images/arcade/resources/analog_inactive.png",
        "./images/arcade/resources/analog_active.png",
        "./images/arcade/resources/button_active.png",
        "./images/arcade/resources/button_inactive.png",
        "./images/arcade/arcs/sp_org.png",
        "./images/arcade/arcs/sp_demo.png",
        "./images/arcade/arcs/lo_org.png",
        "./images/arcade/arcs/po_org.png",
        "./images/arcade/arcs/ft.png",
        "./images/arcade/arcs/ic.png",
        "./images/arcade/arcs/sp_re.png",
        "./images/arcade/arcs/lo_re.png",
    ];

    function preloadImages(images) {
        return Promise.all(
            images.map((url) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = () => resolve(url);
                    img.onerror = () => reject(url);
                    img.src = url;
                });
            })
        );
    }


    useEffect(()=>{
        changeArcadeGame();

        // PRELOADING IMAGES
        preloadImages(PRELOAD_IMAGES)
        .then(() => console.log("All images loaded"))
        .catch((failedUrl) =>
            console.error("Failed to load:", failedUrl)
        );
    }, [])

    window.document.title = "Clooverland Studios - Home"

    return (
        <>

            <main style={{overflow: `hidden`, height: `100%`, display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `center`}}>

                <h1 id='titles'> ! WELCOME ! </h1>

                <p>
                    Welcome to our brand new website!, this is the simplest one because our purpose is now make a website purely for sharing our projects, talk about the studio and 
                    share the next project's progress.
                </p>

                <h1 id='titles' style={{fontSize: `2em`, marginTop: `67px`}}> WHAT IS THIS STUDIO ABOUT? </h1>
                <p>

                    Clooverland Studios, which was also known as TopHat Games before the rebrand in 2024, is a indie game development studio I've started as a brand for my projects. This group
                    is about sharing my projects and ideas I have randomly on my day-by-day routine since 2022, these projects maybe aren't the most high quality ones but I share them anyway because
                    I like to see people playing them, I focus on making games in genres I like or just have fun at all experimenting new ideas, so if you are curious to see what a solo indie developer is doing
                    on his free time, you can checkout the games below, and if you are in a good day or mood you can share them, that'd help alot, but honestly, just have some fun on my projects, the more that get
                    to have fun with my creations, the more happy I would be.

                    <br /><br />

                    -- ClooverDev

                </p>

                <h1 id='titles' style={{fontSize: `2em`, marginTop: `67px`}}> MY PROJECTS </h1>
                <p style={{color: `gray`}}>Click on the analog to proceed to the next game and on the button to redirect to the game's page.</p>

                <div style={{width: `100%`, height: `100%`, marginBottom: isMobile ? `100px` : `190px`, transform: isMobile ? `scale(1)` : `scale(1.4)`, marginTop: isMobile ? `5px` : `60px`}}>

                    <img id="__ARCADE" src={arcadeImg} width="100%" style={{maxWidth: `320px`}} />
                    <div style={{display: `flex`, justifyContent: `center`, alignItems: `center`, marginTop: `-340px`, transform: `scale(0.4)`}}>

                        <img src={analogImg} width="60%" style={{maxWidth: `200px`}} />
                        <div id="__ANALOG" onClick={() => {changeArcadeGame()}} style={{position: `absolute`, width: `80px`, height: `160px`, display: `flex`, justifyContent: `center`, alignItems: `center`, marginRight: `160px`}} className={arcade_active ? 'active_item' : ''}></div>

                        <img src={btnImg} width="40%" style={{maxWidth: `150px`, marginTop: `120px`}} />
                        <div id="__BTN" onClick={()=>{gotoGame()}}  style={{position: `absolute`, width: `80px`, height: `60px`, display: `flex`, justifyContent: `center`, alignItems: `center`, marginLeft: `200px`, marginTop: `110px`}} className={arcade_active ? 'active_item' : ''}></div>

                    </div>

                </div>

            </main>
        </>
    )

}
