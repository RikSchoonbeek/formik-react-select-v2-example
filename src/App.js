import React, { Component } from "react";
import MyForm from "./components/MyForm";

class App extends Component {
  state = {
    selectOptions: [
      { value: "Food", label: "Food" },
      { value: "Being Fabulous", label: "Being Fabulous" },
      { value: "Ken Wheeler", label: "Ken Wheeler" },
      { value: "ReasonML", label: "ReasonML" },
      { value: "Unicorns", label: "Unicorns" },
      { value: "Kittens", label: "Kittens" }
    ]
  };

  handleAddTag = () => {
    const id = Math.floor(Math.random() * 99999);
    const newTag = { value: id, label: `New tag #${id}` };
    this.handleAddToSelectOptions(newTag);
  };

  handleAddToSelectOptions = newTag => {
    const { selectOptions } = this.state;
    const newSelectOptions = [newTag, ...selectOptions];
    this.setState({ selectOptions: newSelectOptions });
  };

  render() {
    const { selectOptions } = this.state;
    return (
      <div>
        <MyForm selectOptions={selectOptions} />

        {/* // This button adds a new tag. It will
        add a new tag to the selectOptions, but it will
        also add a new tag to the select input's selected
        values */}
        <button onClick={this.handleAddTag} type="button">
          Add new tag
        </button>
      </div>
    );
  }
}

export default App;
