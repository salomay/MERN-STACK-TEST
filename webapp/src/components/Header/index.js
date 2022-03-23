import React, { Component } from 'react';
import { PageHeader, Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { Link,Redirect } from 'react-router-dom';
import { userActions } from '../../store/actions';
import { reduxForm, Field } from 'redux-form';

class Header extends Component {
  render() {
    const { user } = this.props;


    const logOut = () => {
      localStorage.removeItem('token');
      this.props.signOutRequest(user);
      window.location.reload(); 
    };

    return (
      <PageHeader>
        <Row justify="space-around">
          <Col>
            <h2>Login System</h2>
          </Col>
          <Col>
            {user._id ? (
              <Button onClick={logOut}>Logout</Button>
            ) : (
              <Button>
                <Link to="/signin">Login</Link>
              </Button>
            )}
          </Col>
        </Row>
      </PageHeader>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOutRequest: (user) => dispatch(userActions.signOutRequest(user)),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'signOut' })(Header));
