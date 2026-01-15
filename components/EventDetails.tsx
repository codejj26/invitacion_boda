'use client'

import styles from '@/styles/EventDetails.module.css'

export default function EventDetails() {
    return (
        <section className={styles.eventDetails}>
            <div className="container">
                <h2 className="animate-fade-in-up">Detalles del Evento</h2>
                <div className="divider"></div>
                 <strong>ECLESIASTÉS 4:12</strong>
                <p className={styles.description}>
                    Y si alguno prevaleciere contra uno, dos le resistirán; y cordón de tres dobleces no se rompe pronto.
                </p>
                <div className="divider"></div>
                <div className={styles.eventsGrid}>
                    {/* Ceremonia */}
                    <div className={`${styles.eventCard} glass-card animate-fade-in-up delay-100`}>
                        <div className={styles.icon}>
                            <img
                                src="/images/Anillos.png"
                                alt="Anillos de boda"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                                    transform: 'scale(1.2)'
                                }}
                            />
                        </div>
                        <h3>Ceremonia Religiosa</h3>
                        <div className={styles.time}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                            <span>6:00 PM</span>
                        </div>
                    </div>

                    {/* Recepción */}
                    <div className={`${styles.eventCard} glass-card animate-fade-in-up delay-200`}>
                        <div className={styles.icon}>
                            <img
                                src="/images/reception.png"
                                alt="Recepción"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                                    transform: 'scale(1.2)'
                                }}
                            />
                        </div>
                        <h3>Recepción</h3>
                        <div className={styles.time}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                            <span>8:00 PM</span>
                        </div>
                    </div>
                    {/* Fiesta */}
                    <div className={`${styles.eventCard} glass-card animate-fade-in-up delay-300`}>
                        <div className={styles.icon}>
                            <img
                                src="/images/copas.png"
                                alt="Copas brindando"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                                    transform: 'scale(1.3)'
                                }}
                            />
                        </div>
                        <h3>Fiesta</h3>
                        <div className={styles.time}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                            <span>10:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
