import React from "react";

class AddTodo extends React.Component {

    state = {
        title: '',
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        })
    }
    handleAddTodo = () => {
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        this.props.addNew(todo);

    }

   
    render() {
        let { title } = this.state;
        return (


            <div className="w-4/5  bg-white flex flex-row rounded-full border-2 outline-0">
                <input
                    className="ml-5 grow outline-0"
                    placeholder="Nhập vào phần tử"
                    value={title} onChange={(event) => this.handleOnChangeTitle(event)}
                    type="text" />
                <button
                    className="h-7 w-7 rounded-full text-xl inline-block align-text-top "
                    type="button"
                    onClick={() => this.handleAddTodo()}
                >+</button>
            </div>
        )
    }
}

export default AddTodo;