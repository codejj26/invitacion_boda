'use client'

import styles from '@/styles/DressCode.module.css'

export default function DressCode() {
    return (
        <section className={styles.dressCode}>
            <div className="container">
                <h2 className="animate-fade-in-up">Código de Vestimenta</h2>
                <div className="divider"></div>
                <p className={`${styles.subtitle} animate-fade-in-up delay-100`}>
                    Queremos que te sientas cómodo y elegante en nuestro día especial
                </p>

                <div className={styles.dressCodeGrid}>
                    {/* Código para Hombres */}
                    <div className={`${styles.dressCard} glass-card animate-fade-in-up delay-100`}>
                        <div className={styles.icon}>
                            <img
                                src="/images/novio.png"
                                alt="Caballeros"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                                }}
                            />
                        </div>
                        <h3>Caballeros</h3>
                        <div className={styles.dressDetails}>
                            <p className={styles.dressType}>Formal Elegante (Noche)</p>
                            
                        </div>
                    </div>

                    {/* Código para Mujeres */}
                    <div className={`${styles.dressCard} glass-card animate-fade-in-up delay-200`}>
                        <div className={styles.icon}>
                            <img
                                src="/images/novia.png"
                                alt="Damas"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                                }}
                            />
                        </div>
                        <h3>Damas</h3>
                        <div className={styles.dressDetails}>
                            <p className={styles.dressType}>Formal Elegante (Noche)</p>
                        </div>
                    </div>
                </div>

                {/* Nota especial */}
                <div className={`${styles.specialNote} animate-fade-in-up delay-300`}>
                    <div className={styles.noteIcon}>
                       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    </div>
                    <p>
                        <strong>Nota:</strong> Por favor evita usar blanco
                        ya que están reservado para la novia.
                    </p>
                </div>
            </div>
        </section>
    )
}
