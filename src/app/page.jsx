"use client";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <section className="bg-base-200 p-10 rounded-xl text-center">
        <h2 className="text-4xl font-black uppercase mb-4">Start Your Learning Journey</h2>
        <p className="text-xl opacity-70 mb-8 max-w-2xl mx-auto font-medium">
          SkillSphere provides industry-leading courses designed to help you master 
          new skills and advance your career.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 shadow-sm border-t-4 border-primary">
            <h3 className="font-bold text-lg mb-2 uppercase">Expert Mentors</h3>
            <p className="text-sm opacity-70 font-medium">Learn from industry veterans with years of experience.</p>
          </div>
          <div className="bg-white p-8 shadow-sm border-t-4 border-primary">
            <h3 className="font-bold text-lg mb-2 uppercase">Lifetime Access</h3>
            <p className="text-sm opacity-70 font-medium">Buy once, learn forever. No subscription required.</p>
          </div>
          <div className="bg-white p-8 shadow-sm border-t-4 border-primary">
            <h3 className="font-bold text-lg mb-2 uppercase">Project Based</h3>
            <p className="text-sm opacity-70 font-medium">Apply theory by building real-world applications.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
