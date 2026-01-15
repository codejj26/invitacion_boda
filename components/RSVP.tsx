'use client'

import { useState } from 'react'
import styles from '@/styles/RSVP.module.css'

interface RSVPProps {
    guestName?: string;
    guestId?: string;
}

export default function RSVP({ guestName, guestId }: RSVPProps) {
    const [attending, setAttending] = useState<string>('');
    const [numberOfGuests, setNumberOfGuests] = useState<number>(1);
    const [guestNames, setGuestNames] = useState<string[]>(['']);
    const [submitted, setSubmitted] = useState(false);

    const handleAttendingChange = (value: string) => {
        setAttending(value);
        if (value === 'no') {
            setNumberOfGuests(0);
            setGuestNames(['']); // Inicializar con un nombre vacío para quien no asiste
        } else {
            setNumberOfGuests(1);
            setGuestNames(['']);
        }
    };

    const handleNumberOfGuestsChange = (num: number) => {
        setNumberOfGuests(num);
        // Crear array de nombres vacíos según el número de personas
        const newNames = Array(num).fill('').map((_, index) => guestNames[index] || '');
        setGuestNames(newNames);
    };

    const handleNameChange = (index: number, value: string) => {
        const newNames = [...guestNames];
        newNames[index] = value;
        setGuestNames(newNames);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validar que todos los nombres estén llenos
        if (attending === 'yes') {
            const allNamesFilled = guestNames.every(name => name.trim() !== '');
            if (!allNamesFilled) {
                alert('Por favor completa todos los nombres de los asistentes');
                return;
            }
        }

        // Validar que quien no asiste también ponga su nombre
        if (attending === 'no' && !guestNames[0]?.trim()) {
            alert('Por favor ingresa tu nombre');
            return;
        }

        try {
            // Preparar los datos para enviar
            const formData = {
                guestId,
                attending,
                numberOfGuests: attending === 'yes' ? numberOfGuests : 0,
                guestNames: attending === 'yes' ? guestNames : [guestNames[0]]
            };

            // Obtener la URL del Google Script desde las variables de entorno
            const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

            if (!scriptUrl) {
                console.error('URL del Google Script no configurada');
                alert('Error de configuración. Por favor contacta al administrador.');
                return;
            }

            // Enviar los datos a Google Sheets
            const response = await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors', // Importante para Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            // Con mode: 'no-cors', no podemos leer la respuesta, pero si llegamos aquí, se envió
            console.log('Confirmación enviada exitosamente');
            setSubmitted(true);

        } catch (error) {
            console.error('Error al enviar la confirmación:', error);
            alert('Hubo un error al enviar tu confirmación. Por favor intenta de nuevo.');
        }
    };

    if (submitted) {
        return (
            <section className={styles.rsvp}>
                <div className="container">
                    <div className={`${styles.successMessage} animate-scale-in`}>
                        <div className={styles.successIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                <path d="M22 4L12 14.01l-3-3" />
                            </svg>
                        </div>
                        <h2>¡Gracias por confirmar!</h2>
                        <p>
                            {attending === 'yes'
                                ? 'Hemos recibido tu confirmación. ¡Te esperamos con mucha ilusión!'
                                : 'Lamentamos que no puedas asistir. ¡Gracias por avisarnos!'}
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.rsvp}>
            <div className="container">
                <h2 className="animate-fade-in-up">Confirma tu Asistencia</h2>
                <div className="divider"></div>
                <p className={styles.subtitle}>
                    Tu presencia es muy importante para nosotros
                </p>

                <form onSubmit={handleSubmit} className={`${styles.form} glass-card animate-fade-in-up delay-100`}>
                    {/* Paso 1: ¿Asistirás? */}
                    <div className={styles.formGroup}>
                        <label htmlFor="attending">¿Asistirás a nuestra boda? *</label>
                        <select
                            id="attending"
                            value={attending}
                            onChange={(e) => handleAttendingChange(e.target.value)}
                            required
                            className={styles.selectLarge}
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="yes">Sí, asistiré con mucho gusto ✨</option>
                            <option value="no">No podré asistir 😢</option>
                        </select>
                    </div>

                    {/* Paso 2: Número de personas (solo si asiste) */}
                    {attending === 'yes' && (
                        <>
                            <div className={styles.formGroup}>
                                <label htmlFor="numberOfGuests">¿Cuántas personas asistirán? (Máximo 4) *</label>
                                <select
                                    id="numberOfGuests"
                                    value={numberOfGuests}
                                    onChange={(e) => handleNumberOfGuestsChange(parseInt(e.target.value))}
                                    required
                                    className={styles.selectLarge}
                                >
                                    <option value="1">1 persona</option>
                                    <option value="2">2 personas</option>
                                    <option value="3">3 personas</option>
                                    <option value="4">4 personas</option>
                                </select>
                            </div>

                            {/* Paso 3: Nombres de los asistentes */}
                            <div className={styles.namesSection}>
                                <h3 className={styles.namesSectionTitle}>Nombres de los asistentes</h3>
                                <p className={styles.namesSectionSubtitle}>
                                    El primer nombre debe ser el titular de la invitación
                                </p>

                                {guestNames.map((name, index) => (
                                    <div key={index} className={styles.formGroup}>
                                        <label htmlFor={`guest-${index}`}>
                                            {index === 0 ? 'Titular de la invitación *' : `Acompañante ${index} *`}
                                        </label>
                                        <input
                                            type="text"
                                            id={`guest-${index}`}
                                            value={name}
                                            onChange={(e) => handleNameChange(index, e.target.value)}
                                            required
                                            placeholder={index === 0 ? 'Nombre completo del titular' : `Nombre completo del acompañante ${index}`}
                                            className={index === 0 ? styles.primaryInput : ''}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Campo de nombre para quien no asiste */}
                    {attending === 'no' && (
                        <div className={styles.formGroup}>
                            <label htmlFor="noAttendingName">Tu nombre completo *</label>
                            <input
                                type="text"
                                id="noAttendingName"
                                value={guestNames[0] || ''}
                                onChange={(e) => handleNameChange(0, e.target.value)}
                                required
                                placeholder="Nombre completo"
                                className={styles.primaryInput}
                            />
                        </div>
                    )}

                    <button type="submit" className="btn-primary">
                        {attending === 'yes' ? 'Confirmar Asistencia' : attending === 'no' ? 'Enviar Respuesta' : 'Enviar'}
                    </button>
                </form>
            </div>
        </section>
    )
}
