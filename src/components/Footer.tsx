

export const Footer = () => {
    return (
        <>





            <footer className="relative pt-[300px] " >

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
                    <path fill="#358eef" fillOpacity={1} d="M0,96L60,96C120,96,240,96,360,117.3C480,139,600,181,720,192C840,203,960,181,1080,181.3C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
                </svg>

                <p className="text-white-custom font-extrabold absolute bottom-0 text-center w-full py-4 ">
                    Hotel Jadi &copy; Todos los derechos reservados {new Date().getFullYear()}
                </p>
            </footer>
        </>
    )
}
