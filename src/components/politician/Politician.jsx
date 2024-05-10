import React, { useState, useEffect } from "react";
import styles from "./Politician.module.css";

function Politician({ name, state, email, phone }) {
  const [device, setDevice] = useState("");

  useEffect(() => {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
      setDevice("Windows Phone");
    }
    if (/android/i.test(userAgent)) {
      setDevice("Android");
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setDevice("iOS");
    }
    setDevice("unknown");
  }, []);

  const subject = "#IStandWithSampa - IStandWithSampa!";

  const message = encodeURI(
    "Dear sir/ma, I am  a concerned citizen of Sampa, and I'll like to express my displeasure about te recent Curfew which is really affecting economic activies. Thanks!"
  );

  return (
    <div className={styles.politician}>
      <div className={styles.title}>
        <h2> {name} </h2>
      </div>

      <p>
        <b>
          <i className='fas fa-map-marker-alt'></i>
        </b>{" "}
        {state}
      </p>

      {email ? (
        <React.Fragment>
          <a
            href={`mailto:${email}?subject=${subject}&body=${message}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <b>
              <i className='fas fa-envelope'></i>
            </b>
            {email}
          </a>
        </React.Fragment>
      ) : (
        <p>
          <b>
            <i className='fas fa-envelope'></i>
          </b>
          Not available
        </p>
      )}

      {phone ? (
        <React.Fragment>
          {device === "IOS" ? (
            <a href={`sms:${phone}&body=${message}`}>
              <b>
                <i className='fas fa-phone'></i>
              </b>
              {phone}
            </a>
          ) : (
            <a href={`sms:${phone}?body=${message}`}>
              <b>
                <i className='fas fa-phone'></i>
              </b>
              {phone}
            </a>
          )}
        </React.Fragment>
      ) : (
        <p>
          <b>
            <i className='fas fa-phone'></i>
          </b>
          Not available
        </p>
      )}
    </div>
  );
}

export default Politician;
