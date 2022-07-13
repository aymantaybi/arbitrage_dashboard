import React from 'react'
import TableHead from './TableHead'

function Table(props: any) {

    const { counter } = props;

    return (
        <div>
            table here : {counter}
        </div>
    )
}

export default Table