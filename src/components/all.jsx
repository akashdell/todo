import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, statusChange } from "../actions";
//import Star from "./common/star";

class All extends Component {
  constructor(props) {
    super(props);
    console.log("inside constructor");
  }
  componentWillReceiveProps() {
    console.log("component", this.props);
  }

  getRows() {
    const { todos } = this.props;
    const rows = todos.map(todo => (
      <tr key={todo.id}>
        <td>
          {" "}
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
            onClick={e => {
              this.props.statusChange(todo.id);
            }}
            checked={todo.status}
          />
        </td>
        <td>{!todo.status ? todo.name : <del>{todo.name}</del>}</td>
        <td>{!todo.status ? todo.date : <del>{todo.date}</del>}</td>
        <td>{todo.status ? "completed" : "Incompleted"}</td>
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
              <th />
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
    addTodo: text => dispatch(addTodo(text)),
    statusChange: id => {
      console.log(">>>>>>>>>>>>>>>>>", id);
      dispatch(statusChange(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(All);
