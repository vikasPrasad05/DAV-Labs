import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web App",
    description: "Real-time financial data visualization for a Fortune 500 bank.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", 
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "E-Commerce Rebrand",
    category: "Design System",
    description: "A complete overhaul of a fashion giant's digital presence.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    color: "from-violet-500 to-purple-500"
  },
  {
    title: "AI Chat Interface",
    category: "SaaS Product",
    description: "Generative AI interface with voice capabilities.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    color: "from-orange-500 to-red-500"
  }
];

export function Work() {
  return (
    <section id="work" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
          Selected Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-600 transition-all duration-500 cursor-pointer">
              
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10" />
                <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-20">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-4 bg-linear-to-r ${project.color} opacity-80`}>
                    {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {project.description}
                </p>
                <div className="flex items-center text-sm font-medium text-white group-hover:gap-2 transition-all">
                    View Case Study <ArrowUpRight className="ml-1 w-4 h-4" />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}