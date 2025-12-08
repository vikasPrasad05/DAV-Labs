import Image from "next/image";

const team = [
  {
    name: "Alex Dav",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800&q=80"
  },
  {
    name: "Marcus Reid",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=800&q=80"
  },
  
];

export function Team() {
  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Meet the Minds
            </h2>
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