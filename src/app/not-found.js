import React from "react";
import styles from "./not-found.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className={`d-flex align-items-center justify-content-center vh-100 ${styles.wrapper}`}
    >
      <div className="text-center">
        <h1 className={`display-1 fw-bold ${styles.code}`}>404</h1>
        <p className={`fs-3 ${styles.oops}`}>
          <span className={styles.oops}>Oops!</span> Page not found.
        </p>
        <p className={`lead ${styles.oops}`}>
          The page you are looking for does not exist.
        </p>
        <Link href="/" className={`btn ${styles.button}`}>
          Go Home
        </Link>
      </div>
    </div>
  );
}
