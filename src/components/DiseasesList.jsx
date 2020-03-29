import React from 'react';

class DiseasesList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var data = this.props.data;
        return (
            <tr>
                <td>{data.disease_name}</td>
                <td>{data.mortality_rate_percent}</td>
            </tr>
        )
    }
}

export default DiseasesList;