import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

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

}

export default Buttons
