import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


export default function Sidebar() {
    return (
        <Link to="/client/add" className="btn btn-success btn-block">
            <FontAwesomeIcon icon={faPlus} /> New
        </Link>
    )
}
