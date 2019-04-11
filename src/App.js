import React, { Component } from "react";
import MyForm from "./components/MyForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = {
      newTags: [],
      selectOptions: [
        { value: "Food", label: "Food" },
        { value: "Being Fabulous", label: "Being Fabulous" },
        { value: "Ken Wheeler", label: "Ken Wheeler" },
        { value: "ReasonML", label: "ReasonML" },
        { value: "Unicorns", label: "Unicorns" },
        { value: "Kittens", label: "Kittens" }
      ]
    };
  }

  serveSelectOptions = () => {
    const { newTags, selectOptions } = this.state;
    return [...newTags, ...selectOptions];
  };

  handleAddTag = () => {
    const id = Math.floor(Math.random() * 99999);
    const newTag = { value: id, label: `New tag #${id}` };
    this.addNewTagToState(newTag);
    const currentValue = this.child.current.child.current.state.values.topics;
    const newValue = [newTag, ...currentValue];
    this.child.current.child.current.setFieldValue("topics", newValue);
  };

  addNewTagToState = newTag => {
    const { newTags } = this.state;
    this.setState({ newTags: [newTag, ...newTags] });
  };

  render() {
    const { newTags } = this.state;
    return (
      <div>
        <MyForm
          ref={this.child}
          selectOptions={this.serveSelectOptions()}
          newTags={newTags}
        />

        <button onClick={this.handleAddTag} type="button">
          Add new tag
        </button>
      </div>
    );
  }
}

export default App;
