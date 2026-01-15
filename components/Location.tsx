'use client'

import styles from '@/styles/Location.module.css'

export default function Location() {
    // Dirección del lugar
    const venueAddress = "Av. 33 #80c-30, Laureles - Estadio, Medellín, Antioquia";

    // URL para el botón "Cómo llegar" (abre Google Maps con direcciones)
    const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=6.23943267161034,-75.60327229687293";

    return (
        <section className={styles.location}>
            <div className="container">
                <h2 className="animate-fade-in-up">Ubicación</h2>
                <div className="divider"></div>

                <div className={styles.content}>
                    <div className={`${styles.info} animate-fade-in-up delay-100`}>
                        <div className={styles.icon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <h3>Salón de Eventos "San Angelo Zafiro"</h3>
                        <p className={styles.address}>{venueAddress}</p>

                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Cómo Llegar
                        </a>
                    </div>

                    <div className={`${styles.mapContainer} animate-fade-in-up delay-200`}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6773.055296940794!2d-75.60327229687293!3d6.23943267161034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44299757b8ea97%3A0xba9e3d308e3e5864!2sAv.%2033%20%2380c-30%2C%20Laureles%20-%20Estadio%2C%20Medell%C3%ADn%2C%20Laureles%2C%20Medell%C3%ADn%2C%20Antioquia!5e1!3m2!1ses-419!2sco!4v1768273763733!5m2!1ses-419!2sco"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa de ubicación del evento"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
