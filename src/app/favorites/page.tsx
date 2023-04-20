import getCurrentUser from "@/actions/getCurrentUser";
import getFavoriteListings from "@/actions/getFavorites";
import EmptySatate from "@/components/EmptySatate";
import FavoritesClient from "@/components/FavoritesClient";

const ListingPage = async () => {
    const currentUser = await getCurrentUser();
    const listings = await getFavoriteListings();

    if (listings.length === 0) {
        return (
            <EmptySatate 
                title="No favorites found"
                subtitle="Looks like you have no favorite listings."
            />
        )
    }

    return (
        <FavoritesClient
            listings={listings}
            currentUser={currentUser}
        />
    )
}

export default ListingPage;