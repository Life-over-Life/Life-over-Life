import React from 'react';
import $ from 'jquery';

class UpdateHospital extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bed_type: "",
            nurse_id: "",
            bed_id: "",
            nurse_id_exist: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAddSubmit = this.handleAddSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleAddSubmit(event) {
        event.preventDefault();
        var bed_type = this.state.bed_type;
        var nurse_ID = this.state.nurse_id;
        this.props.data.nursesData.map((nurse, key) => {
            if (nurse.nurse_id === Number(nurse_ID)) {
                $.ajax({
                    type: 'POST',
                    url: '/addBeds',
                    data: { bed_type: bed_type, bed_status: "Empty", patient_id: 0, patient_name: null, patient_gender: 'male', patient_age: 0, patient_address: null, patient_contact_num: 0, patient_medical_history: null, patient_disease: null, patient_symptoms: null, patient_condition: 'non-critical', patient_previous_criminal_history: 'false', patient_alcoholic_status: 'false', patient_marital_status: 'false', patient_dependents: 0, patient_preexisting_serious_conditions: 'false', nurse_id: nurse_ID, checkin_date: null, patient_expected_discharge_date: null, ventilator_needed: 'false', other_details: null },
                    success: console.log()
                });
                this.setState({
                    bed_type: "",
                    nurse_id: "",
                    nurse_id_exist: true
                });
            }  
        });
    }

    handleRemoveSubmit(event) {
        event.preventDefault();

    }

    render() {
        return (
            <div>
                <div className="updateHospital-wrapper">
                    <div className="updateHospital-form">
                        <div className="input-fields">
                            <h1 className="updateHospital-title">
                                Add More Bed
                            </h1>
                            <form onSubmit={this.handleAddSubmit}>
                                <input className="input" type="text" name="bed_type" value={this.state.value} onChange={this.handleChange}
                                placeholder="Add bed type" />
                                <input className="input" type="number" name="nurse_id" value={this.state.value} onChange={this.handleChange}
                                    placeholder="Add Nurse ID" />
                                <input className="updateAddBtn" type="submit" value="Add Bed" />
                            </form>

                            <h1 className="updateHospital-title">
                                Remove a Bed
                            </h1>
                            <form onSubmit={this.handleRemoveSubmit}>
                                <input className="input" type="number" name="bed_id" value={this.state.value} onChange={this.handleChange}
                                    placeholder="Bed ID" />
                                <input className="updateRemoveBtn" type="submit" value="Remove Bed" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateHospital;