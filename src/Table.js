import React from 'react';
import {TableHeader} from './TableHeader';
import {TableBody} from './TableBody';
import './table.css';

class Table extends React.Component{
    render() {
        return(
            <>
            < TableHeader />
            <TableBody listBody={this.props.list} />
            </>
        );
    }
}
export default Table;