'use client'

import styles from '@/styles/Gallery.module.css'

export default function Gallery() {
    const images = [
        { id: 1, src: '/images/img1.png', alt: 'Foto 1' },
        { id: 2, src: '/images/img2.png', alt: 'Foto 2' },
        { id: 3, src: '/images/img3.png', alt: 'Foto 3' },
        { id: 4, src: '/images/img4.png', alt: 'Foto 4' },
        { id: 5, src: '/images/img5.png', alt: 'Foto 5' },
        { id: 6, src: '/images/img6.png', alt: 'Foto 6' },
    ];

    return (
        <section className={styles.gallery}>
            <div className="container">
                <h2 className="animate-fade-in-up">Momentos Especiales</h2>
                <div className="divider"></div>
                <p className={styles.subtitle}>Pequeños instantes que se convirtieron en recuerdos eternos.</p>
                <strong>CANTARES 8:7</strong>
                <p className={styles.description}>
                    Las muchas aguas no podrán apagar el amor,
                    Ni lo ahogarán los ríos.
                    Si diese el hombre todos los bienes de su casa por este amor,
                    De cierto lo menospreciarían.
                </p>
                <div className="divider"></div>
                <div className={styles.imageGrid}>
                    {images.map((image, index) => (
                        <div key={image.id} className={styles.imageWrapper}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                onError={(e) => {
                                    // Placeholder si la imagen no existe
                                    e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%23e8dcc4'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%23d4af37'%3EFoto ${image.id}%3C/text%3E%3C/svg%3E`;
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
