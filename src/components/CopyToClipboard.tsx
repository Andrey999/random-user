import React, {useCallback, useState} from 'react';
import Box from '@material-ui/core/Box';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import {useCopyToClipboard} from 'react-use'

interface CopyToClipboardProps {
    text: string
}

// enum StatusCopy {
//     Copy = 'Copy',
//     Copied = 'Copied'
// }

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        cursor: 'pointer'
    },
    icon: {
        marginRight: theme.spacing(1)
    }
}));

export const CopyToClipboard = (props: CopyToClipboardProps) => {
    const [, copyToClipboard] = useCopyToClipboard()
    const [statusCopy, setStatusCopy] = useState('Copy')
    const classes = useStyles()

    const copyIcon = statusCopy === 'Copy' ? <FileCopyOutlinedIcon fontSize="small" className={classes.icon}/> :
        <FileCopyIcon fontSize="small" className={classes.icon}/>

    const clickedCopy = useCallback(() => {
        copyToClipboard(props.text)
        setStatusCopy('Copied')
    }, [copyToClipboard, props.text])

    const clickAway = useCallback(() => {
        setStatusCopy('Copy')
    }, [setStatusCopy])

    return (
        <ClickAwayListener onClickAway={clickAway}>
            <Tooltip title={statusCopy}>
                <Button
                    className={classes.root}
                    onClick={clickedCopy}
                >
                    {copyIcon}
                    {props.text}
                </Button>
            </Tooltip>
        </ClickAwayListener>
    )
}