import React, { Component } from 'react';
import TeamItem from './TeamItem';
// import PropTypes from 'prop-types'

class Teams extends Component {

    // markComplete = (id) => {
    //     console.log(id)
    // }
    render() {
        // console.log(this.props.todos)
        return this.props.members.map((members) => (
            <TeamItem key={members.id} member={members} />
        ))
    }
}

// Teams.propTypes = {
//     members: PropTypes.array.isRequired
// }
export default Teams;
