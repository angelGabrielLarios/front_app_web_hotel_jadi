import { createBrowserRouter } from "react-router-dom";
import { BedRoomInfoPage, BedroomsPage, ContactPage, HomePage, LoginPage, ReserveRoomPage } from "../pages";


export const router = createBrowserRouter([
    {
        path: `/`,
        element: <HomePage />
    },
    {
        path: `auth/login`,
        element: <LoginPage />
    },
    {
        path: `contact`,
        element: <ContactPage />
    },
    {
        path: `reserve`,
        element: <ReserveRoomPage />
    },

    {
        path: `bedrooms`,
        element: <BedroomsPage />
    },

    {
        path: `bedroom-info`,
        element: <BedRoomInfoPage />
    },

])