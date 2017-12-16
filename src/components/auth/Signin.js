import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../../actions';

const renderInput = field => {
    const { input, type } = field;
    return (
        <div>
            <input {...input} type={type} className="form-control" />
        </div>
    );
}

class Signin extends Component {
    handleFormSubmit({ email, password }) {
        this.props.signInUser({ email, password });
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            )
        }
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

                <div className="form-group">
                    <label>Email:</label>
                    <Field name="email"
                        type="email" component={renderInput} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <Field name="password"
                        type="password" component={renderInput} />
                </div>
                <div className="form-group">
                    {this.renderAlert()}
                    <button action="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        );
    }
}

// function mapStateToProps(state) {
//     return { form: state.form };
// }

// Signin = connect(mapStateToProps, actions)(Signin);
// Signin = reduxForm({
//     form: 'signin'
// })(Signin);
// export default Signin;

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(reduxForm({
    form: "signin"
})(Signin));

// function mapStateToProps(state) {
//     return { errorMessage: state.auth.error };
// }

// export default reduxForm({
//     form: 'signin',
//     fields: ['email', 'password']
// }, mapStateToProps, actions)(Signin);