import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import pop from "../../transition/pop.module.css";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <TransitionGroup component="ul" className={styles.list}>
        {contacts.map(({ name, number, id }) => (
          <CSSTransition key={id} timeout={250} classNames={pop} unmountOnExit>
            <li>
              <p>{name}</p>
              <p>{number}</p>
              <button onClick={() => onDelete(id)}>Delete</button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
