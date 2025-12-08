import Image from "next/image";
import { TextReveal } from "../ui/TextReveal";

const team = [
  {
    name: "Deep Patel",
    role: "Founder",
    image: "/assets/deep.png"
  },
  {
    name: "Vikas Prasad",
    role: "Co-Founder & Developer",
    image: "/assets/vikas.png"
  },
  {
    name: "Alok Mahapatra",
    role: "Co-Founder & Developer",
    image: "/assets/alok.jpg"
  },
  
];

export function Team() {
  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
             <TextReveal className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 justify-center">
 Our Team
</TextReveal>
            <p className="text-zinc-400">
                A collective of digital natives, code poets, and strategic thinkers.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
            {team.map((member, idx) => (
                <div key={idx} className="group relative">
                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-900 mb-4 border border-white/5 group-hover:border-cyan-500/50 transition-colors">
                         <Image 
                            src={member.image} 
                            alt={member.name} 
                            fill 
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-cyan-500 text-sm font-medium">{member.role}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}