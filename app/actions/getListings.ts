import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
    userId?: string;
}




export default async function getListings(  params:IListingsParams) {

  try {
    const {userId}=params;
    let query: any={}
    if(userId){
      query.useId = userId;
    }



    const listings = await prisma.listing.findMany({
      orderBy: {
         createAt:'desc'
      }
    }); 
    
    const safeListings = listings.map((listing) => ({
        ...listing,
        createdAt: listing.createAt.toISOString(),
      }));
  
      return safeListings;
  } 
  catch (error: any) {
    throw new Error(error);
  }
}