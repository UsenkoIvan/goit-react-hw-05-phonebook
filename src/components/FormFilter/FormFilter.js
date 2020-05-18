import React from "react";
import PropTypes from "prop-types";
import styles from "./FormFilter.module.css";

const FormFilter = ({ onChange }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Find Contact with Name
        <input type="text" onChange={onChange} className={styles.input} />
      </label>
    </div>
  );
};

FormFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FormFilter;
