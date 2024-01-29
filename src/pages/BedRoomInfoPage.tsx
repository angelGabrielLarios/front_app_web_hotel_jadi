
import { IconStar, IconBedFilled, IconBathFilled, IconWifi } from '@tabler/icons-react';


export const BedRoomInfoPage = () => {
    return (
        <>
            <main className="min-h-screen bg-white-custom pt-10">
                <section className="px-4 md:px-6 lg:px-8">
                    <article className='md:w-[40rem] mx-auto'>
                        <img src="/public/images/bedroom_estandar.jpg" alt="" className="block  mx-auto rounded-xl" />

                        <h1 className="font-opens_sans_bold text-black-custom text-2xl md:text-3xl lg:text-4xl">
                            Habitación Estandar
                        </h1>


                        <div className='flex items-center gap-2'>
                            <div
                                className='flex items-center gap-2 '
                            >
                                {
                                    [1, 2, 3, 4, 5].map((index) => {
                                        return <IconStar
                                            key={index}
                                            className='fill-yellow-400 stroke-yellow-400' />
                                    })
                                }
                            </div>
                            <p className='font-code_pro'>
                                5.0
                            </p>
                        </div>


                        <h3 className='text-black-custom font-opens_sans_bold'>
                            La habitación ofrece
                        </h3>

                        <ul className='flex items-center gap-4'>
                            <li className='flex items-center gap-1'>
                                <IconBedFilled /> <span className='text-xs sm:text-sm md:text-base'>2 camas</span>
                            </li>
                            <li className='flex items-center gap-1'>
                                <IconBathFilled /> <span className='text-xs sm:text-sm md:text-base'> 1 baño</span>
                            </li>
                            <li className='flex items-center gap-1'>
                                <IconWifi /> <span className='text-xs sm:text-sm md:text-base'>Wifi</span>
                            </li>
                        </ul>


                        <button className='btn btn-secondary'>
                            reservar
                        </button>
                    </article>
                </section>

            </main>
        </>
    )
}
