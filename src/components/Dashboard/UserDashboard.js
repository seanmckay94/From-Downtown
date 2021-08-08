import React, { useState, useEffect } from 'react';
import './UserDashboard.css';
import axios from 'axios';
import { Dropdown, Button } from 'react-bootstrap';


export default function UserDashboard() {

    const playerURL = "https://www.balldontlie.io/api/v1/players"
    const teamsURL = "https://www.balldontlie.io/api/v1/teams"
    
    const playerArray = []

    function teamList() {
        axios.get(playerURL).then((response) => {
        return response.team.name === Dropdown.Item.value
    });
    }


    return (
        <div className="content-container">
        <h1>User Dashboard</h1>

        <Dropdown>
            <Dropdown.Toggle id="dropdown-menu" variant="light">
                Choose you Team
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item value="Hawks">Atlanta Hawks</Dropdown.Item>
                <Dropdown.Item value="Celtics">Boston Celtics</Dropdown.Item>
                <Dropdown.Item value="Nets">Brooklyn Nets</Dropdown.Item>
                <Dropdown.Item value="Hornets">Charlotte Hornets</Dropdown.Item>
                <Dropdown.Item value="Bulls">Chicago Bulls</Dropdown.Item>
                <Dropdown.Item value="Cavaliers">Cleveland Cavaliers</Dropdown.Item>
                <Dropdown.Item value="Mavericks">Dallas Mavericks</Dropdown.Item>
                <Dropdown.Item value="Nuggets">Denver Nuggets</Dropdown.Item>
                <Dropdown.Item value="Pistons">Detroit Pistons</Dropdown.Item>
                <Dropdown.Item value="Warriors">Golden State Warriors</Dropdown.Item>
                <Dropdown.Item value="Rockets">Houston Rockets</Dropdown.Item>
                <Dropdown.Item value="Pacers">Indiana Pacers</Dropdown.Item>
                <Dropdown.Item value="Clippers">Los Angeles Clippers</Dropdown.Item>
                <Dropdown.Item value="Lakers">Los Angeles Lakers</Dropdown.Item>
                <Dropdown.Item value="Grizzlies">Memphis Grizzlies</Dropdown.Item>
                <Dropdown.Item value="Heat">Miami Heat</Dropdown.Item>
                <Dropdown.Item value="Bucks">Milwaukee Bucks</Dropdown.Item>
                <Dropdown.Item value="Timberwolves">Minnesota Timberwolves</Dropdown.Item>
                <Dropdown.Item value="Pelicans">New Orleans Pelicans</Dropdown.Item>
                <Dropdown.Item value="Knicks">New York Knicks</Dropdown.Item>
                <Dropdown.Item value="Thunder">Oklahoma City Thunder</Dropdown.Item>
                <Dropdown.Item value="Magic">Orlando Magic</Dropdown.Item>
                <Dropdown.Item value="76ers">Philadelphia 76ers</Dropdown.Item>
                <Dropdown.Item value="Suns">Phoenix Suns</Dropdown.Item>
                <Dropdown.Item value="Trail blazers">Portland Trailblazers</Dropdown.Item>
                <Dropdown.Item value="Kings">Sacramento Kings</Dropdown.Item>
                <Dropdown.Item value="Spurs">San Antonio Spurs</Dropdown.Item>
                <Dropdown.Item value="Raptors">Toronto Raptors</Dropdown.Item>
                <Dropdown.Item value="Jazz">Utah Jazz</Dropdown.Item>
                <Dropdown.Item value="Wizards">Washington Wizards</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        {teamList()};

        

        <div className="logo-container">
            <img src='' id="teamLogo" alt="Team Logo"></img>
        </div>
        <div className="player-container">
            {}
        </div>
        </div>
        
    )

    
};