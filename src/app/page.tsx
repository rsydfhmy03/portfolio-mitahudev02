import Lanyard from "@/components/3d/Lanyard";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Text / Vibe Neo-Brutalism */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-[15vw] font-black text-zinc-900 tracking-tighter select-none">
          FAHMY.
        </h1>
      </div>

      {/* Lanyard 3D Component */}
      <div className="z-10 w-full h-full cursor-grab active:cursor-grabbing">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>

    </main>
  );
}