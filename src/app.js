import React, {Component} from 'react'
import Table from './table'
import Form from './form'

class App extends Component {

    state = {
        empList : []
    }

    removeEmployee = (index) => {
        const {empList} = this.state

        this.setState({
            empList: empList.filter((row, idx) => {
                return idx !== index
            })
        })
    }

    handleSubmit = (emp) => {
        this.setState({
            empList : [...this.state.empList, emp]
        })
    }

    render() {

        const {empList} = this.state

        return (
            <div className="container">
                <h1> Employee Details </h1>
                <Table salaryData={empList} 
                removeEmployee={this.removeEmployee}/>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App