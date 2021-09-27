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
        return _this;
    }

    _createClass(Portfolio, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                Me = _state.Me,
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