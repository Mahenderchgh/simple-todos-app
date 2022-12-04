// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-container">
      <div className="card-container">
        <p className="todo-title">{title}</p>
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
