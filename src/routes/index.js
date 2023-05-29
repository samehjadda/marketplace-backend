import { createNewListingRoute } from "./createNewListing";
import { deleteListingRoute } from "./deleteListing";
import { getAllListingsRoute } from "./getAllListings";

import { getListingRoute } from "./getListing";
import { addViewToListingRoute } from "./addViewToListing";
import { getUserListingsRoute } from "./getUserListings";
import { updateListingRoute } from "./updateListing";
export default [
    getAllListingsRoute,
    createNewListingRoute,
    getListingRoute,
    addViewToListingRoute,
    getUserListingsRoute,
    updateListingRoute,
    deleteListingRoute,

]