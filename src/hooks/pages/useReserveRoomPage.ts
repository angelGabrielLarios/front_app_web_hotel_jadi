import { useEffect, useRef, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"



interface IFormInputs {
    check_in_date: string
    check_out_date: string
}
export const useReserveRoomPage = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { register, reset, handleSubmit, formState: { errors }, watch } = useForm<IFormInputs>()



    const [isLoading, setIsLoading] = useState(false)





    const modalAlertRef = useRef<HTMLDialogElement>(null)

    const [isShowPassword, setIsShowPassword] = useState(false)



    useEffect(() => {
        document.title = 'Iniciar Sesión'
    }, [])

    const onSubmit: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {

        setIsLoading(true)
        try {

            console.log(data, 'hola')
        } catch (error) {

            console.error(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    return {
        register,
        handleSubmit,
        onSubmit,
        isShowPassword,
        setIsShowPassword,
        isLoading,
        errors,
        modalAlertRef,
        watch
    }
}