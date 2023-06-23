import React from 'react';
import './table.css';

class TableBody extends React.Component {
    render() {
        const rows = this.props.listBody.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{item.languge}</td>
                    <td>{item.framework}</td>
                </tr>
            );
        });
        return (
            <tbody className='table'>
                {rows}
            </tbody>

        );
    }
}
export { TableBody };