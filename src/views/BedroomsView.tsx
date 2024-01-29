import { CardBedroom } from "../components"


export const BedroomsView = () => {
    return (
        <main className="bg-[#F6F7FB] min-h-screen">

            <article className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 lg:p-8 items-start gap-4 p-4 sm:p-6 md:p-8">
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
        </main >
    )
}
