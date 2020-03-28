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
            <div>
                <h1>Register A Patient</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Gender:
                        <label> Male</label>
                        <input type="radio" name="gender" value="male" onChange={this.handleChange} />
                        <label> Female</label>
                        <input type="radio" name="gender" value="female" onChange={this.handleChange} />
                    </label>
                    <label>
                        Age:
                        <input type="number" name="age" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Address:
                        <input type="text" name="address" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Phone Number:
                        <input type="text" name="contact_num" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Medical History:
                        <input type="text" name="medical_history" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Disease(s):
                        <input type="text" name="disease" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Symptom(s):
                        <input type="text" name="symptoms" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Condition:
                        <select name="condition" value={this.state.value} onChange={this.handleChange}>
                            <option value="critical">Critical</option>
                            <option value="non-critical">Non-critical</option>
                        </select>
                    </label>
                    <label>
                        Previous Criminal History:
                        <label> Yes</label>
                        <input type="radio" name="previous_criminal_history" value="true" onChange={this.handleChange} />
                        <label> No</label>
                        <input type="radio" name="previous_criminal_history" value="false" onChange={this.handleChange} />
                    </label>
                    <label>
                        Alcoholic:
                        <label> Yes</label>
                        <input type="radio" name="alcoholic_status" value="true" onChange={this.handleChange} />
                        <label> No</label>
                        <input type="radio" name="alcoholic_status" value="false" onChange={this.handleChange} />
                    </label>
                    <label>
                        Marital Status (married):
                        <label> Yes</label>
                        <input type="radio" name="marital_status" value="true" onChange={this.handleChange} />
                        <label> No</label>
                        <input type="radio" name="marital_status" value="false" onChange={this.handleChange} />
                    </label>
                    <label>
                        Number of Dependents:
                        <input type="number" name="numOfDependents" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Pre-existing Serious Condition:
                        <select name="preexisting_serious_conditions" value={this.state.value} onChange={this.handleChange}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </label>

                    <input type="submit" value="Submit" />
                </form>
            </div>

        )
    }
}

export default Register;