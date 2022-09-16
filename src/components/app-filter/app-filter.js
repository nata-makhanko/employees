import React, { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
  render() {
    const buttonsData = [
      { name: "all", label: "Все сотрудники" },
      { name: "rise", label: "На повышение" },
      { name: "moreThen1000", label: "ЗП больше 1000$" },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
      const active = this.props.filter === name;
      const clazz = active ? "btn-light" : "btn-outline-light";
      return (
        <button
          className={`btn ${clazz}`}
          type="button"
          onClick={() => this.props.onFilterSelect(name)}
          key={this.props.id}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}

export default AppFilter;
