import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-[60vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-4xl mx-auto text-center text-primary-foreground animate-fade-in">
        <div className="mb-6">
          <Heart className="w-16 h-16 mx-auto mb-4 animate-pulse-gentle" />
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance">
          Maulana Aazad Alpsankhyank Education & Welfare Society
        </h1>
        
        <p className="text-lg md:text-xl mb-4 opacity-95">
          At. Post Isoli, Ta. Chikhali, Dist. Buldhana (Maharashtra)
        </p>
        
        <div className="w-24 h-1 bg-secondary mx-auto my-8 rounded-full" />
        
        <p className="text-xl md:text-2xl font-medium mb-2">
          Run by,
        </p>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-balance">
          Late Gafurlalaji Matimand Niwasi Vidhyalaya
        </h2>
        
        <p className="text-lg md:text-xl mt-4 opacity-95">
          Isoli, Ta. Chikhali, Dist. Buldhana (Maharashtra)
        </p>
        
        <p className="mt-8 text-base md:text-lg opacity-90 max-w-2xl mx-auto">
          Providing quality education and residential care to support children with disabilities, as well as offering assistance through a women's help center.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
