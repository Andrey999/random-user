import React, { useState, useEffect } from 'react';
import { useContacts } from "../../hooks/useContacts";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import { ContactsTable } from "../../components/ContactsTable";
import { ButtonChangeMode } from '../../components/ButtonChangeMode'
import { ViewMode } from '../../constants/viewModeEnum'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        marginTop: theme.spacing(4),
    },
    headBox: {
        marginBottom: theme.spacing(3),
        display: 'flex',
        justifyContent: 'space-between'
    },
}));

export const Contacts = () => {
    const classes = useStyles()
    const contacts = useContacts()
    const [dataViewMode, setDataViewMode] = useState(localStorage.getItem('dataViewMode') || ViewMode.Table)

    useEffect(() => {
        localStorage.setItem('dataViewMode', dataViewMode)
    }, [dataViewMode])

    if (contacts.isLoading) {
        return <div>...loading</div>
    }

    if (contacts.isError) {
        return <div>...error</div>
    }

    return (
        <Container className={classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.headBox}>
                    <Typography variant="h5">
                        Contacts
                    </Typography>

                    <ButtonChangeMode
                        dataViewMode={dataViewMode}
                        setDataViewMode={setDataViewMode}
                    />
                </Grid>

                <Grid item xs={12}>
                    {dataViewMode === ViewMode.Table ? <ContactsTable data={contacts.data} /> : 'this is grid'}
                </Grid>
            </Grid>
        </Container>
    )
}