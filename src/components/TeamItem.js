import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class TeamItem extends Component {
    getStyle = () => {
        return {
            background: '#e1b533',
            padding: '10px',
            borderBottom: '5px #fff solid',
            marginLeft: '500px',
            marginRight: '500px',
        }
    }

    // markComplete = (e) => {
    //     console.log(this.props)
    // }

    render() {
        const { username, email, role } = this.props.member;
        return (
            <div style={this.getStyle()}>
                <p>

                    Username: {username} <br />
                    Role: {role} <br />
                    Email: {email}
                    <button style={btnStyle}>Edit</button>
                </p>
            </div >

        )
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    cursor: 'pointer',
    float: 'right'
}

// TodoItem.propTypes = {
//     todo: PropTypes.object.isRequired
// }

export default TeamItem
