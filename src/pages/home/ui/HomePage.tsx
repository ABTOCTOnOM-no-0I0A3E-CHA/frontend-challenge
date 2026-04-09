export function HomePage() {
    return (
        <main>
            <section
                className="pt-12 px-15.25 gap-12 grid"
                style={{
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(13rem, 1fr))",
                }}
            >
                <div className="w-56.25 aspect-square hover:scale-[1.13776] transition-all duration-200 bg-black"></div>
                <div className="w-56.25 aspect-square hover:scale-[1.13776] transition-all duration-200 bg-black"></div>
                <div className="w-56.25 aspect-square hover:scale-[1.13776] transition-all duration-200 bg-black"></div>
                <div className="w-56.25 aspect-square hover:scale-[1.13776] transition-all duration-200 bg-black"></div>
                <div className="w-56.25 aspect-square hover:scale-[1.13776] transition-all duration-200 bg-black"></div>
            </section>
        </main>
    );
}
