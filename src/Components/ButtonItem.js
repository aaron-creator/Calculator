import { Button } from '@mui/material'
import React from 'react'

export const ButtonItem = (props) => {
    return (
        <div>
            <Button>{props.item}</Button>
        </div>
    )
}
