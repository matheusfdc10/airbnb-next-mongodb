'use client'

import { SafeReservation, SafeUser } from "@/types";
import Container from "../Container";
import Heading from "../Heading";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import ListingCard from "../listings/ListingCard";

interface ReservationsClientProps {
    reservations: SafeReservation[];
    currentUser?: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
    reservations,
    currentUser
}) => {
    const router = useRouter()
    const [deletingId, setDeletingId] = useState('');

    const onCancel = useCallback((id: string) => {
        setDeletingId(id)

        axios.delete(`/api/reservations/${id}`)
        .then(() => {
            toast.success('Reservation Cancalled')
            router.refresh()
        })
        .catch(() => {
            toast.error('Something went wrong.')
        })
        .finally(() => {
            setDeletingId('');
        })
    }, [router])

    return (
        <Container>
            <Heading
                title="Reservations"
                subtitle="Bookings or your properties"
            />
            <div
                className="
                    mt-10
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5
                    2xl:grid-cols-6
                    gap-8
                "
            >
                {reservations.map((reservation) => (
                    <ListingCard
                        key={reservation.id}
                        data={reservation.listing}
                        reservation={reservation}
                        actionId={reservation.id}
                        onAction={onCancel}
                        disabled={deletingId === reservation.id}
                        actionLabel="Cancel guest reservation"
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    )
}

export default ReservationsClient;