import React from 'react';
import Layout from '../components/Layout';
import styles from '@/styles/send.module.css'

function Send() {
  const pageTitle = 'Envois et rappels';

  return (
    <Layout pageTitle={pageTitle}>
      <div className={styles.status}>
        <h3> Status</h3>
      </div>
      <div className={styles.section_container}>
      
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Envois</h2>
        <div className={styles.section_content}>
          <div className={`${styles.envoiItem} ${styles.item}`} >
            <p>Drag & Drop item</p>
          </div>
          <div className={`${styles.envoiItem} ${styles.item}`} >
            <p>Drag & Drop item</p>
          </div>
          <div className={`${styles.envoiItem} ${styles.item}`} >
            <p>Drag & Drop item</p>
          </div>
          <div className={`${styles.envoiItem} ${styles.item}`} >
            <p>Drag & Drop item</p>
          </div>
          <div className={`${styles.envoiItem} ${styles.item}`} >
            <p>Drag & Drop item</p>
          </div>
          <div className={`${styles.envoiItem} ${styles.item}`} >
            <p>Drag & Drop item</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Rappels</h2>
        <div className={styles.section_content}>
          <div className={`${styles.rappelItem} ${styles.item}`} >
            <p>Drag & Drop item</p>
          </div>
          <div  className={`${styles.rappelItem} ${styles.item}`} >
            <p>Drag & Drop item</p>
          </div>
          <div className={`${styles.rappelItem} ${styles.item}`} >
            <p>Drag & Drop item</p>
          </div>
          <div  className={`${styles.rappelItem} ${styles.item}`} >
            <p>Drag & Drop item</p>
          </div>
          <div className={`${styles.rappelItem} ${styles.item}`} >
            <p>Drag & Drop item</p>
          </div>
          <div  className={`${styles.rappelItem} ${styles.item}`} >
            <p>Drag & Drop item</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Clôture</h2>
        <div className={styles.section_content}>
          <div  className={`${styles.clotureItem} ${styles.item}`} >
            <p>Drag & Drop item</p>
          </div>
          <div className={`${styles.clotureItem} ${styles.item}`}>
          <p>Drag & Drop item</p>
          </div>
          <div  className={`${styles.clotureItem} ${styles.item}`} >
            <p>Drag & Drop item</p>
          </div>
          <div className={`${styles.clotureItem} ${styles.item}`}>
          <p>Drag & Drop item</p>
          </div>
          <div  className={`${styles.clotureItem} ${styles.item}`} >
            <p>Drag & Drop item</p>
          </div>
          <div className={`${styles.clotureItem} ${styles.item}`}>
          <p>Drag & Drop item</p>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}

export default Send;