import { useBedroomsPage } from "../hooks"
import { IconUser } from '@tabler/icons-react';
import { IconMoon } from '@tabler/icons-react';
import { CardBedroom } from "../components";
export const BedroomsPage = () => {

    useBedroomsPage()
    return (
        <>
            <main className="bg-[#F6F7FB] min-h-screen lg:grid lg:grid-cols-4 lg:grod">
                <aside className="bg-primary lg:col-span-1 min-h-screen lg:pl-4 lg:flex lg:flex-col lg:justify-between">

                    <div className="">
                        <h1 className="font-agrandir lg:text-3xl text-white-custom text-center my-10">
                            Hotel Jadi 1
                        </h1>
                        <input type="text" placeholder="Buscar" className="block w-full py-2 px-4 rounded-full rounded-r-lg focus:outline-accent" />
                    </div>


                    <div className="border-t-2 border-white-custom text-white-custom lg:py-4">
                        <ul className="space-y-2">
                            <li className="flex items-center gap-1">
                                <IconUser
                                    className="size-6 fill-white-custom"
                                />
                                Inicia Sesión
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="inline-flex items-center gap-1">
                                    <IconMoon
                                        className="size-6 fill-white-custom"
                                    />
                                    Tema
                                </span>

                                <input type="checkbox" className="toggle toggle-primary bg-primary" />

                            </li>
                        </ul>
                    </div>
                </aside>

                <article className="lg:col-span-3 lg:grid lg:grid-cols-3 lg:p-8 items-start lg:gap-4 lg:justify-items-center lg:justify-center">
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
        </>
    )
}
