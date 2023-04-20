import getCurrentUser from "@/actions/getCurrentUser";
import getListingById from "@/actions/getListingById";
import getReservations from "@/actions/getReservations";
import EmptySatate from "@/components/EmptySatate";
import ListingClient from "@/components/ListingClient";

interface IParams {
    listingId?: string;
}

const ListingPage = async ({ params }: {params: IParams}) => {
    const listing = await getListingById(params)
    const reservations = await getReservations(params)
    const currentUser = await getCurrentUser();

    if (!listing) {
        return (
            <EmptySatate />
        )
    }

    return (
        <ListingClient
            listing={listing}
            reservations={reservations}
            currentUser={currentUser}
        />
    )
}


export default ListingPage;