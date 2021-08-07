import React from 'react';
import HeroSlider, { Slide, Nav, SideNav, MenuNav, ButtonsNav, AutoplayButton, OverlayContent, OverlayContainer } from 'hero-slider';
import './LandingPage.css';

import DoubleClutch from '../../assets/img/double_clutch.jpg';
import Fingeroll from '../../assets/img/fingeroll.jpg';
import JumpShot from '../../assets/img/jump_shot.jpg';

export default function LandingPage() {

    return (
        <HeroSlider className="hero-slider"
        slidingAnimation="left-to-right"
        orientation="horizontal"
        initialSlide={1}
        isSmartSliding="true"
        settings={{
            shouldAutoplay: true,
            shouldDisplayButtons: true,
            autoplayDuration: 3000,
            slidingDuration: 250,
            slidingDelay: 100,
        }}>
            <OverlayContainer className="overlay-container"
            style={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                textAlign: 'center',
            }}>
                <h2>All your NBA needs in one place</h2>
            </OverlayContainer>
            <Slide className="hero-slides"
            background={{
                backgroundImage: DoubleClutch,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center center',
            }}/>
            <Slide className="hero-slides"
            background={{
                backgroundImage: Fingeroll,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center center',
            }}/>
            <Slide className="hero-slides"
            background={{
                backgroundImage: JumpShot,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center center',
            }}/>
        </HeroSlider> 
    )
}