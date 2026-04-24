import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Determine next project for infinite-feeling navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30 pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Navigation */}
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-white/50 hover:text-[#FF6B00] transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </Link>

        {/* Header Section */}
        <div className="mb-16">
          <p className="text-white/60 tracking-widest uppercase text-sm font-medium mb-4">
            {project.category}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            {project.title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8 mt-12">
            <div className="md:col-span-2 text-lg md:text-xl text-white/80 font-light leading-relaxed">
              {project.overview}
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-white/40 text-sm uppercase tracking-widest mb-2">Project Type</h4>
                <p className="font-medium text-lg">{project.projectType}</p>
              </div>
              <div>
                <h4 className="text-white/40 text-sm uppercase tracking-widest mb-2">Role</h4>
                <p className="font-medium text-lg">{project.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full rounded-2xl overflow-hidden aspect-[16/9] mb-24 border border-white/10">
          <img 
            src={project.coverImage} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Inner Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-4">
            <h3 className="text-3xl font-semibold tracking-tight sticky top-24">
              The Challenge & Process
            </h3>
          </div>
          <div className="md:col-span-8 space-y-8 text-white/70 text-lg leading-relaxed font-light">
            {project.descriptions.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </div>

        {/* Inner High-Res Image */}
        <div className="w-full rounded-2xl overflow-hidden mb-24 border border-white/10">
          <img 
            src={project.innerImage} 
            alt={`${project.title} Details`}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Next Project Block */}
        <div className="border-t border-white/10 pt-24 text-center">
          <p className="text-white/40 tracking-widest uppercase text-sm mb-6">Next Project</p>
          <Link 
            href={`/projects/${nextProject.slug}`}
            className="group inline-block"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/80 group-hover:text-[#FF6B00] transition-colors">
              {nextProject.title}
            </h2>
          </Link>
        </div>

      </div>
    </main>
  );
}
