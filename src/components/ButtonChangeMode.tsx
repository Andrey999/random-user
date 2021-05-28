import React, { useCallback } from 'react'
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { ViewMode } from '../constants/viewModeEnum'

interface ButtonChangeModeProps {
    dataViewMode: string
    setDataViewMode: (mode: string) => void
}

export const ButtonChangeMode = (props: ButtonChangeModeProps) => {
    const changeViewMode = useCallback((event, nextView) => {
        props.setDataViewMode(nextView)
    }, [props.setDataViewMode])

    return (
        <ToggleButtonGroup
            orientation="horizontal"
            exclusive
            value={props.dataViewMode}
            onChange={changeViewMode}
        >
            <ToggleButton size="small" value={ViewMode.Table} aria-label={ViewMode.Table} >
                <ViewListIcon />
            </ToggleButton>
            <ToggleButton size="small" value={ViewMode.Grid} aria-label={ViewMode.Grid}>
                <ViewModuleIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}