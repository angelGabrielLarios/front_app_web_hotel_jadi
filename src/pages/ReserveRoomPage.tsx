
import { useMobileResolution } from "../hooks/global"
import { useReserveRoomPage } from "../hooks/pages"
import { convertToCurrency, diffDateDays, formatDateNow } from "../helpers"
import { IconErrorInput } from "../components"
import { useEffect, useState } from "react"


export const ReserveRoomPage = () => {

    const { register,
        handleSubmit,
        onSubmit,
        isLoading,
        errors,
        watch
    } = useReserveRoomPage()


    const { isMobile } = useMobileResolution()


    const [priceTotal, setPriceTotal] = useState(0)
    useEffect(() => {


        const days = diffDateDays({ endDate: watch(`check_out_date`), initialDate: watch(`check_in_date`) })
        console.log(days)

        setPriceTotal(days * 200)



        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watch('check_in_date'), watch(`check_out_date`)])




    return (
        <>
            <main className="min-h-screen flex flex-col items-center justify-start md:justify-center bg-white-custom">
                <form
                    className="mt-10 md:mt-0 p-6 shadow-lg border border-primary rounded-md text-black-custom w-11/12 md:w-8/12 lg:w-[40rem] "
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                >
                    <h1
                        className="text-primary font-bold text-xl sm:text-2xl md:3xl lg:text-4xl mb-6 text-center font-header"
                    >
                        Reservar habitación
                    </h1>

                    <div className="space-y-4">


                        <div className="grid grid-cols-2 gap-2 md:gap-4">



                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-black-custom">Fecha de entrada</span>



                                </div>

                                <input
                                    disabled={isLoading}
                                    type="date"
                                    defaultValue={formatDateNow({ date: new Date(), format: 'yyyy-mm-dd' })}
                                    min={formatDateNow({ date: new Date(), format: 'yyyy-mm-dd' })}

                                    className={
                                        `input input-bordered ${isMobile ? 'input-sm' : ''} w-full bg-inherit text-xs lg:text-sm placeholder:text-xs placeholder:lg:text-sm ${errors?.check_in_date?.message ? 'input-error' : ''}`
                                    }
                                    {...register('check_in_date', {
                                        required: {
                                            value: true,
                                            message: 'Este campo es obligatorio'
                                        }
                                    })}

                                />

                                {
                                    errors?.check_in_date?.type === 'required'
                                        ?
                                        <p
                                            className="text-error text-xs flex items-center gap-2 justify-end"
                                        >
                                            {errors?.check_in_date?.message} <IconErrorInput
                                                height={24}
                                                width={24}
                                            />
                                        </p>
                                        : null
                                }

                            </label>


                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-black-custom">Fecha de salida</span>
                                </div>

                                <input
                                    disabled={isLoading}
                                    type="date"
                                    defaultValue={formatDateNow({ date: new Date(new Date().setDate(new Date().getDate() + 1)), format: 'yyyy-mm-dd' })}

                                    min={formatDateNow({ date: new Date(new Date().setDate(new Date().getDate() + 1)), format: 'yyyy-mm-dd' })}

                                    className={
                                        `input input-bordered ${isMobile ? 'input-sm' : ''} w-full bg-inherit text-xs lg:text-sm placeholder:text-xs placeholder:lg:text-sm ${errors?.check_in_date?.message ? 'input-error' : ''}`
                                    }
                                    {...register('check_out_date', {
                                        required: {
                                            value: true,
                                            message: 'Este campo es obligatorio'
                                        }
                                    })}

                                />

                                {
                                    errors?.check_out_date?.type === 'required'
                                        ?
                                        <p
                                            className="text-error text-xs flex items-center gap-2 justify-end"
                                        >
                                            {errors?.check_out_date?.message} <IconErrorInput
                                                height={24}
                                                width={24}
                                            />
                                        </p>
                                        : null
                                }
                            </label>


                        </div>


                        <div className="flex items-center justify-between">
                            <p>Precio por noche </p>
                            <p>{convertToCurrency({ amount: 200, locales: 'en', currencyCode: 'MXN' })}</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <p>Total </p>
                            <p>{convertToCurrency({ amount: priceTotal, locales: 'en', currencyCode: 'MXN' })}</p>
                        </div>
                        <button
                            disabled={isLoading}
                            type="submit"
                            className={`btn ${isMobile ? 'btn-sm' : ''} btn-primary w-full `}
                        >
                            Reservar
                            {isLoading ? <span className="loading loading-dots loading-xs"></span> : null}

                        </button>

                    </div>
                </form>


            </main>
        </>
    )
}
