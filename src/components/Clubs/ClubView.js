import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getClubs, deleteClub } from "../../actions/Clubs";
import { Table, Icon } from "semantic-ui-react";


class ClubView extends Component {
    static propTypes ={
        clubs: PropTypes.array.isRequired,
    };

    componentDidMount() {
        this.props.getClubs();
    }

    render() {
        return (
            <Fragment>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Creator</Table.HeaderCell>
                            <Table.HeaderCell>Created_at</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.props.clubs.map((club) => (
                        <Table.Row>
                            <Table.Cell>club.id</Table.Cell>
                            <Table.Cell>club.title</Table.Cell>
                            <Table.Cell>club.creator</Table.Cell>
                            <Table.Cell>club.created_at</Table.Cell>
                            <Table.Cell>
                                <Icon name='add circle'>
                                <button onClick={this.props.deleteClub.bind(this,club.id) }></button>
                                </Icon>
                                <button onClick={this.props.deleteClub.bind(this,club.id)}>Delete</button>
                            </Table.Cell>
                            
                        </Table.Row>

                        
                        ))}
                    
                    </Table.Body>
                </Table>
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => ({
    clubs: state.clubs.clubs
});

export default connect (mapStateToProps, { getClubs, deleteClub }) (ClubView)
