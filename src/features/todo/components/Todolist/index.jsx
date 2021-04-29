import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';
TodoAlbum.propTypes = {
    todoList: PropTypes.object,
    onclickTodo: PropTypes.func,
};
TodoAlbum.defaultProps = {
    todoList: [],
    onclickTodo: null,
};
function TodoAlbum({ todoList, onclickTodo }) {
    const handletodoClick = (todo, idx) => {
        if (!onclickTodo) return;
        onclickTodo(todo, idx);
    };
    return (
        <ul className="Anbumlist">
            {todoList.map((todo, idx) => (
                <li
                    key={todo.id}
                    className={classNames({
                        'todo-item': true,
                        completed: todo.status === 'completed',
                    })}
                    onClick={() => handletodoClick(todo, idx)}
                >
                    <p>{todo.title}</p>
                </li>
            ))}
        </ul>
    );
}

export default TodoAlbum;
