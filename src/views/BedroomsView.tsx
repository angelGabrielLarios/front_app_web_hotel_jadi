import { CardBedroom } from "../components"


export const BedroomsView = () => {
    return (
        <main className="bg-[#F6F7FB] min-h-screen">

            <section className="p-4 md:p-6 lg:p-8">
                <h1 className="font-agrandir text-2xl md:text-3xl lg:text-4xl uppercase font-bold text-black-custom relative animate-fade-left animate-duration-[2500ms]">
                    Habitaciones
                </h1>

                <article className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 lg:p-8 items-start gap-4">
                    <CardBedroom
                        titleTypeBedroom="Sencilla"
                    />
                    <CardBedroom
                        titleTypeBedroom="King Size"
                    />
                    <CardBedroom
                        titleTypeBedroom="Doble"
                    />

                    <CardBedroom
                        titleTypeBedroom="Triple"
                    />
                </article>
            </section>

        </main >
    )
}
