import React from 'react';

class UpdateHospital extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bed_id: "",
            bed_type: "",
            bed_status: 'Empty'
        }
    }

    render() {
        return (
            <div>
                Hi
            </div>
        )
    }
}

export default UpdateHospital;