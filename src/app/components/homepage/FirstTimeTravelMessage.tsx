
export default function FirstTimeTravelMessage() {
    return (
        <div className="relative w-full min-h-[150px] px-2 py-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 animate-pulse" />
            <div className="container mx-auto">
                <div className="relative flex flex-col items-center justify-center gap-4 backdrop-blur-sm p-3 rounded-lg">
                    <h2 className="text-center text-2xl font-bold font-poppins tracking-tight text-foreground sm:text-3xl">
                        Are you a first time traveller?
                    </h2>
                    <p className="text-center text-base sm:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                        We are on a mission to make travel more accessible and enjoyable for everyone and let upcoming generations experience the world.
                    </p>
                    <div className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
                </div>
            </div>
        </div>
    );
}
