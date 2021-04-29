import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoAlbum from '../../components/Todolist';
import QueryString from 'query-string';
ListPage.propTypes = {};

function ListPage(props) {
    const inittodolist = [
        {
            id: 1,
            name: 'anh yeu em',
            title: 'abc',
            status: 'completed',
        },
        {
            id: 2,
            name: 'anh yeu em',
            title: 'abc',
            status: 'new',
        },
        {
            id: 3,
            name: 'anh yeu em',
            title: 'xyz',
            status: 'completed',
        },
    ];
    const location = useLocation();
    const history = useHistory();
    const math = useRouteMatch();
    const [todoList, settodoList] = useState(inittodolist);
    const [filterStatus, setfilterStatus] = useState(() => {
        const params = QueryString.parse(location.search);
        console.log(params);
        return params.status || 'all';
    });
    useEffect(() => {
        const params = QueryString.parse(location.search);
        setfilterStatus(params.status || 'all');
    }, [location.search]);
    const handleClick = (todo, idx) => {
        //clone object to new one
        const newtodoList = [...todoList];
        console.log(todo, idx);
        //toggle status
        newtodoList[idx] = {
            ...newtodoList[idx],
            status: newtodoList[idx].status === 'completed' ? 'new' : 'completed',
        };
        //update
        settodoList(newtodoList);
    };
    const ShowAll = () => {
        // setfilterStatus('all');
        const queryParams = { status: 'all' };
        history.push({
            pathname: math.path,
            queryParams,
            search: QueryString.stringify(queryParams),
        });
    };
    const ShowNew = () => {
        const queryParams = { status: 'new' };
        history.push({
            pathname: math.path,
            queryParams,
            search: QueryString.stringify(queryParams),
        });
    };
    const ShowCompleted = () => {
        const queryParams = { status: 'completed' };
        history.push({
            pathname: math.path,
            queryParams,
            search: QueryString.stringify(queryParams),
        });
    };
    const renderFiltered = useMemo(() => {
       return todoList.filter((todo) => filterStatus == 'all' || filterStatus == todo.status);
    }, [todoList, filterStatus]);
    return (
        <div>
            <TodoAlbum todoList={renderFiltered} onclickTodo={handleClick} />
            <button onClick={ShowAll}>Show All</button>
            <button onClick={ShowNew}>Show New</button>
            <button onClick={ShowCompleted}>Show Completed</button>
        </div>
    );
}

export default ListPage;
