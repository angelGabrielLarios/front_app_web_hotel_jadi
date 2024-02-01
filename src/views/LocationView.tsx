import { IconPhone, IconMapPinFilled } from "@tabler/icons-react"



export const LocationView = () => {
    return (
        <>
            <main className="bg-[#F6F7FB] min-h-screen">
                <section
                    className="p-4 md:p-6 lg:p-8 text-black-custom"
                >
                    <h1 className="font-agrandir text-2xl md:text-3xl lg:text-4xl uppercase font-bold text-black-custom relative animate-fade-left animate-duration-[2500ms] mb-4">
                        Contacto
                    </h1>

                    <article className="grid md:grid-cols-2 gap-4">

                        <iframe
                            className="block w-full rounded-xl"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.1542875425944!2d-98.66575892572921!3d20.663301080896147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d13ab5a44ad63d%3A0x298f067170ca6aa2!2sHotel%20Jadi!5e0!3m2!1ses-419!2smx!4v1706034365231!5m2!1ses-419!2smx" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />


                        <div>
                            <ul>
                                <li className="flex items-center gap-1 py-2">
                                    <IconMapPinFilled className="size-5 fill-black-custom stroke-black-custom" />

                                    Tepeyac, 43203 Zacualtipán, Hgo.
                                </li>
                                <li className="flex items-center gap-1 py-2">
                                    <IconPhone className='size-5 fill-black-custom stroke-black-custom' />
                                    <a href="tel:+527747420973">774 742 0973</a>
                                </li>
                            </ul>
                        </div>

                    </article>

                </section>
            </main>

        </>
    )
}
