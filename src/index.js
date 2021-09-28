'use strict';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Me: 'Peter John C. Saliente',
            Description: 'Hi, welcome to my online portfolio where you can see the list of projects that I have participated throughout the span my software development and engineering career. I had been in the IT Industry since 2011 and then went on to do software development three years later.',
            Projects: [],
            Skills: []
        };
    }

    componentDidMount() {
        fetch('./projects.json')
            .then(r => {
                if (!r.ok) {
                    throw new Error("HTTP Error" + r.status);
                }
                return r.json();
            })
            .then(d => {
                this.setState({ Projects: d });
            });

        fetch('./skills.json')
            .then(r => {
                if (!r.ok) {
                    throw new Error("HTTP Error" + r.status);
                }
                return r.json();
            })
            .then(d => {
                this.setState({ Skills: d });
            });
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
                            Projects.map(p => <div class="col-md-5 col-sm-12 p-3">
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

