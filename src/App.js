import React from 'react';
import './App.css';
import Search from './search.js';
import Basket from './basket.js';
import ListItems from './listItems.js';
import ShoppingList from './shoppingList';

class App extends React.Component {
  state = {
    inputText: "",
    selectType: "all",
    items: [
      { id: 1, namePl: "Truskawka", nameEng: "Strawberry", type: "fruits", path: "https://pl.bekhost.com/uploads/products/truskawka-asia.jpg" },
      { id: 2, namePl: "Gruszka", nameEng: "Pear", type: "fruits", path: "http://cdn20.beszamel.smcloud.net/t/thumbs/640/480/1/user_photos/15520/gruszka-jakie-ma-wlasciwosci-jak-mozna-ja-wykorz.jpg" },
      { id: 3, namePl: "Arbuz", nameEng: "Watermelon", type: "fruits", path: "https://barbaradabrowska.pl/wp-content/uploads/2018/06/swiezy-arbuz.jpg" },
      { id: 4, namePl: "Pomarańcza", nameEng: "Orange", type: "fruits", path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmcOIU29CjboUlE5-_zv9walHbmaQKQBLXuQyzLd6esMmUSZoJ" },
      { id: 5, namePl: "Mandarynka", nameEng: "Mandarin", type: "fruits", path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvYPCmz23c8CwBKIEOGI5xVe7G7kfo2ETwTveRt9lMgUVoaQ2EJw" },
      { id: 6, namePl: "Winogrono", nameEng: "Grape", type: "fruits", path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXuN-2mavJpWKw1gtoVh5HeOS7kf0aQbUcnaTH-YONE0Ywn3qc" },
      { id: 7, namePl: "Marchewka", nameEng: "Carrot", type: "vegetables", path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3IMjjZcAgcQEBLZjxAS2Vxl_fKPDeh3UciuVYCD1NiVVts_z" },
      { id: 8, namePl: "Ziemniak", nameEng: "Potato", type: "vegetables", path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9i_C-f7nP1kgbenkdCRMRI4rs2Qrv1Pi5OVf6n2RXygfK33V6Q" },
      { id: 9, namePl: "Pomidor", nameEng: "Tomato", type: "vegetables", path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQgev91iVSzfstS6cMSosSq4TFOCMPv_3ykJGWwyWiWDB_42MN" },
      { id: 10, namePl: "Ogórek", nameEng: "Cucumber", type: "vegetables", path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9xWJSrOuftZGOULbInIWs7BNIkx2LuYoRpyN7h5YrJA_myFf2A" },
      { id: 11, namePl: "Cebula", nameEng: "Onion", type: "vegetables", path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOT8l2nvqxip1htWz6oOYfzVQ5EBvATp-J9J4t2DLFvKVftEZcw" },
      { id: 12, namePl: "Banan", nameEng: "Banana", type: "fruits", path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-rp6zppZNvyHy05ZF-vdmMMcaLonhHqMbyzrCsYX1M7CdVe32" },
    ],
    basket: []
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

  handleClick = (e) => {
    console.log(e.target.attributes.name.nodeValue)
    const array = this.state.basket;

    const getNumber = function (num, arr) {
      return arr.includes(num);
    }
    if (!getNumber(e.target.attributes.name.nodeValue, array)) {
      array.push(e.target.attributes.name.nodeValue)
    }
    this.setState({
      basket: array,
    })
  }
  handleBasketClick = (e) => {
    console.log(this.state.basket)

  }
  handleRemoveClick = e => {
    console.log(e.target.name)
    const newBasketState = this.state.basket.map(item => {
      if (item !== e.target.name)
        return item
      else
        return null
    })
    this.setState({
      basket: newBasketState,
    })
  }
  render() {
    return (
      <div id="container">
        <header>
          <Search text={this.state.inputText} change={this.handleChange}></Search>
          <Basket basketClick={this.handleBasketClick}></Basket>
        </header>
        <ShoppingList listItems={this.state.basket} items={this.state.items} click={this.handleRemoveClick}></ShoppingList>
        <ListItems data={this.state.items} type={this.state.selectType} text={this.state.inputText} click={this.handleClick}></ListItems>
      </div>
    );
  }

}
export default App;
