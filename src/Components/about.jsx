import React from 'react';
import { Typography } from '@material-ui/core';

export default function About() {

    return (
        <React.Fragment>
            <Typography variant="h4">Who</Typography>
            <Typography variant="body1">
                <p><strong>Every one is welcome!</strong> Here, you'll find an inviting family of believers. A diverse group of people at all stages of life seeking to follow God and know Him more.</p>
            </Typography>
            <br />

            <Typography variant="h4">What</Typography>
            <Typography variant="body1">
                <p><strong>Worship, Bible teaching, Fellowship (and sometimes pie)</strong> Our worship includes a healthy mix of
                    classic Hyms and some more modern worship music. We typically sing a few songs, open with a word of prayer, and
                    then just visit & catch for a bit. Maybe grab a coffee refill or a snack. The kiddos are dissmissed to childrens
                    church and we dive into God's word together.</p>
            </Typography>
            <br />

            <Typography variant="h4">When</Typography>
            <Typography variant="body1">
                <p><strong>Sundays at 10:30 AM.</strong> Some people like to come a little early to hang out, others straggle in a little late - and that's OK.</p>
            </Typography>
            <br />

            <Typography variant="h4">Where</Typography>
            <Typography variant="body1">
                <p><strong>Superior, WI!</strong> We're on the corner of Ogden Avenu and North 13th, right across from Central Sheet Metal Works. Click <a href="/Directions">here</a> for directions.</p>
            </Typography>
            <br />

            <Typography variant="h4">Why</Typography>
            <Typography variant="body1">
                <strong>Jesus!</strong>
                <p>... some scripture or something here</p>
            </Typography>
            <br />

            <Typography variant="h4">More</Typography>
            <Typography variant="body1">
                <p>To learn more about Lake Point Church, check us out on <a rel="noopener noreferrer" target="_blank" title="facebook" href="https://www.facebook.com/pg/lakepointchurch">facebook</a>;
                    <br />Head on over to the <a href="/Contact">Cantact page</a> and drop us a note;
                    <br />or give us a call at <a href="tel:715-817-3900">715-817-3900</a>
                </p>
            </Typography>
        </React.Fragment>
    );
}