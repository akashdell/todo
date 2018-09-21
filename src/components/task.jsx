import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
//import Star from "./common/star";

class Task extends Component {
  constructor(props) {
    super(props);
    console.log("inside constructor");
    // this.getRows = this.getRows.bind(this);
  }
  componentWillReceiveProps() {
    console.log("component", this.props);
  }

  getRows() {
    const { todos } = this.props;
    console.log(todos, ">>>");
    const rows =
      todos.length &&
      todos.map(todo => (
        <tr key={todo.id}>
          <td>{todo.name}</td>
          <td>{todo.date}</td>
          <td>{todo.status}</td>
        </tr>
      ));
    return rows;
  }

  render() {
    let input;
    return (
      <div>
        <form
          className="form-group"
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            this.props.addTodo(input.value);
            input.value = "";
          }}
        >
          <input ref={node => (input = node)} className="form-control" />
          <button type="submit" className="btn btn-primary m-2">
            Add Todo
          </button>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th>Todo</th>
              <th>Time</th>
              <th>Status</th>
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
const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
