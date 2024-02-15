
import { Link } from "react-router-dom"
import { useMobileResolution } from "../hooks/global"
import { useRegisterPage } from "../hooks/pages"
import { IconErrorInput } from "../components"


export const RegisterPage = () => {

    const { register,
        handleSubmit,
        onSubmit,
        isShowPassword,
        setIsShowPassword,
        isLoading,
        errors,
    } = useRegisterPage()

    const { isMobile } = useMobileResolution()

    return (
        <>
            <main className="min-h-screen flex flex-col items-center justify-start md:justify-center bg-[#F6F7FB]">
                <form
                    className="mt-10 md:mt-0 p-6 rounded-md bg-white w-11/12 md:w-8/12 lg:w-[40rem]"
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                >
                    <h1
                        className="text-primary font-bold text-xl sm:text-2xl md:3xl lg:text-4xl mb-6 text-center font-header"
                    >
                        Crear una cuenta
                    </h1>

                    <div className="space-y-4">
                        <input
                            disabled={isLoading}
                            type="text"
                            placeholder="Nombre(s)"
                            className={
                                `input input-bordered ${isMobile ? 'input-sm' : ''} w-full bg-inherit text-xs lg:text-sm placeholder:text-xs placeholder:lg:text-sm ${errors?.firstName ? 'input-error' : ''}`
                            }
                            {...register('firstName', {
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
                            })}

                        />

                        {
                            errors?.firstName?.type === 'required'
                                ?
                                <p
                                    className="text-error text-xs flex items-center gap-2 justify-end"
                                >
                                    {errors?.firstName?.message} <IconErrorInput width={24} height={24} />
                                </p>
                                : null
                        }

                        <input
                            disabled={isLoading}
                            type="text"
                            placeholder="Apellido(s)"
                            className={
                                `input input-bordered ${isMobile ? 'input-sm' : ''} w-full bg-inherit text-xs lg:text-sm placeholder:text-xs placeholder:lg:text-sm ${errors?.lastName ? 'input-error' : ''}`
                            }
                            {...register('lastName', {
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
                            })}

                        />

                        {
                            errors?.lastName?.type === 'required'
                                ?
                                <p
                                    className="text-error text-xs flex items-center gap-2 justify-end"
                                >
                                    {errors?.lastName?.message} <IconErrorInput width={24} height={24} />
                                </p>
                                : null
                        }

                        <input
                            disabled={isLoading}
                            type="text"
                            placeholder="Dirección"
                            className={
                                `input input-bordered ${isMobile ? 'input-sm' : ''} w-full bg-inherit text-xs lg:text-sm placeholder:text-xs placeholder:lg:text-sm ${errors?.address ? 'input-error' : ''}`
                            }
                            {...register('address', {
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
                            })}

                        />

                        {
                            errors?.address?.type === 'required'
                                ?
                                <p
                                    className="text-error text-xs flex items-center gap-2 justify-end"
                                >
                                    {errors?.address?.message} <IconErrorInput width={24} height={24} />
                                </p>
                                : null
                        }



                        <input
                            disabled={isLoading}
                            type="email"
                            placeholder="Correo Electrónico:"
                            className={
                                `input input-bordered ${isMobile ? 'input-sm' : ''} w-full bg-inherit text-xs lg:text-sm placeholder:text-xs placeholder:lg:text-sm ${errors?.email ? 'input-error' : ''}`
                            }
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
                            })}

                        />

                        {
                            errors?.email?.type === 'required'
                                ?
                                <p
                                    className="text-error text-xs flex items-center gap-2 justify-end"
                                >
                                    {errors?.email?.message} <IconErrorInput width={24} height={24} />
                                </p>
                                : null
                        }



                        <input
                            disabled={isLoading}
                            type={isShowPassword ? 'text' : 'password'}
                            placeholder="Contraseña"
                            className={
                                `input input-bordered ${isMobile ? 'input-sm' : ''} w-full bg-inherit text-xs lg:text-sm placeholder:text-xs placeholder:lg:text-sm ${errors?.password?.message ? 'input-error' : ''}`
                            }
                            {...register('password', {
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
                            })}

                        />

                        {
                            errors?.password?.type === 'required'
                                ?
                                <p
                                    className="text-error text-xs flex items-center gap-2 justify-end"
                                >
                                    {errors?.password?.message} <svg className="stroke-error" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 16H12.01M12 8V12M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                </p>
                                : null
                        }

                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                onChange={(e) => setIsShowPassword(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary" />
                            <span className="ms-3 text-sm font-medium text-black-custom">Mostrar contraseña</span>
                        </label>



                        <button
                            disabled={isLoading}
                            type="submit"
                            className={`btn ${isMobile ? 'btn-sm' : ''} btn-primary w-full text-white-custom`}
                        >
                            Iniciar Sesión
                            {isLoading ? <span className="loading loading-dots loading-xs"></span> : null}

                        </button>

                        <p
                            className="text-center text-xs sm:text-sm"
                        >
                            ¿No tiene una cuenta?
                            <Link
                                to={'/auth/register'}
                                className="text-primary ml-1 font-bold "
                            >
                                Registrarse
                            </Link>
                        </p>

                        <p
                            className="text-center text-xs sm:text-sm"
                        >
                            ¿No te acuerdas de tu contraseña?
                            <Link
                                to={'/auth/recovery-password'}
                                className="text-primary ml-1 font-bold"
                            >
                                Recuperar contraseña
                            </Link>
                        </p>
                    </div>
                </form>


            </main>
        </>
    )
}
