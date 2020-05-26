import React from 'react';
import PropTypes from 'prop-types';
import {Pagination} from 'react-bootstrap';
import styles from './CustomPagination.module.css';

const CustomPagination = (props) => {
    let active = 1;
    let items = [];
    const itemsPerPage = props.itemsPerPage;
    for (let i = 1; i < props.count/3+1 ; i ++ ){
        items.push(
            <Pagination.Item key={i} active={i == active}>
                {i}
            </Pagination.Item>
        )
    }
    return(
        <Pagination className={styles.pagination}>
            <Pagination.First />
            <Pagination.Prev />
                {items}
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    )
}
export default CustomPagination;