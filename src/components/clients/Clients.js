import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

class Clients extends Component {
    render() {
        const clients = [{
            id: '121212',
            firstName: 'Akbar',
            lastName: 'Mamdooghi',
            email: 'aki@mamdooghi.org',
            phone: '333-444-2222',
            balance: '23'
        },{
            id: '9898',
            firstName: 'Goodarz',
            lastName: 'Samaniyan',
            email: 'goodarz.samaniyam@gmail.com',
            phone: '333-444-4565',
            balance: '50'
        }];

        if (clients) {
            return (
                <div className="row">
                    <div className="col-md-6">
                        <h2>
                            {' '}
                            <FontAwesomeIcon icon={faUsers} /> Clients{' '}
                        </h2>
                    </div>
                    <div className="col-md-6">
                    </div>
                    <table className="table table-striped">
                        <thead className='thead-inverse'>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map(c => (
                                <tr key={c.id}>
                                    <td>{c.firstName} {c.lastName}</td>
                                    <td>{c.email}</td>
                                    <td>${parseFloat(c.balance).toFixed(2)}</td>
                                    <td>
                                        <Link to={`/client/${c.id}`} className="btn btn-secondary btn-sm">
                                        <FontAwesomeIcon icon={faArrowCircleRight} /> Details 
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )

        } else {
            return <h1>Loading</h1>;
        }
    }
}

export default Clients;