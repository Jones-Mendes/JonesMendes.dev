function Container({children}) {
    return(
        <section className="w-full min-h-[90vh] flex flex-col items-center py-4 px-4 gap-4">
            {children}
        </section>
    )
}

export default Container;