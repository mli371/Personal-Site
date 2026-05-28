export function BackgroundEffects() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#07090d]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
            <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute right-[-16rem] top-[18rem] h-[34rem] w-[34rem] rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute bottom-[-18rem] left-[20%] h-[36rem] w-[36rem] rounded-full bg-emerald-500/[0.08] blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(15,23,42,0)_0%,rgba(7,9,13,0.55)_45%,#07090d_100%)]" />
        </div>
    );
}
