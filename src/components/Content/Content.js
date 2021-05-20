import React, { useState } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TextField, Button, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Buttons from '../Buttons';
import { useUrlShortenerContext } from '../../context/UrlShortenerContext';
import { POPULATE_SHORT_URL, REQUEST_URL } from '../../constants';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '40% 10px',
        border: '1px solid #C9CDD4',
        [theme.breakpoints.up('sm')]: {
            margin: '20% 5%',
            padding: '30px'
        }
    },
    wrapperContent: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '15px'
    },
    wrapperResultContent: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        margin: '15px',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        }
    },
    textInput: {
        width: '100%',
    },
    btn: {
        marginTop: '15px',
        width: '100%',
        whiteSpace: 'nowrap',
        [theme.breakpoints.up('sm')]: {
            width: '200px',
            marginLeft: '10px',
            marginTop: 0,
        }
    },
    actions: {
        width: '100%',
        height: '65px',
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            width: '40%',
            height: 'auto'
        }
    },
    btnCopy: {
        marginRight: '10px',
        [theme.breakpoints.up('sm')]: {
            marginRight: 0,
        }
    }
}));

const Content = () => {
    const classes = useStyles();
    const { longUrl, dispatch } = useUrlShortenerContext();
    const [typeVal, setTypeVal] = useState(longUrl);
    const [resVal, setResVal] = useState('');  
    const [copied, setCopied] = useState(false);

    const handleChange = e => {
        setTypeVal(e.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const obj = { "longUrl": typeVal };

        axios.post(REQUEST_URL, obj)
        .then(res => {
            const {shortUrl} = res.data;
            setResVal(shortUrl);
            dispatch({ type: POPULATE_SHORT_URL, shortUrl});
        })
    };

    const clearAll = () => {
        setTypeVal('');
        setResVal('');
        setCopied(!copied);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div className={classes.wrapper}>
                <div className={classes.wrapperContent}>
                    <TextField
                        label="Paste the URL to be shortened"
                        value={typeVal}
                        className={classes.textInput}
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <Buttons text="Shorten" icon="content_cut" color="primary" type="submit"/>
                </div>
                <div className={classes.wrapperResultContent}>
                    <TextField
                        label="Short Url"
                        value={resVal}
                        className={ classes.textInput }
                        variant="filled"
                    />
                    <div className={classes.actions}>
                        {
                            copied ? 
                            <Button 
                                    variant="outlined" 
                                    disabled
                                    className={`${classes.btn} ${classes.btnCopy}`}
                                    startIcon={<Icon>check</Icon>}
                                >
                                    Copied
                            </Button>
                            :
                            <CopyToClipboard text={resVal} onCopy={() => setCopied(!copied)}>
                                <Button 
                                    variant="contained"
                                    color="secondary"
                                    type="button"
                                    className={`${classes.btn} ${classes.btnCopy}`}
                                    startIcon={<Icon>content_copy</Icon>}
                                >
                                    Copy
                                </Button>
                            </CopyToClipboard>
                        }
                        <Button 
                            variant="contained"
                            color="default"
                            type="button"
                            className={ classes.btn }
                            startIcon={<Icon>clear</Icon>}
                            onClick={clearAll}
                        >
                            Clear All
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Content;
