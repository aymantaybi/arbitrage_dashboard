import React from 'react'
import TableBody from './TableBody';
import TableCell from './TableCell';
import TableHead from './TableHead';
import TableRow from './TableRow';
import '../../styles.css';

function Table(props: any) {

    const { children, style } = props

    return (
        <div className='table' {...{ style }} >
            {children}
        </div>
    )
}

export default Table

export { TableBody, TableCell, TableHead, TableRow };

