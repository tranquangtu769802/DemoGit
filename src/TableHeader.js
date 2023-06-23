import React from 'react';

class TableHeader extends React.Component {
    render() {
        return (
            <> {/**chèn <div> sẽ dễ phá vỡ cấu trúc css nên ta dùng React.Fragment hoặc dùng <></> */}
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Languge</td>
                        <td>Framework</td>
                    </tr>
                </thead>
            </>
        );
    }
}
export { TableHeader };