import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Facebook } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto'
    },
    fb: { marginTop: -5 }
}));

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Lake Point Church
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer(props) {
    const classes = useStyles();

    return (
        <footer className={clsx(classes.footer, props.className)}>
            <Container maxWidth="sm">
                <Typography variant="body1">Connect with us on <Link href="https://www.facebook.com/lakepointchurch/"><Facebook className={classes.fb} />acebook</Link></Typography>
                <Copyright />
            </Container>
        </footer>
    );
}