import React from 'react';
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import {Typography} from '@material-ui/core';
import {CopyToClipboard} from "./CopyToClipboard";
import { Nationality} from '../constants/nationality'

interface ContactsTableProps {
    data: any
}

const useStyles = makeStyles({
    table: {},
});

export const ContactsTable = (props: ContactsTableProps) => {
    const classes = useStyles()
    if(!props.data.length) {
        return <div>Таких данных нет</div>
    }
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Avatar</TableCell>
                        <TableCell>Full Name</TableCell>
                        <TableCell>Birthday</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Nationality</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((contacts: any) => (
                        <TableRow key={contacts.login.uuid}>
                            <TableCell component="th" scope="row">
                                <Avatar alt="" src={contacts.picture.thumbnail}/>
                            </TableCell>
                            <TableCell>
                                {contacts.name.title} {contacts.name.first} {contacts.name.last}
                            </TableCell>
                            <TableCell>
                                <Typography>{format(parseISO(contacts.dob.date), 'MM/dd/yyyy')}</Typography>
                                <Typography>{contacts.dob.age} years</Typography>
                            </TableCell>
                            <TableCell>
                                <CopyToClipboard text={contacts.email}/>
                            </TableCell>
                            <TableCell>
                                <CopyToClipboard text={contacts.phone}/>
                            </TableCell>
                            <TableCell>
                                <Typography>{contacts.location.country}</Typography>
                                <Typography>
                                    {contacts.location.city}, {contacts.location.street.name}, {""}
                                    {contacts.location.street.number}
                                </Typography>
                            </TableCell>
                            <TableCell>{Nationality[contacts.nat]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}