
'use client';
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Recent Projects</h1>
      <Projects />
    </div>
  );
}
