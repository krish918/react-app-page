import React, {Component} from 'react'

class Form extends Component {
    initialState = {
        empname: '',
        salary: '',
        phone: '',
        age: '',
        gender: '',
        inputClass: 'form-input',
    }

    state = this.initialState
    inputClass = 'form-input'

    handleChange= (ev) => {
        const {name, value} = ev.target
        this.setState({
            [name]: value,
        })
    }

    submitForm = (n, sal, a, p, g) => {
        if (n.trim().length === 0 || sal.trim().length === 0 ||
        p.trim().length === 0 || a.trim().length === 0 || 
        g.trim().length === 0) {
            this.setState({
                inputClass: 'form-input error-input' 
            })
            return
        }

        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
        this.setState({
            gender: g
        })
    }

    render() {
        const {empname, salary, phone, age, gender} = this.state

        return (
            <form>

            <div className={this.state.inputClass}>
            <div className="form-label">
                <label htmlFor="empname">Name</label>
            </div>
            <div className="form-item">
            <input 
            type="text"
            id="empname"
            name="empname"
            value={empname}
            onChange={this.handleChange} />
            </div>
            </div>

            <div className={this.state.inputClass}>
            <div className="form-label">
                <label htmlFor="salary">Salary</label>
            </div>
            <div className="form-item">
            <input
            type="text"
            id="salary"
            name="salary"
            value={salary}
            onChange={this.handleChange} />
            </div>
            </div>

            <div className={this.state.inputClass}>
            <div className="form-label">
                <label htmlFor="age">Age</label>
            </div>
            <div className="form-item">
            <input
            type="text"
            id="age"
            name="age"
            value={age}
            onChange={this.handleChange} 
            />
            </div>
            </div>

            <div className={this.state.inputClass}>
            <div className="form-label">
                <label htmlFor="gender">Gender</label>
            </div>
            <div className="form-item radio-item-container">
            
            <div className="radio-item">
            <input 
            type="radio" 
            name="gender"
            value="Female"
            onChange={this.handleChange}
            /> Female
            </div>

            <div className="radio-item">
            <input 
            type="radio" 
            name="gender"
            value="Male"
            onChange={this.handleChange}
            /> Male
            </div>
            
            </div>
            </div>

            <div className={this.state.inputClass}>
            <div className="form-label">
                <label htmlFor="phone">Phone Number</label>
            </div>
            <div className="form-item">
            <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={this.handleChange} />
            </div>
            </div>

            <div className="form-input">
            <input type="button" value="SUBMIT" 
            onClick={() => this.submitForm(empname,salary, 
                age, phone, gender)} />
            </div>
            </form>
        ) 
    }
}

export default Form