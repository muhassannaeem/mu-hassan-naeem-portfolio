import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import ProjectCard from '@/components/sections/ProjectCard';
import { projects } from '@/config/projects';

export default function ProjectsPage() {
  return (
    <main className="flex flex-col w-full bg-black text-white min-h-screen">
      <Navbar />

      <section className="relative w-full pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col gap-4 mb-10 md:mb-14 max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-widest text-indigo-400 uppercase">
              All Projects
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Every project in one place
            </h1>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
              This page shows the full project collection, including the six featured on the home page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}