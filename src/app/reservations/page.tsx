import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservations";
import EmptySatate from "@/components/EmptySatate";
import ReservationsClient from "@/components/ReservationsClient";

const ReservationPage = async () => {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return (
            <EmptySatate
                title="Unauthorized"
                subtitle="Please login"
            />
        )
    }

    const reservations = await getReservations({
        authorId: currentUser.id
    })

    if (reservations.length === 0 ) {
        return (
            <EmptySatate
                title="No reservations found"
                subtitle="Looks like you have no reservation on your properties"
            />
        )
    }

    return (
        <ReservationsClient
            reservations={reservations}
            currentUser={currentUser}
        />
    )
}

export default ReservationPage;