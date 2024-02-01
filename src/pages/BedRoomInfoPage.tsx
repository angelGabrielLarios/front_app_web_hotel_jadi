
import { IconStar, IconBedFilled, IconBathFilled, IconWifi } from '@tabler/icons-react';
import { convertToCurrency } from '../helpers';


export const BedRoomInfoPage = () => {
    return (
        <>
            <main className="min-h-screen bg-[#F6F7FB] pt-10">
                <section className="px-4 md:px-6 lg:px-8">
                    <article className='md:w-[40rem] mx-auto bg-white-custom shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                        <img src="/public/images/bedroom_estandar.jpg" alt="" className="block  mx-auto rounded-xl h-52 w-full object-cover" />

                        <article className='p-4 sm:p-5 md:p-6 space-y-2'>
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
                                <li className='flex items-center gap-1 text-primary'>
                                    <IconBedFilled /> <span className='text-xs sm:text-sm md:text-base'>2 camas</span>
                                </li>
                                <li className='flex items-center gap-1 text-primary'>
                                    <IconBathFilled /> <span className='text-xs sm:text-sm md:text-base'> 1 baño</span>
                                </li>
                                <li className='flex items-center gap-1 text-primary'>
                                    <IconWifi /> <span className='text-xs sm:text-sm md:text-base'>Wifi</span>
                                </li>
                            </ul>
                            <p className='text-black-custom'>
                                precio por 1 noche es <span className='font-code_pro text-primary text-2xl'>{convertToCurrency({ amount: 320, locales: 'en', currencyCode: 'MXN' })}</span>
                            </p>

                            <button className='btn btn-secondary'>
                                reservar
                            </button>
                        </article>
                    </article>
                </section>

            </main>
        </>
    )
}
