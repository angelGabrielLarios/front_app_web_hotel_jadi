import { createBrowserRouter } from "react-router-dom";
import { BedRoomInfoPage, BedroomsPage, HomePage, LoginPage, RegisterPage, ReserveRoomPage } from "../pages";
import { BedroomsView, HomeView, LocationView } from "../views";


export const router = createBrowserRouter([
    {
        path: `/`,
        element: <HomePage />,
        children: [
            {
                index: true,
                element: <HomeView />
            },
            {
                path: '/bedrooms',
                element: <BedroomsView />

            },
            {
                path: '/location',
                element: <LocationView />

            }
        ]
    },
    {
        path: `/auth/login`,
        element: <LoginPage />
    },
    {
        path: `/auth/register`,
        element: <RegisterPage />
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