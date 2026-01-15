export interface Guest {
    id: string;
    name: string;
    passes: number;
}

export const guests: Guest[] = [
    { id: 'familia-garcia', name: 'Familia García', passes: 4 },
    { id: 'juan-perez', name: 'Juan Pérez', passes: 2 },
    { id: 'maria-lopez', name: 'María López', passes: 1 },
    { id: 'carlos-rodriguez', name: 'Carlos Rodríguez y familia', passes: 3 },
    { id: 'ana-martinez', name: 'Ana Martínez', passes: 2 },
    // Agrega más invitados aquí
];

export function getGuestById(id: string): Guest | undefined {
    return guests.find(guest => guest.id === id);
}
