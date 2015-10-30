var presidents = [
  {
    "name": "George Washington",
    "presidency": 1,
    "party": "No Party",
    "living": false
  },
  {
    "name": "John Adams",
    "presidency": 2,
    "party": "Federalist",
    "living": false
  },
  {
    "name": "Thomas Jefferson",
    "presidency": 3,
    "party": "Democratic-Republican",
    "living": false
  },
  {
    "name": "James Madison",
    "presidency": 4,
    "party": "Democratic-Republican",
    "living": false
  },
  {
    "name": "James Monroe",
    "presidency": 5,
    "party": "Democratic-Republican",
    "living": false
  },
  {
    "name": "John Quincy Adams",
    "presidency": 6,
    "party": "Democratic-Republican",
    "living": false
  },
  {
    "name": "Andrew Jackson",
    "presidency": 7,
    "party": "Democratic",
    "living": false
  },
  {
    "name": "Martin Van Buren",
    "presidency": 8,
    "party": "Democratic",
    "living": false
  },
  {
    "name": "William Harrison",
    "presidency": 9,
    "party": "Whig",
    "living": false
  },
  {
    "name": "John Tyler",
    "presidency": 10,
    "party": "Whig",
    "living": false
  },
  {
    "name": "James Polk",
    "presidency": 11,
    "party": "Democratic",
    "living": false
  },
  {
    "name": "Zachary Taylor",
    "presidency": 12,
    "party": "Whig",
    "living": false
  },
  {
    "name": "Millard Fillmore",
    "presidency": 13,
    "party": "Whig",
    "living": false
  },
  {
    "name": "Franklin Pierce",
    "presidency": 14,
    "party": "Democratic",
    "living": false
  },
  {
    "name": "James Buchanan",
    "presidency": 15,
    "party": "Democratic",
    "living": false
  },
  {
    "name": "Abraham Lincoln",
    "presidency": 16,
    "party": "Republican",
    "living": false
  },
  {
    "name": "Andrew Johnson",
    "presidency": 17,
    "party": "Democratic",
    "living": false
  },
  {
    "name": "Ulysses Grant",
    "presidency": 18,
    "party": "Republican",
    "living": false
  },
  {
    "name": "Rutherford Hayes",
    "presidency": 19,
    "party": "Republican",
    "living": false
  },
  {
    "name": "James Garfield",
    "presidency": 20,
    "party": "Republican",
    "living": false
  },
  {
    "name": "Chester Arthur",
    "presidency": 21,
    "party": "Republican",
    "living": false
  },
  {
    "name": "Grover Cleveland",
    "presidency": 22,
    "party": "Democratic",
    "living": false
  },
  {
    "name": "Benjamin Harrison",
    "presidency": 23,
    "party": "Republican",
    "living": false
  },
  {
    "name": "Grover Cleveland",
    "presidency": 24,
    "party": "Democratic",
    "living": false
  },
  {
    "name": "William McKinley",
    "presidency": 25,
    "party": "Republican",
    "living": false
  },
  {
    "name": "Theodore Roosevelt",
    "presidency": 26,
    "party": "Republican",
    "living": false
  },
  {
    "name": "William Taft",
    "presidency": 27,
    "party": "Republican",
    "living": false
  },
  {
    "name": "Woodrow Wilson",
    "presidency": 28,
    "party": "Democratic",
    "living": false
  },
  {
    "name": "Warren Harding",
    "presidency": 29,
    "party": "Republican",
    "living": false
  },
  {
    "name": "Calvin Coolidge",
    "presidency": 30,
    "party": "Republican",
    "living": false
  },
  {
    "name": "Herbert Hoover",
    "presidency": 31,
    "party": "Republican",
    "living": false
  },
  {
    "name": "Franklin D. Roosevelt",
    "presidency": 32,
    "party": "Democratic",
    "living": false
  },
  {
    "name": "Harry Truman",
    "presidency": 33,
    "party": "Democratic",
    "living": false
  },
  {
    "name": "Dwight Eisenhower",
    "presidency": 34,
    "party": "Republican",
    "living": false
  },
  {
    "name": "John F. Kennedy",
    "presidency": 35,
    "party": "Democratic",
    "living": false
  },
  {
    "name": "Lyndon Johnson",
    "presidency": 36,
    "party": "Democratic",
    "living": false
  },
  {
    "name": "Richard Nixon",
    "presidency": 37,
    "party": "Republican",
    "living": false
  },
  {
    "name": "Gerald Ford",
    "presidency": 38,
    "party": "Republican",
    "living": false
  },
  {
    "name": "Jimmy Carter",
    "presidency": 39,
    "party": "Democratic",
    "living": true
  },
  {
    "name": "Ronald Reagan",
    "presidency": 40,
    "party": "Republican",
    "living": false
  },
  {
    "name": "George H.W. Bush",
    "presidency": 41,
    "party": "Republican",
    "living": true
  },
  {
    "name": "Bill Clinton",
    "presidency": 42,
    "party": "Democratic",
    "living": true
  },
  {
    "name": "George W. Bush",
    "presidency": 43,
    "party": "Republican",
    "living": true
  },
  {
    "name": "Barrack Obama",
    "presidency": 44,
    "party": "Democratic",
    "living": true
  }
];

var presidentTableHeaders = ["Name", "Presidency", "Party"];

var TableRow = React.createClass({
  render: function() {
    var deadClass = "";
    if (!this.props.object.living) {
      deadClass = "danger";
    }
    return (
      <tr className={deadClass}>
        <td>{this.props.object.name}</td>
        <td>{this.props.object.presidency}</td>
        <td>{this.props.object.party}</td>
      </tr>
    )
  }
});
var TableHead = React.createClass({
  render: function() {
    return (
      <thead>
        <tr>
          {
            this.props.headers.map(function(header, index) {
              return <th key={index}>{header}</th>
            })
          }
        </tr>
      </thead>
    )
  }
});

var Table = React.createClass({
  render: function() {
    var self = this;
    var tableRows = this.props.objects.map(function(object) {
      if (self.props.aliveOnly) {
        if (object.living) {
          return <TableRow key={object.presidency} object={object}/>
        }
      } else {
        return <TableRow key={object.presidency} object={object}/>
      }
    })
    return (
      <table className="table table-hover">
        <TableHead headers={this.props.tableHeaders} />
        <tbody>
          {tableRows}
        </tbody>
      </table>
    )
  }
})
var PresidentsSearchForm = React.createClass({
  toggleAliveOnly: function() {
    var isLiving = this.refs.isLiving.checked;
    this.props.checkAliveOnly(isLiving);
  },
  render: function() {
    return (
      <div className="search">
        <div className="form-group">
          <input type="text" name="search" className="form-control" placeholder="Search Presidents of the United States" />
        </div>
        <div className="form-group">
          <div className="checkbox">
            <label><input type="checkbox" name="alive" value="1" ref="isLiving" onClick={this.toggleAliveOnly}/>Show only living presidents</label>
          </div>
        </div>
      </div>
    )
  }
});

var PresidentsSearchTable = React.createClass({
  getInitialState: function() {
    return {
      aliveOnly: false
    }
  },
  checkAliveOnly: function(isLiving) {
    var aliveOnly = false;
    if (isLiving) {
      aliveOnly = true;
    }
    this.setState({
      aliveOnly: aliveOnly
    });
  },
  render: function() {
   return (
    <div id="presidents-search-table" className="filterable-table">
      <PresidentsSearchForm checkAliveOnly={this.checkAliveOnly} presidents={this.props.presidents} />

      <Table objects={this.props.presidents} tableHeaders={this.props.tableHeaders} aliveOnly={this.state.aliveOnly}/>
    </div>
   )
  }
});

ReactDOM.render(
  <PresidentsSearchTable presidents={presidents} tableHeaders={presidentTableHeaders} />,
  document.getElementById('example')
);