import React, { Component } from "react";
import { connect } from "react-redux";

class NotCompleted extends Component {
  constructor(props) {
    super(props);
    console.log("inside constructor");
  }
  componentWillReceiveProps() {
    console.log("component", this.props);
  }

  getRows() {
    const { todos } = this.props;
    const rows = todos.map(
      todo =>
        !todo.status ? (
          <tr key={todo.id}>
            <td>{todo.name}</td>
            <td>{todo.date}</td>
          </tr>
        ) : (
          ""
        )
    );
    return rows;
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Todo</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>{this.getRows()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(NotCompleted);
