import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Menu, MenuOpen, Home, MenuBook, Mail, Photo, Directions } from '@material-ui/icons';
import { Divider, AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    headerBar: {
        color: "black"
    },
    list: {
        width: 250,
    },
}));


export default function Header(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };
    const appPages = [
        {
            Icon: <Home />,
            Text: "Home",
            Path: "#/"
        },
        {
            Icon: <MenuBook />,
            Text: "About",
            Path: "#/About"
        },
        {
            Icon: <Mail />,
            Text: "Contact",
            Path: "#/Contact"
        },
        {
            Icon: <Photo />,
            Text: "Gallery",
            Path: "#/Gallery"
        },
        {
            Icon: <Directions />,
            Text: "Directions",
            Path: "#/Directions"
        },
    ];
    const CurrentPage = () => {
        let path = window.location.hash;
        let page = appPages.filter(x => x.Path === path)[0]
        return page ? page : appPages[0];
    }
    const list = () => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List>
                <ListItem button>
                    <ListItemIcon><MenuOpen /></ListItemIcon>
                </ListItem>
            </List>
            <Divider />
            {appPages.map((p) => (
                <List key={p.Text}>
                    <ListItem button component="a" href={p.Path}>
                        <ListItemIcon>{p.Icon}</ListItemIcon>
                        <ListItemText primary={p.Text} />
                    </ListItem>
                </List>
            ))}
        </div>
    );

    return (
        <div>
            <AppBar position="static" className={clsx(classes.headerBar, props.className)}>
                <Toolbar>
                    <React.Fragment>
                        <Button onClick={toggleDrawer}><Menu /></Button>
                        <Drawer anchor={'left'} open={open} onClose={toggleDrawer}>
                            {list()}
                        </Drawer>
                    </React.Fragment>
                    {CurrentPage().Icon}<Typography variant="h6">{CurrentPage().Text}</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
