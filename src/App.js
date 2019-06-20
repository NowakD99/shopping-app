import React from 'react';
import './App.css';
import Search from './search.js'
import Basket from './basket';

class App extends React.Component {
  state = {
    inputText: "",
    selectType: "all",
    items: [
      { namePl: "Truskawka", nameEng: "Strawberry", type: "fruits", path: "" },
      { namePl: "Gruszka", nameEng: "Pear", type: "fruits", path: "" },
      { namePl: "Arbuz", nameEng: "Watermelon", type: "fruits", path: "" },
      { namePl: "Pomarańcza", nameEng: "Orange", type: "fruits", path: "" },
      { namePl: "Mandarynka", nameEng: "Mandarin", type: "fruits", path: "" },
      { namePl: "Winogrono", nameEng: "Grape", type: "fruits", path: "" },
    ]
  }

  handleChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === "search") {
      this.setState({
        inputText: e.target.value,
      })
    }
    else {
      console.log(e.target.value)
      if (e.target.value === "Warzywa") {
        this.setState({
          selectType: "vegetables",
        })
      }
      else if (e.target.value === "Owoce") {
        this.setState({
          selectType: "fruits",
        })
      }
      else {
        this.setState({
          selectType: "all",
        })
      }
    }
  }


  render() {
    return (
      <div id="container">
        <header>
          <Search text={this.state.inputText} change={this.handleChange}></Search>
          <Basket></Basket>
        </header>
        <div>Apka</div>
      </div>
    );
  }

}
export default App;
