import { NavLink } from "react-router-dom"
import { convertToCurrency } from "../helpers"

interface Props {
    titleTypeBedroom: string | 'Sencilla'
}
export const CardBedroom = ({ titleTypeBedroom }: Props) => {
    return (
        <>
            <div className="card text-black-custom bg-white-custom animate-fade ">
                <figure><img src="/public/images/bedroom_estandar.webp" alt="Shoes" /></figure>
                <div className="card-body">
                    <header className="flex items-center justify-between">
                        <h2 className="card-title font-extrabold font-opens_sans_bold lg:text-xl">{titleTypeBedroom}</h2>
                        <p className="text-primary font-extrabold text-right font-code_pro lg:text-xl">
                            {convertToCurrency({ amount: 320, locales: 'en', currencyCode: 'MXN' })}
                        </p>
                    </header>

                    <div className="flex items-center justify-end">
                        <NavLink
                            to={`/bedroom-info`}
                            className="btn btn-primary rounded-full text-white-custom font-extrabold font-code_pro"

                        >
                            Más Detalles
                        </NavLink>
                    </div>
                </div>

            </div>
        </>
    )
}
