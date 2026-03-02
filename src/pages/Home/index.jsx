import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="w-full min-h-[calc(100vh-60px)] flex flex-col-reverse md:flex-row items-center justify-center md:justify-around bg-cover bg-center bg-no-repeat px-4 py-8 md:py-0 gap-8 md:gap-0" style={{backgroundImage: "url('/cidade.png')"}}>
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-4 text-black">
          Olá, sou <br />
          <span className="text-red">Jones Mendes</span>
          <br />
          Dev Full Stack
          <br />
          <sub className="text-xs sm:text-sm text-black block mt-2">
            Código que protege, guia e sustenta experiências digitais...
          </sub>
        </p>
        <Link 
          to="/sobre" 
          className="w-full sm:w-62.5 h-12 sm:h-12.5 text-base sm:text-lg font-bold rounded-lg cursor-pointer flex items-center justify-center no-underline bg-red text-white hover:bg-primary transition-colors"
        >
          Saiba mais sobre mim
        </Link>
      </div>
      <figure className="bg-white/15 backdrop-blur-[10px] rounded-full border border-white/30 p-2 sm:p-3 md:p-3.75 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] inline-block transition-all duration-300 cursor-pointer hover:border-[3px] hover:border-yellow-400 hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.5),0_0_30px_rgba(255,215,0,0.4)] hover:scale-[1.02]">
        <video 
          className="h-48 w-48 sm:h-64 sm:w-64 md:h-96 md:w-96 lg:h-125 lg:w-125 rounded-full object-cover" 
          src="/JonDev.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
        />
      </figure>
    </section>
  );
}

export default Home;
