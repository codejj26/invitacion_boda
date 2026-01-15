'use client'

import styles from '@/styles/Parents.module.css'

export default function Parents() {
    return (
        <section className={styles.parents}>
            <div className="container">
                <h2 className="animate-fade-in-up">Con la bendición de Dios y de nuestros padres</h2>
                <div className="divider"></div>

                <div className={styles.parentsGrid}>
                    {/* Padres del Novio */}
                    <div className={`${styles.parentCard} glass-card animate-fade-in-up delay-100`}>
                        <div className={styles.icon}>
                            <img
                                src="/images/novio.png"
                                alt="Novio"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                                }}
                            />
                        </div>
                        <h3>Padres del Novio</h3>
                        <div className={styles.names}>
                            <p className={styles.parentName}>Wilton Rua Higuita</p>
                            <p className={styles.separator}>&</p>
                            <p className={styles.parentName}>Virsuly  David Valle</p>
                        </div>
                    </div>

                    {/* Padres de la Novia */}
                    <div className={`${styles.parentCard} glass-card animate-fade-in-up delay-200`}>
                        <div className={styles.icon}>
                            <img
                                src="/images/novia.png"
                                alt="Novia"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                                }}
                            />
                        </div>
                        <h3>Padres de la Novia</h3>
                        <div className={styles.names}>
                            <p className={styles.parentName}>Neber Ortega Donado </p>
                            <p className={styles.separator}>&</p>
                            <p className={styles.parentName}> Erica Gutierrez Monterrosa</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
