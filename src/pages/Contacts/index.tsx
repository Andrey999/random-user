import React, {useState, useEffect} from 'react';
import {useContacts} from "../../hooks/useContacts";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core';
import {ContactsTable} from "../../components/ContactsTable";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        marginTop: theme.spacing(4),
    },
    headTitle: {
        marginBottom: theme.spacing(3),
    },
}));

export const Contacts = () => {
    const classes = useStyles()
    const contacts = useContacts()
    if (contacts.isLoading) {
        return <div>...loading</div>
    }

    if (contacts.isError) {
        return <div>...error</div>
    }

    return (
        <Container className={classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.headTitle}>
                    <Typography variant="h5">
                        Contacts
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <ContactsTable data={contacts.data} />
                </Grid>
            </Grid>
        </Container>
    )
}