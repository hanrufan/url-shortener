import React from 'react';
import { string } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Button, Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    btn: {
        marginLeft: '10px',
        width: '50px',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            width: '200px',
            display: 'flex',
        }
    },
    mobileBtn: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
}));

const Buttons = ({text, icon, color, type}) => {
    const iconContent = <Icon>{icon}</Icon>;
    const classes = useStyles();
    
    return (
        <>
            <Button 
                variant='contained' 
                color={color} 
                type={type}
                className={ classes.btn }
                startIcon={iconContent}
            >
                {text}
            </Button>
            <IconButton 
                aria-label={text} 
                className={classes.mobileBtn} 
                color={color}
                type={type}
            >
                {iconContent}
            </IconButton>
        </>
    )
}

Buttons.propTypes = {
    text: string, 
    icon: string, 
    color: string, 
    type: string
}

export default Buttons
