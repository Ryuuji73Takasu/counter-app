import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className='btn btn-primary btn-l m-2'>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            // value={counter.value}
            // id={counter.id}
            // selected={counter.selected}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
