'use client'

import { useState, useEffect } from 'react'
import styles from '@/styles/Countdown.module.css'

export default function Countdown() {
    const weddingDate = new Date('2026-10-23T16:00:00');

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = weddingDate.getTime() - new Date().getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.countdown}>
            <div className="container">
                <h2 className="animate-fade-in-up">Faltan</h2>
                <div className="divider"></div>

                <div className={styles.timerGrid}>
                    <div className={`${styles.timeCard} glass-card animate-scale-in delay-100`}>
                        <div className={styles.number}>{timeLeft.days}</div>
                        <div className={styles.label}>Días</div>
                    </div>

                    <div className={`${styles.timeCard} glass-card animate-scale-in delay-200`}>
                        <div className={styles.number}>{timeLeft.hours}</div>
                        <div className={styles.label}>Horas</div>
                    </div>

                    <div className={`${styles.timeCard} glass-card animate-scale-in delay-300`}>
                        <div className={styles.number}>{timeLeft.minutes}</div>
                        <div className={styles.label}>Minutos</div>
                    </div>

                    <div className={`${styles.timeCard} glass-card animate-scale-in delay-400`}>
                        <div className={styles.number}>{timeLeft.seconds}</div>
                        <div className={styles.label}>Segundos</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
