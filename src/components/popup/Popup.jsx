import React from "react";
import styles from "./Popup.module.css";

function Popup({ action }) {
  return (
    <div className={styles.popup}>
      <div className={styles.box}>
        <i className='fas fa-edit'></i>
        <h2 className='heading'> You can still do more </h2>
        <p>Sign a petition to bring change</p>

        <a
          href='https://chng.it/5NszMVQCyr'
          target='_blank'
          rel='noreferrer noopener'
        >
          <button
            className='secondary'
            onClick={() => [action(false), navigator.clipboard.writeText("-")]}
          >
            Sign The Petition
          </button>
        </a>
      </div>
    </div>
  );
}

export default Popup;
