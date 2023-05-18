import React from 'react';
import Layout from '../components/Layout';
import styles from '@/styles/Home.module.css'

function HomePage() {
  const pageTitle = 'Accueil';

  return (
    <Layout pageTitle={pageTitle}>
      <div className={styles.home}>
      <div className={styles.card_container}>
      {/* Insérer les cartes ici */}
      <div className={styles.card_pair}>
        <div className={styles.card}>Carte 1</div>
        <div className={styles.card}>Carte 2</div>
      </div>
      <div className={styles.card_pair}>
        <div className={styles.card}>Carte 3</div>
        <div className={styles.card}>Carte 4</div>
      </div>
    </div>
    </div>
    </Layout>
  );
}

export default HomePage;