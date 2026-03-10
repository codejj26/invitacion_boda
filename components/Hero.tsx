'use client'

import styles from '@/styles/Hero.module.css'
import MusicPlayer from './MusicPlayer'

interface HeroProps {
    guestName?: string;
    passes?: number;
}

export default function Hero({ guestName, passes }: HeroProps) {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                {guestName && (
                    <div className={`${styles.greeting} animate-fade-in-down`}>
                        <p>Querido/a</p>
                        <h3 className="gradient-text">{guestName}</h3>
                        {passes && <p className={styles.passes}>Pases: {passes}</p>}
                    </div>
                )}

                <div className={styles.names}>
                    <h1 className={`${styles.groom} animate-slide-in-left delay-200`}>
                        Juan Jose
                    </h1>
                    <div className={`${styles.ampersand} animate-scale-in delay-300`}>
                        &
                    </div>
                    <h1 className={`${styles.bride} animate-slide-in-right delay-200`}>
                        Leidy
                    </h1>
                </div>

                <div className={`${styles.subtitle} animate-fade-in-up delay-400`}>
                    <h1>¡Nos casamos!</h1>
                    <p className={styles.date}>23/OCTUBRE/2026</p>
                </div>

                <MusicPlayer />

                <div className={styles.verse}>
                    <strong>MATEO 19:6</strong>
                    <p className={styles.description}>
                        Así que no son ya más dos, sino una sola carne; por tanto, lo que Dios juntó, no lo separe el hombre.
                    </p>
                </div>
            </div>
        </section>
    )
}
