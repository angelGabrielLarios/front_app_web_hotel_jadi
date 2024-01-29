import { NavLink } from "react-router-dom"
import { Navbar } from "../components"
import { useHomePage } from "../hooks"


export const HomePage = () => {

    useHomePage()
    return (
        <>
            <Navbar />
            <main
                className="min-h-screen bg-white-custom  relative md:flex md:justify-center md:items-center"

            >
                {<img src="/public/images/wave_2.svg" alt="" className="block absolute top-0 object-cover h-[500px] md:h-[600px] m-0" />}

                <section className="px-4 md:px-6 lg:px-8 pt-14  md:pt-0 md:grid md:grid-cols-2">
                    <article className="space-y-4">
                        <h1 className="font-agrandir text-2xl md:text-3xl lg:text-4xl uppercase font-bold text-black-custom relative animate-fade-left animate-duration-[1500ms]">
                            Reservar <br />
                            <span className="text-secondary ">Habitacion</span>
                        </h1>
                        <p className="text-white-custom relative text-xs sm:text-sm md:text-base animate-fade-left animate-duration-[1500ms]">
                            Bienvenido a nuestra aplicación web exclusiva para reservar habitaciones de hotel, donde la comodidad y la conveniencia se encuentran con la elegancia. Descubre una experiencia de reserva sin complicaciones que transforma tus planes de viaje en momentos inolvidables.
                        </p>
                        <NavLink
                            className="btn btn-secondary relative animate-fade-left animate-duration-[1500ms]"
                            to={`/bedrooms`}

                        >Reservar ahora
                        </NavLink>
                    </article>

                    <img src="/public/images/undraw_traveling_yhxq.svg" alt="" className="relative" />


                </section>

            </main>
        </>
    )
}
