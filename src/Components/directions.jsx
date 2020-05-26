import React, { useEffect, useState, useRef } from 'react';
import { Typography, Tooltip, TextField, Button, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import googleMap from '../Assets/googleMap.js';


export default function Directions(props) {
    const [directions, setDirections] = useState([]);
    const [manualMode, setmanualMode] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [mapScriptLoaded, setMapScriptLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [startIsInvalid, setStartIsInvalid] = useState(true);
    const [startInput, setStartInput] = useState("");

    //Event Handelers
    const handleClick_GO = () => {
        getDirrections();
    };

    const onStartKeyPress = (e) => {
        if(!startIsInvalid && e.keyCode == 13)
            getDirrections();
    }

    const onStartChage = (e) => {
        let newVal = e.target.value;
        setStartInput(newVal);

        if(newVal.length > 4)
            setStartIsInvalid(false);
        else     
            setStartIsInvalid(true);
    }

    //Helpers
    const getDirrections = () => {
        setIsLoading(true);
        setHasError(false);
        setStartIsInvalid(true);
        if (window && window.getDirections) {
            window.getDirections(startInput);
        }
    }

    //Callbacks
    window.dirrectionsSetter = setDirections;
    window.setHasError = setHasError;
    window.setIsLoading = setIsLoading;
    window.setmanualMode = setmanualMode;

    //Rendering
    const renderDirections = () => {
        if (!hasError && directions && directions.routes && directions.routes.length > 0) {
            let steps = [];
            let totals = "";
            directions.routes[0].legs.map((e, i) => {
                totals += ("Distance: " + e.distance.text + "; Time: " + e.duration.text);
                return e.steps.map((ee, ii) => {
                    steps.push(
                        <li key={(i + "_" + ii)}>
                            <span
                                style={{ display: "inline" }}
                                dangerouslySetInnerHTML={{ __html: ee.instructions + " (" + ee.duration.text + " / " + ee.distance.text + ")" }}>
                            </span>
                        </li>);
                });
            });
            return <div>
                <p>Total {totals}</p>
                <ol>{steps}</ol>
            </div>;
        }
    };

    const renderStartingInput = () => {
        if (manualMode || !navigator.geolocation) {
            return (
                <React.Fragment>
                    <TextField 
                        id="start" 
                        label="Enter your starting point"
                        placeholder="Address, City, or Zip"
                        variant="outlined" 
                        value={startInput} 
                        onChange={onStartChage}  onKeyDown={onStartKeyPress} />
                    <Button style={{marginLeft:"20px"}} variant="contained" color="primary" onClick={handleClick_GO} disabled={startIsInvalid}>Get Directions!</Button>
                </React.Fragment>
            );
        }
        else {
            return (
                <Button variant="contained" color="primary" onClick={() => { setmanualMode(true); }}>Set "From"</Button>
            );
        }
    }

    const renderError = () => {
        if(hasError)
            return <div>
                <Typography variant="h5" style={{color:"red", margin:"5px"}}>An error occurred getting your directions. Please check your starting point.</Typography>
            </div>
    }
    const renderMapScript = () => {
        if(!mapScriptLoaded) {
            setMapScriptLoaded(true);
            return <script type="text/javascript" src={googleMap}></script>;
        }
    }

    return (
        <React.Fragment>
            <Typography variant="h2">Directions</Typography>
            <br /><br />

            {isLoading ? <LinearProgress></LinearProgress> : ""}
            {!isLoading ? renderStartingInput() : ""}
            {!isLoading ? renderDirections() : ""}
            {!isLoading ? renderError() : ""}

            <br /><br />
            <div id="map" style={{ height: '100vh', width: '100%' }}></div>
            {renderMapScript()}
        </React.Fragment >
    );
}