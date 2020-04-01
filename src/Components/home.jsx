import React from 'react';
import { p, Typography } from '@material-ui/core';

export default function Home() {

    return (
        <Typography variant="body1">

            <p>At Lake Point, you'll find a welcoming family of believers. A group of people at all stages of
            life seeking to follow God, and strengthen the bonds of community by building people up in their
                        faith and sharing the love of Jesus.</p>

            <p>We're located in beatiful Superior, Wisconsin. We meet each Sunday at 10:30 am for worship,
            prayer, bible teaching, and children's church. Our youth group and adult bible study
                        meets each Wednesday night at 7 pm. Please come join us!</p>

            <p>
                Lake point is located at <a rel="noopener noreferrer" target="_blank" title="Directions" href="https://www.google.com/maps/dir/?api=1&destination=Lake+Pointe+Church+Superior+WI+54880">1226 Ogden Ave</a>.
                        <br />You can also check us out on <a rel="noopener noreferrer" target="_blank" title="facebook" href="https://www.facebook.com/pg/lakepointchurch">facebook</a>;
                        <br />or give us a call at <a href="tel:715-817-3900">715-817-3900</a>
            </p>
        </Typography>
    );
}