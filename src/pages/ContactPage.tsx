
import { IconMapPinFilled, IconPhone } from '@tabler/icons-react';
import { Footer } from '../components/';

export const ContactPage = () => {
    return (
        <>
            <section
                className="px-4 md:px-6 lg:px-8 pt-14 min-h-screen bg-white-custom text-black-custom"
            >
                <h1 className="font-header text-2xl md:text-4xl uppercase font-bold text-black-custom relative">
                    Contacto

                </h1>

                <article className="md:grid md:grid-cols-2 md:gap-4">

                    <iframe
                        className="block w-full rounded-xl"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.1542875425944!2d-98.66575892572921!3d20.663301080896147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d13ab5a44ad63d%3A0x298f067170ca6aa2!2sHotel%20Jadi!5e0!3m2!1ses-419!2smx!4v1706034365231!5m2!1ses-419!2smx" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />


                    <div>
                        <ul>
                            <li className="flex items-center gap-1">
                                <IconMapPinFilled className="size-5 fill-black-custom stroke-black-custom" />

                                Tepeyac, 43203 Zacualtipán, Hgo.
                            </li>
                            <li className="flex items-center gap-1">
                                <IconPhone className='size-5 fill-black-custom stroke-black-custom' />
                                <a href="tel:+527747420973">774 742 0973</a>
                            </li>
                        </ul>
                    </div>

                </article>

            </section>


            <Footer />
        </>
    )
}
