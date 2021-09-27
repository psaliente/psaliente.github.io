'use strict';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Me: 'Peter John C. Saliente',
            Description: 'Hi, welcome to my online portfolio where you can see the list of projects that I have participated throughout the span my software development and engineering career. I had been in the IT Industry since 2011 and then went on to do software development three years later.',
            Projects: [{
                Title: 'Active Directory Web API',
                Description: 'A Web API that provides a common source of Active Directory Information that can easily be consumed by other Applications',
                Languages: ['C#', 'MVC Web API']
            }, {
                Title: 'Wafer Scribe Alerts',
                Description: 'A windows background service that is used to monitor discrepancies between data from two different applications',
                Languages: ['C#', '.Net Core', 'T-SQL', 'PL/SQL']
            }, {
                Title: 'COVID-19 Dashboard',
                Description: 'A simple dashboard that displays the overview of the COVID-19 cases of employees',
                Languages: ['C#', 'MVC', 'WEB API', 'JavaScript', 'T-SQL']
            }, {
                Title: 'Location Logging System',
                Description: 'An OutSystems android application that is used for QR-Code based logging of employees',
                Languages: ['T-SQL']
            }, {
                Title: 'Paperless Receipt Traveller',
                Description: 'An OutSystems web application approval system for Receipt Travellers',
                Languages: ['T-SQL']
            }, {
                Title: 'iRMS',
                Description: 'An MVC/AngularJS web application used to manage Recipes used on Manufacturing Equipments',
                Languages: ['T-SQL']
            }, {
                Title: 'eRFQ',
                Description: 'An OutSystems web application approval system for Request-for-Quotation forms',
                Languages: ['T-SQL']
            }, {
                Title: 'Covid-19 Tracker/Tracer',
                Description: 'An MVC web application record keeping system for COVID-19 related cases of employees',
                Languages: ['T-SQL']
            }, {
                Title: 'Universal Data Collection',
                Description: 'An OutSystems web application used as an all-purpose basic record-keeping system',
                Languages: ['T-SQL']
            }, {
                Title: 'EPMAP',
                Description: 'A SharePoint WebPart-based application used for the approval of promotional materials and events',
                Languages: ['SharePoint', 'C#', 'Web API', 'JavaScript', 'AngularJS', 'SQL']
            }, {
                Title: '4Runner',
                Description: 'A SharePoint WebPart-based application',
                Languages: ['SharePoint', 'C#', 'Web API', 'JavaScript']
            }, {
                Title: 'AIG',
                Description: 'Account-in-a-Glance, is a SharePoint WebPart-based web app dashboard for a quick overview of the sales and costs of product in a certain sales territory',
                Languages: ['SharePoint', 'C#', 'JavaScript', 'KnockOutJS']
            }, {
                Title: 'ePAF',
                Description: 'Electronic Principal Approval Form, is a SharePoint WebPart-based application for the basic record keeping of Principal Approval Forms',
                Languages: ['SharePoint', 'C#', 'REST API', 'JavaScript', 'KnockOutJS']
            }, {
                Title: 'CRAMS',
                Description: 'Crew Resource Allocation Management System - is a SharePoint WebPart-Based Application used by airline mechanics to manage their aircraft maintenance schedules and tasks',
                Languages: ['SharePoint', 'C#', 'REST API', 'JavaScript', 'KnockOutJS']
            }, {
                Title: 'Flight Status Checker',
                Description: 'A simple SharePoint WebPart to view the flight status of incoming aircrafts',
                Languages: ['SharePoint', 'C#', 'HTTP Handler', 'JavaScript']
            }, {
                Title: 'Cabin Crew Leave Exchange Form',
                Description: 'A simple SharePoint WebPart for flight attendants to submit Leave Exchage Request',
                Languages: ['SharePoint', 'C#', 'JavaScript']
            }],
            Skills: [{
                Name: 'C#',
                Proficiency: 8
            }, {
                Name: 'JavaScript',
                Proficiency: 9
            }, {
                Name: 'T-SQL',
                Proficiency: 7
            }, {
                Name: 'HTML',
                Proficiency: 9
            }, {
                Name: 'CSS',
                Proficiency: 7
            }]
        };
    }

    render() {
        const { Me, Description, Projects, Skills } = this.state;
        return (
            <div>
                <h1 class="display-4 text-center">{Me}</h1>
                <p class="lead">{Description}</p>
                <br />
                <div class="container">
                    <h2 class="display-5 text-center">Projects</h2>
                    <div class="row gap-5">
                        {
                            Projects.map(p => <div class="col-sm-5 col-xs-12 p-3">
                                <div>
                                    <h3 class="display-6">{p.Title}</h3>
                                    <p class="lead">{p.Description}</p>
                                    {
                                        p.Languages.map(l => <span class="badge bg-primary rounded-pill m-1">{l}</span>)
                                    }
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <br />
                <div class="container">
                    <h2 class="display-5 text-center">Skills</h2>
                    <ul class="list-group list-group-flush">
                        {
                            Skills.map(s => <li class="list-group-item">{s.Name}</li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Portfolio />, domContainer);

