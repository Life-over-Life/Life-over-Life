import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gender: "",
            age: "",
            address: "",
            contact_num: "",
            medical_history: "",
            disease: "",
            symptoms: "",
            condition: "critical",
            previous_criminal_history: "",
            alcoholic_status: "",
            marital_status: "",
            numOfDependents: "",
            preexisting_serious_conditions: ""
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
        console.log(this.state)
    }

    render() {
        return (
            <div className="wrapper">
                <div className="register-form">
                    <div className="input-fields">
                        <h1 className="register-title">Register A Patient</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input className="input" type="text" name="name" value={this.state.value} onChange={this.handleChange} placeholder="Name:" />
                            <label className="select">
                                Gender:
                                <input type="radio" name="gender" value="male" onChange={this.handleChange} /><label> Male</label>
                                <input type="radio" name="gender" value="female" onChange={this.handleChange} /><label> Female</label>
                            </label>
                            <input className="input" type="number" name="age" value={this.state.value} onChange={this.handleChange} placeholder="Age" />
                            <input className="input" type="text" name="address" value={this.state.value} onChange={this.handleChange} placeholder="Address" />
                            <input className="input" type="text" name="contact_num" value={this.state.value} onChange={this.handleChange} placeholder="Phone Number" />
                            <input className="input" type="text" name="medical_history" value={this.state.value} onChange={this.handleChange} placeholder="Medical History" />
                            <input className="input" type="text" name="disease" value={this.state.value} onChange={this.handleChange} placeholder="Disease(s)" />
                            <input className="input" type="text" name="symptoms" value={this.state.value} onChange={this.handleChange} placeholder="Symptom(s)" />
                            <label className="select">
                                Condition:
                                <select name="condition" value={this.state.value} onChange={this.handleChange}>
                                    <option value="critical">Critical</option>
                                    <option value="non-critical">Non-critical</option>
                                </select>
                            </label>
                            <label className="select">
                                Previous Criminal History:
                                <input type="radio" name="previous_criminal_history" value="true" onChange={this.handleChange} /><label> Yes</label>
                                <input type="radio" name="previous_criminal_history" value="false" onChange={this.handleChange} /><label> No</label>
                            </label>
                            <label className="select">
                                Alcoholic: 
                                <input type="radio" name="alcoholic_status" value="true" onChange={this.handleChange} /><label> Yes</label>
                                <input type="radio" name="alcoholic_status" value="false" onChange={this.handleChange} /><label> No</label>
                            </label>
                            <label className="select">
                                Marital Status (married):
                                <input type="radio" name="marital_status" value="true" onChange={this.handleChange} /><label> Yes</label>
                                <input type="radio" name="marital_status" value="false" onChange={this.handleChange} /><label> No</label>
                            </label>
                            <input className="input" type="number" name="numOfDependents" value={this.state.value} onChange={this.handleChange} placeholder="Number of Dependents" />
                            <label className="select">
                                Pre-existing Serious Condition:
                                <select name="preexisting_serious_conditions" value={this.state.value} onChange={this.handleChange}>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </label>

                            <input className="submitBtn" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Register;