import React from 'react';
import { Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';
import { useState, useEffect } from 'react';

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [reason, setReason] = useState("");
    const [replyPref, setReplyPref] = useState("email");
    const [okCaptcha, setOkCaptcha] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handleChange_name = (evt) => {
        setName(evt.target.value);
    };
    const handleChange_email = (evt) => {
        setEmail(evt.target.value);
    };
    const handleChange_phone = (evt) => {
        setPhone(evt.target.value);
    };
    const handleChange_reason = (evt) => {
        setReason(evt.target.value);
    };
    const handleChange_replyPref = (evt) => {
        setReplyPref(evt.target.value);
    };

    const handleClick_Send = (evt) => {
        console.log(evt);

        console.log(name, email, phone, reason, replyPref);
    }

    window.okcaptcha = (resp) => {
        console.log("okcaptcha", resp);
        setOkCaptcha(true);
    }

    const renderSubmitOrCaptcha = () => {
        if (okCaptcha)
            return <Button variant="contained" color="primary" onClick={handleClick_Send}>Send</Button>;
        else
            return <div className="g-recaptcha" data-callback="okcaptcha" data-sitekey="6Lc7PvwUAAAAAAgDTjoMCZCBxncpvBE3FOStGscT"></div>;
    }


    return (
        <div>
            <Typography variant="h2">Contact</Typography>
            <br /><br />

            <form noValidate autoComplete="off">
                <TextField id="Name" label="Name" variant="outlined" value={name} onChange={handleChange_name} />
                <br /><br />
                <TextField id="email" label="Email" type="email" variant="outlined" value={email} onChange={handleChange_email} />
                <br /><br />
                <TextField id="phone" label="Phone" type="telephone" variant="outlined" value={phone} onChange={handleChange_phone} />
                <br /><br />
                <TextField
                    id="reason"
                    label="How we can help"
                    multiline
                    rows="4"
                    placeholder="Have prayer requests? Looking for church info? What's on your mind?"
                    variant="outlined"
                    value={reason}
                    onChange={handleChange_reason}
                />
                <br /><br />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Prefered Contact Method</FormLabel>
                    <RadioGroup aria-label="replypreference" name="replypreference" onChange={handleChange_replyPref} value={replyPref}>
                        <FormControlLabel value="email" control={<Radio />} label="Email" />
                        <FormControlLabel value="phone-call" control={<Radio />} label="Phone Call" />
                        <FormControlLabel value="text-message" control={<Radio />} label="Text Message" />
                        <FormControlLabel value="other" control={<Radio />} label="Other - please specify in your message" />
                    </RadioGroup>
                </FormControl>

                <br /><br />
                {renderSubmitOrCaptcha()}
            </form>
        </div>
    );
}