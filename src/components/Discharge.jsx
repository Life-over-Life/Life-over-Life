import React from 'react';

class Discharge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bed_id: "",
            patient_id: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="discharge-wrapper">
                <div className="discharge-form">
                    <div className="input-fields">
                        <h1 className="discharge-title">
                            Discharge a Patient
                        </h1>
                        <form onSubmit={this.handleSubmit}>
                            <input className="input" type="number" name="bed_id" value={this.state.value} onChange={this.handleChange} placeholder="Bed ID:" />
                            <input className="input" type="number" name="patient_id" value={this.state.value} onChange={this.handleChange} placeholder="Patient ID:" />
                            <input className="dischargeBtn" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Discharge;