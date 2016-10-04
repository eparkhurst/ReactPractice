import React from 'react';
import Book from './Book';

const App = React.createClass({
  getInitialState(){
    return {
      books: [{
        author: 'George R. R. Martin',
        cover: 'https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg',
        isbn: '978-0553103547',
        stock: 7,
        title: 'A Game of Thrones',
        year: 1996
      }, {
        author: 'Neal Stephenson',
        cover: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Snowcrash.jpg',
        isbn: '978-1491515051',
        stock: 3,
        title: 'Snow Crash',
        year: 1992
      }, {
        author: 'Andy Weir',
        cover: 'https://upload.wikimedia.org/wikipedia/en/c/c3/The_Martian_2014.jpg',
        isbn: '978-0804139021',
        stock: 11,
        title: 'The Martian',
        year: 2014
      }],

      editing:null

    }
  },
  
  changeStock(book, direction){
    const newLib = this.state.books.map((element)=>{
      if(element != book){
        return element
      }

      let newStock;

      if (direction === 'up') {
        newStock = element.stock + 1
        // console.log(newStock);
      } else if(direction === 'down'){
        newStock = element.stock - 1
      }else{
        newStock = direction
      }
      const newBook = Object.assign({}, book , {stock:newStock})
      return newBook
    })
    this.setState({books:newLib})
  },

  startEditing(book){
    console.log("edit", book);
    this.setState({editing: book})
  },

  stopEditing(event){
   if (event.which !== 13) {
      return;
    }
    this.setState({editing:null})
  },

  render() {
    return <div className="inventory" onKeyDown={this.stopEditing}>
        <h1>Inventory</h1>

        <table>
          <thead>
            <tr>
              <th>Cover</th>
              <th>Description</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map((element, index)=>{
              return <Book
                book = {element}
                key = {index}
                changeStock = {this.changeStock}
                editing = {this.state.editing}
                startEditing = {this.startEditing}
              />
            })}
          </tbody>
        </table>
      </div>
  }
});

export default App;
