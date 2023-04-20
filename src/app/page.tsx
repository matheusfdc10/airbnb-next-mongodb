import getCurrentUser from "@/actions/getCurrentUser";
import getListings, { IListingsParams } from "@/actions/getListings";
import Container from "@/components/Container";
import EmptySatate from "@/components/EmptySatate";
import ListingCard from "@/components/listings/ListingCard";

interface HomeProps {
  searchParams: IListingsParams
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings({
    userId: searchParams.userId || undefined,
    bathroomCount: searchParams.bathroomCount || undefined,
    category: searchParams.category || undefined,
    endDate: searchParams.endDate || undefined,
    guestCount: searchParams.guestCount || undefined,
    locationValue: searchParams.locationValue || undefined,
    roomCount: searchParams.roomCount || undefined,
    startDate: searchParams.startDate || undefined,
  });
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptySatate showReset />
    )
  }

  return (
    <Container>
      <div
        className="
          pt-24
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
        {listings.map((listing: any) => {
          return (
            <ListingCard
              key={listing.id}
              currentUser={currentUser}
              data={listing}
            />
          )
        }) }
      </div>
    </Container>
  )
}


export default Home;