import React from 'react';
import Layout from '../components/Layout';
import styles from '@/styles/form.module.css'

function Database() {
  const pageTitle = 'Base de données';

  return (
    <Layout pageTitle={pageTitle}>
       <div className={styles.form_container}>
        <div className={styles.button_container}>
          <div className={styles.button}>
            <img className={styles.icon} src="/user.svg" />
            <span className={styles.text}>Ajouter un étidiant </span>
          </div>
        </div>

        <div className={styles.forms}>
          <h3 className={styles.bd_title}>
            Gérer les étudiants
          </h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th colSpan={2} className={styles.headerCell}>
                  ID
                </th>
                <th colSpan={2} className={styles.headerCell}>
                  Nom
                </th>
                <th colSpan={2} className={styles.headerCell}>
                  Prenom
                </th>
                <th colSpan={2} className={styles.headerCell}>
                  Cursus
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
                <td colSpan={2} className={styles.dataCell}>
                  Formulaire 1
                </td>
                <td colSpan={2} className={styles.dataCell}>
                  Formulaire 1
                </td>
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
                <td colSpan={2} className={styles.dataCell}>
                  Formulaire 1
                </td>
                <td colSpan={2} className={styles.dataCell}>
                  Formulaire 1
                </td>
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
                  Formulaire 1
                </td>
                <td colSpan={2} className={styles.dataCell}>
                  Formulaire 1
                </td>
                <td colSpan={2} className={styles.dataCell}>
                  Formulaire 1
                </td>
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
                <td colSpan={2} className={styles.dataCell}>
                  Formulaire 1
                </td>
                <td colSpan={2} className={styles.dataCell}>
                  Formulaire 1
                </td>
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
                  Formulaire 1
                </td>
                <td colSpan={2} className={styles.dataCell}>
                  Formulaire 1
                </td>
                <td colSpan={2} className={styles.dataCell}>
                  Formulaire 1
                </td>
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
                <td colSpan={2} className={styles.dataCell}>
                  Formulaire 1
                </td>
                <td colSpan={2} className={styles.dataCell}>
                  Formulaire 1
                </td>
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
            </tbody>
          </table>



        </div>
      </div>
    </Layout>
  );
}

export default Database;