import React from 'react'

const Book = React.createClass({
  upVote(){
    this.props.changeStock(this.props.book, 'up')
  },
  downVote(){
    this.props.changeStock(this.props.book, "down")
  },
  updateStock(event){
    this.props.changeStock(this.props.book, event.target.value)
  },
  startEditing(event){
    this.props.startEditing(this.props.book.title)
  },
  render(){
    return <tr className="row1">
      <td>
        <img src={this.props.book.cover} alt="A Game of Thrones" />
      </td>

      <td>
        <div className="title">{this.props.book.title}</div>
        <div>{this.props.book.author}</div>
        <div>Published in {this.props.book.year}</div>
        <div>ISBN {this.props.book.isbn}</div>
      </td>

      <td>
        <input onClick = {this.downVote} type="button" value="-" />
        <label onDoubleClick = {this.startEditing} className={this.props.editing === this.props.book.title?"hide":'show'}>
        {this.props.book.stock}
        </label>
        <input onChange = {this.updateStock} type="text"  className={this.props.editing === this.props.book.title?"show":'hide'} maxLength="4" size="4" value={this.props.book.stock} />
        <input onClick = {this.upVote} type="button" value="+" />
      </td>
    </tr>
  }
})

export default Book;
