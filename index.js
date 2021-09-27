'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portfolio = function (_React$Component) {
    _inherits(Portfolio, _React$Component);

    function Portfolio(props) {
        _classCallCheck(this, Portfolio);

        var _this = _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call(this, props));

        _this.state = {
            Me: 'Peter John C. Saliente',
            Description: 'Hi, welcome to my online portfolio where you can see the list of projects that I have participated during the span my software development and engineering career. I had been in the IT Industry since 2011 and then went on to do software development three years later.',
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
                Description: 'A SharePoint web application used for the approval of promotional materials and events',
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
        return _this;
    }

    _createClass(Portfolio, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                Me = _state.Me,
                Description = _state.Description,
                Projects = _state.Projects,
                Skills = _state.Skills;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    { 'class': 'display-4 text-center' },
                    Me
                ),
                React.createElement(
                    'p',
                    { 'class': 'lead' },
                    Description
                ),
                React.createElement('br', null),
                React.createElement(
                    'div',
                    { 'class': 'container' },
                    React.createElement(
                        'h2',
                        { 'class': 'display-5 text-center' },
                        'Projects'
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'row gap-5' },
                        Projects.map(function (p) {
                            return React.createElement(
                                'div',
                                { 'class': 'col-sm-5 col-xs-12 p-3' },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'h3',
                                        { 'class': 'display-6' },
                                        p.Title
                                    ),
                                    React.createElement(
                                        'p',
                                        { 'class': 'lead' },
                                        p.Description
                                    ),
                                    p.Languages.map(function (l) {
                                        return React.createElement(
                                            'span',
                                            { 'class': 'badge bg-primary rounded-pill m-1' },
                                            l
                                        );
                                    })
                                )
                            );
                        })
                    )
                ),
                React.createElement('br', null),
                React.createElement(
                    'div',
                    { 'class': 'container' },
                    React.createElement(
                        'h2',
                        { 'class': 'display-5 text-center' },
                        'Skills'
                    ),
                    React.createElement(
                        'ul',
                        { 'class': 'list-group list-group-flush' },
                        Skills.map(function (s) {
                            return React.createElement(
                                'li',
                                { 'class': 'list-group-item' },
                                s.Name
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Portfolio;
}(React.Component);

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Portfolio, null), domContainer);