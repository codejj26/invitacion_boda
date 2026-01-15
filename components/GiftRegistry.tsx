'use client'

import styles from '@/styles/GiftRegistry.module.css'

export default function GiftRegistry() {
    return (
        <section className={styles.giftRegistry}>
            <div className="container">
                <h2 className="animate-fade-in-up">Mesas de Regalo</h2>
                <div className="divider"></div>
                <p className={`${styles.subtitle} animate-fade-in-up delay-100`}>
                    Su amor y apoyo nos dan alas para volar juntos.
                </p>

                <div className={styles.giftsGrid}>
                    {/* Lluvia de Sobres */}
                    <div className={`${styles.giftCard} glass-card animate-fade-in-up delay-200`}>
                        <div className={styles.iconWrapper}>
                            <div className={styles.icon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="M2 8h20" />
                                    <path d="M6 12h4" />
                                </svg>
                            </div>
                            <div className={styles.sparkles}>
                                <span className={styles.sparkle}>✨</span>
                                <span className={styles.sparkle}>✨</span>
                                <span className={styles.sparkle}>✨</span>
                            </div>
                        </div>

                        <h3>Lluvia de Sobres</h3>
                        <p className={styles.description}>
                            Si deseas obsequiarnos un detalle monetario,
                            habrá un buzón especial durante la recepción
                        </p>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                                <span>Buzón en la recepción</span>
                            </div>
                        </div>
                    </div>

                    {/* Mesa de Regalos */}
                    <div className={`${styles.giftCard} glass-card animate-fade-in-up delay-300`}>
                        <div className={styles.iconWrapper}>
                            <div className={styles.icon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 12v10H4V12" />
                                    <path d="M2 7h20v5H2z" />
                                    <path d="M12 22V7" />
                                    <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
                                    <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
                                </svg>
                            </div>
                            <div className={styles.sparkles}>
                                <span className={styles.sparkle}>🎁</span>
                                <span className={styles.sparkle}>🎁</span>
                                <span className={styles.sparkle}>🎁</span>
                            </div>
                        </div>

                        <h3>Mesa de Regalos</h3>
                        <p className={styles.description}>
                            Los regalos que nos deseas obsequiar
                        </p>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                                <span>En La mesa de los regalos</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mensaje adicional */}
                <div className={`${styles.thankYouNote} animate-fade-in-up delay-400`}>
                    <p>
                        Lo más importante para nosotros es compartir este día especial contigo.
                        <br />
                        <strong>¡Tu presencia es el mejor regalo!</strong>
                        <br />
                        <br />
                    </p>
                </div>
            </div>
        </section>
    )
}
