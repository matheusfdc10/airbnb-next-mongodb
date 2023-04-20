import getCurrentUser from "@/actions/getCurrentUser";
import getListings from "@/actions/getListings";
import EmptySatate from "@/components/EmptySatate";
import PropertiesCliente from "@/components/PropertiesCliente";

const PropertiesPage = async () => {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return (
            <EmptySatate 
                title="Unauthorized"
                subtitle="Please login"
            />
        )
    }

    const listings = await getListings({
        userId: currentUser.id
    })

    if (listings.length === 0 ) {
        return (
            <EmptySatate 
                title="No properties found"
                subtitle="Looks like you have no properties."
            />
        )
    }

    return (
        <PropertiesCliente
            listings={listings}
            currentUser={currentUser}
        />
    )
}

export default PropertiesPage;