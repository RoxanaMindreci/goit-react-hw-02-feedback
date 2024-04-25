import React from 'react';
import PropTypes from 'prop-types'; 
import css from './Section.module.css';

export const Section = ({ children, title }) => {
  return (
    <div className={css.section}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
