import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservations";
import EmptySatate from "@/components/EmptySatate";
import TripsClient from "@/components/TripsClient";

const TripsPage = async () => {
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
        userId: currentUser.id
    })

    if (reservations.length === 0 ) {
        return (
            <EmptySatate 
                title="No trips found"
                subtitle="Looks like you havent reserved any trips."
            />
        )
    }

    return (
        <TripsClient
            reservations={reservations}
            currentUser={currentUser}
        />
    )
}

export default TripsPage;