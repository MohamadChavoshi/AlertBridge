import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Pagination from './Pagination';
import './ObjectStyle/Table.css';

const Table = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 4; // Adjust this value as needed
    const totalPages = Math.ceil(data.length / rowsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentRows = data.slice(startIndex, startIndex + rowsPerPage);

    return (
        <>
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Contact Point <span className="sort-icon"><FontAwesomeIcon icon={faChevronDown} /></span></th>
                        <th>ID</th>
                        <th>Resolved <span className="sort-icon"><FontAwesomeIcon icon={faChevronDown} /></span></th>
                        <th>Failed <span className="sort-icon"><FontAwesomeIcon icon={faChevronDown} /></span></th>
                        <th>Alert Lang</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRows.map((row, index) => (
                        <tr key={index}>
                            <td>{row.contactPoint}</td>
                            <td>{row.id}</td>
                            <td>{row.resolved}</td>
                            <td>{row.failed}</td>
                            <td>{row.alertLang}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ height: '30px' }}></div>
            <div className='PaginationBox' style={{ display: 'flex', justifyContent: 'center' }}>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
};

Table.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            contactPoint: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            resolved: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            failed: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            alertLang: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Table;
