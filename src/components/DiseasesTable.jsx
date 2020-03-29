import React from 'react';
import DiseasesList from './DiseasesList.jsx';

class DiseasesDataTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var rows = [];
        console.log(this.props.data.diseasesData);
        this.props.data.diseasesData.map((disease, i) => {
            rows.push(<DiseasesList data={disease} key={i} />)
        })
        return (
            <table>
                <thead>
                    <tr>
                        <th>Disease Name</th>
                        <th>Mortality Rate (%)</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

export default DiseasesDataTable;