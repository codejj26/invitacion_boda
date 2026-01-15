import Hero from '@/components/Hero'
import Countdown from '@/components/Countdown'
import Parents from '@/components/Parents'
import EventDetails from '@/components/EventDetails'
import DressCode from '@/components/DressCode'
import Gallery from '@/components/Gallery'
import GiftRegistry from '@/components/GiftRegistry'
import RSVP from '@/components/RSVP'
import Location from '@/components/Location'

export default function Home() {
    return (
        <main>
            <Hero />
            <Countdown />
            <Parents />
            <EventDetails />
            <DressCode />
            <Gallery />
            <GiftRegistry />
            <RSVP />
            <Location />
        </main>
    )
}
