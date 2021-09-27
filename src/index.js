'use strict';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Me: 'Peter John C. Saliente',
            Projects: [{
                Title: 'Active Directory Web API',
                Description: 'Lorem ipsum dolor sit amet adipiscing elit consectitur',
                Languages: ['C#', 'MVC Web API']
            }, {
                Title: 'Wafer Scribe Alerts',
                Description: 'Lorem ipsum dolor sit amet adipiscing elit consectitur',
                Languages: ['C#', '.Net Core', 'T-SQL', 'PL/SQL']
            }, {
                Title: 'COVID-19 Dashboard',
                Description: 'Lorem ipsum dolor sit amet adipiscing elit consectitur',
                Languages: ['C#', '.Net Core WEB API', 'JavaScript', 'T-SQL']
            }, {
                Title: 'Location Logging System',
                Description: 'OutSystems Application',
                Languages: ['T-SQL']
            }, {
                Title: 'Paperless Receipt Traveller',
                Description: 'Lorem ipsum dolor sit amet adipiscing elit consectitur',
                Languages: ['T-SQL']
            }, {
                Title: 'iRMS',
                Description: 'Recipe Management System',
                Languages: ['T-SQL']
            }, {
                Title: 'eRFQ',
                Description: 'Request for Quotation',
                Languages: ['T-SQL']
            }, {
                Title: 'Covid-19 Tracker/Tracer',
                Description: 'Lorem ipsum dolor sit amet adipiscing elit consectitur',
                Languages: ['T-SQL']
            }, {
                Title: 'Universal Data Collection',
                Description: 'Request for Quotation',
                Languages: ['T-SQL']
            }, {
                Title: 'EPMAP',
                Description: 'electronic promotional material and events approval system',
                Languages: ['SharePoint', 'C#', 'Web API', 'JavaScript', 'AngularJS', 'SQL']
            }, {
                Title: '4Runner',
                Description: 'Lorem ipsum dolor sit amet adipiscing elit consectitur',
                Languages: ['SharePoint', 'C#', 'Web API', 'JavaScript']
            }, {
                Title: 'AIG',
                Description: 'Account-in-a-Glance',
                Languages: ['SharePoint', 'C#', 'JavaScript', 'KnockOutJS']
            }, {
                Title: 'ePAF',
                Description: 'Electronic Principal Approval Form',
                Languages: ['SharePoint', 'C#', 'REST API', 'JavaScript', 'KnockOutJS']
            }, {
                Title: 'CRAMS',
                Description: 'Crew Resource Allocation Management System',
                Languages: ['SharePoint', 'C#', 'REST API', 'JavaScript', 'KnockOutJS']
            }, {
                Title: 'Flight Status Checker',
                Description: 'Lorem ipsum dolor sit amet adipiscing elit consectitur',
                Languages: ['SharePoint', 'C#', 'HTTP Handler', 'JavaScript']
            }, {
                Title: 'Cabin Crew Leave Exchange Form',
                Description: 'Lorem ipsum dolor sit amet adipiscing elit consectitur',
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
        const { Me, Projects, Skills } = this.state;
        return (
            <div>
                <h1 class="display-4 text-center">{Me}</h1>
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

