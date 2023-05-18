import React from 'react';
import Layout from '../components/Layout';
import styles from '@/styles/form.module.css'

function Form() {
  const pageTitle = 'Formulaires';

  return (
    <Layout pageTitle={pageTitle}>
      <div className={styles.form_container}>
        <div className={styles.button_container}>
          <div className={styles.button}>
            <img className={styles.icon} src="/formWhite.svg" />
            <span className={styles.text}>Ajouter un formulaire </span>
          </div>
        </div>

        <div className={styles.forms}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th colSpan={2} className={styles.headerCell}>
                  Formulaires
                </th>
                <th colSpan={2} className={`${styles.headerCell} ${styles.center}`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.row}>
                <td colSpan={2} className={styles.dataCell}>
                  Formulaire 1
                </td>
                <td className={styles.actionCell}>
                  <a href="#" className={`${styles.actionLink} ${styles.green}`}>
                    Editer
                  </a>
                </td>
                <td className={styles.actionCell}>
                  <a href="#" className={`${styles.actionLink} ${styles.red}`}>
                    Supprimer
                  </a>
                </td>
              </tr>
              <tr className={styles.row}>
                <td colSpan={2} className={styles.dataCell}>
                  Formulaire 2
                </td>
                <td className={styles.actionCell}>
                  <a href="#" className={`${styles.actionLink} ${styles.green}`}>
                    Editer
                  </a>
                </td>
                <td className={styles.actionCell}>
                  <a href="#" className={`${styles.actionLink} ${styles.red}`}>
                    Supprimer
                  </a>
                </td>
              </tr>
              <tr className={styles.row}>
                <td colSpan={2} className={styles.dataCell}>
                  Formulaire 1
                </td>
                <td className={styles.actionCell}>
                  <a href="#" className={`${styles.actionLink} ${styles.green}`}>
                    Editer
                  </a>
                </td>
                <td className={styles.actionCell}>
                  <a href="#" className={`${styles.actionLink} ${styles.red}`}>
                    Supprimer
                  </a>
                </td>
              </tr>
              <tr className={styles.row}>
                <td colSpan={2} className={styles.dataCell}>
                  Formulaire 2
                </td>
                <td className={styles.actionCell}>
                  <a href="#" className={`${styles.actionLink} ${styles.green}`}>
                    Editer
                  </a>
                </td>
                <td className={styles.actionCell}>
                  <a href="#" className={`${styles.actionLink} ${styles.red}`}>
                    Supprimer
                  </a>
                </td>
              </tr>
              <tr className={styles.row}>
                <td colSpan={2} className={styles.dataCell}>
                  Formulaire 1
                </td>
                <td className={styles.actionCell}>
                  <a href="#" className={`${styles.actionLink} ${styles.green}`}>
                    Editer
                  </a>
                </td>
                <td className={styles.actionCell}>
                  <a href="#" className={`${styles.actionLink} ${styles.red}`}>
                    Supprimer
                  </a>
                </td>
              </tr>
              <tr className={styles.row}>
                <td colSpan={2} className={styles.dataCell}>
                  Formulaire 2
                </td>
                <td className={styles.actionCell}>
                  <a href="#" className={`${styles.actionLink} ${styles.green}`}>
                    Editer
                  </a>
                </td>
                <td className={styles.actionCell}>
                  <a href="#" className={`${styles.actionLink} ${styles.red}`}>
                    Supprimer
                  </a>
                </td>
              </tr>
            </tbody>
          </table>



        </div>
      </div>

    </Layout>
  );
}

export default Form;