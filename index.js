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
            Description: 'Hi, welcome to my online portfolio where you can see the list of projects that I have participated throughout the span my software development and engineering career. I had been in the IT Industry since 2011 and then went on to do software development three years later.',
            Projects: [],
            Skills: []
        };
        return _this;
    }

    _createClass(Portfolio, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            fetch('./projects.json').then(function (r) {
                if (!r.ok) {
                    throw new Error("HTTP Error" + r.status);
                }
                return r.json();
            }).then(function (d) {
                _this2.setState({ Projects: d });
            });

            fetch('./skills.json').then(function (r) {
                if (!r.ok) {
                    throw new Error("HTTP Error" + r.status);
                }
                return r.json();
            }).then(function (d) {
                _this2.setState({ Skills: d });
            });
        }
    }, {
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
                                { 'class': 'col-md-5 col-sm-12 p-3' },
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