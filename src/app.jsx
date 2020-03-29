import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.jsx';
import Register from './components/Register.jsx';
import Discharge from './components/Discharge.jsx';
import Bedstatus from './components/Bedstatus.jsx';
import UpdateHospital from './components/UpdateHospital.jsx';
const $ = require('jquery');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'home',
            bedsData: [],
            nursesData: [],
            diseasesData: [],
        }
    }

    componentDidMount() {
        $.ajax({
            type: 'GET',
            url: '/beds',
            success: (result) => {
                this.setState({
                    bedsData: result
                })
            }
        });
        $.ajax({
            type: 'GET',
            url: '/nurses',
            success: (result) => {
                this.setState({
                    nursesData: result
                })
            }
        });
        $.ajax({
            type: 'GET',
            url: '/diseases',
            success: (result) => {
                this.setState({
                    diseasesData: result
                })
            }
        });
    }

    changeView(option) {
        this.setState({
            view: option
        });
    }

    render() {
        if (this.state.view === 'home') {
            var currentView = <IndecisionApp />
        } else if (this.state.view === 'register') {
            var currentView = <Register data={this.state} />
        } else if (this.state.view === 'discharge') {
            var currentView = <Discharge data={this.state}/>
        } else if (this.state.view === 'bedStatus') {
            var currentView = <Bedstatus />
        } else if (this.state.view === 'updateHospital') {
            var currentView = <UpdateHospital data={this.state} />
        }
        
        return (
            <div>
                <div className="nav">
                    <span className="web_title">Life-over-Life</span>
                    <span className={this.state.view === 'home'
                        ? 'nav-selected'
                        : 'nav-unselected'} 
                        onClick={() => this.changeView('home')}>
                        Home
                    </span>
                    <span className={this.state.view === 'register'
                        ? 'nav-selected'
                        : 'nav-unselected'}
                        onClick={() => this.changeView('register')}>
                        Register Patient
                    </span>
                    <span className={this.state.view === 'discharge'
                        ? 'nav-selected'
                        : 'nav-unselected'}
                        onClick={() => this.changeView('discharge')}>
                        Discharge Patient
                    </span>
                    <span className={this.state.view === 'bedStatus'
                        ? 'nav-selected'
                        : 'nav-unselected'}
                        onClick={() => this.changeView('bedStatus')}>
                        Bed Status
                    </span>
                    <span className={this.state.view === 'updateHospital'
                        ? 'nav-selected'
                        : 'nav-unselected'}
                        onClick={() => this.changeView('updateHospital')}>
                        Update Hospital Data
                    </span>
                </div>

                <div className="main">
                    {currentView}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));