import React from "react";
import AddTodo from "./AddTodo";
class ListTodo extends React.Component {

    state = {
        ListTodos: [
            { id: 'todo1', title: 'Doing homeword' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'fixing' },
        ],

        editTodo: {}
    }

    addNew = (todo) => {

        //let curentTodos = this.state.ListTodos;
        this.setState({
            ListTodos: [...this.state.ListTodos, todo],
            // ListTodos: curentTodos,
        })
    }

    handleDeleteTodo = (todo) => {
        let curentTodos = this.state.ListTodos;
        curentTodos = curentTodos.filter(item => item.id != todo.id);
        this.setState({
            ListTodos: curentTodos
        })
    }

    handleEditTodo = (todo) => {
        let { editTodo, ListTodos } = this.state;

        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...ListTodos];

            let objIndex = listTodosCopy.findIndex(item => item.id === todo.id);

            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                ListTodos: listTodosCopy,
                editTodo: {}
            })
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })


    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }



    render() {
        let { ListTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        return (

            <div className="w-screen h-screen flex flex-col items-center mt-20">
                <div className="w-1/3 h-2/3 border-4 flex flex-col items-center bg-slate-400">
                    <div className="w-full">
                        <h1 className=" text-center font-serif text-2xl py-8">TodoList</h1>
                    </div>
                    <AddTodo addNew={this.addNew} />
                    <div className="w-4/5 grow mt-10">
                        <ul className="w-full mt-2 flex flex-col gap-y-2">
                            {ListTodos && ListTodos.length > 0 &&
                                ListTodos.map((item, index) => {
                                    return (
                                        <li className="flex todo-child gap-1 border-b-2" key={item.id}>
                                            {/* Hiển thị */}
                                            {isEmptyObj === true ?
                                                <span className="grow"> {index + 1} - {item.title} </span>
                                                :
                                                <>
                                                    {editTodo.id === item.id ?
                                                        <span className="grow">
                                                            {index + 1} - <input
                                                                value={editTodo.title}
                                                                onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                            />
                                                        </span>
                                                        :
                                                        <span className="grow">
                                                            {index + 1} - {item.title}
                                                        </span>
                                                    }
                                                </>

                                            }


                                            {/* Sửa lỗi */}
                                            <button className="border-x-2 border-t-2"
                                                onClick={() => this.handleEditTodo(item)}
                                            >
                                                {isEmptyObj === false && editTodo.id === item.id ?
                                                    'Save' : 'Edit'
                                                }
                                            </button>

                                            {/* Xoá todo */}
                                            <button className="border-x-2 border-t-2"
                                                onClick={() => this.handleDeleteTodo(item)}
                                            >delete</button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                </div>
            </div>
        )

    }
}

export default ListTodo;