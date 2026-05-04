"use client";
import CourseCard from "@/components/CourseCard";
import Hero from "@/components/Hero";
import courses from "@/data/courses.json";
import { FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";

export default function Home() {
  const topCourses = [...courses].sort((a, b) => b.rating - a.rating).slice(0, 3);
  const trendingCourses = [...courses].slice(3, 6);
  const uniqueInstructors = Array.from(
    new Map(courses.map((course) => [course.instructor, {
      name: course.instructor,
      img: course.instructorImage,
      title: course.category + " Specialist"
    }])).values()
  ).slice(0, 6);

  const sectionWrapper = "mx-auto w-full";

  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />

      {/* Popular Courses Section */}
      <section className={sectionWrapper}>
        <div className="mb-10 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <FaGraduationCap className="text-primary text-3xl" />
            <h2 className="text-3xl font-bold uppercase tracking-tight">Popular Courses</h2>
          </div>
          <p className="text-gray-500 font-medium text-sm border-l-4 border-primary pl-3">
            Explore our highest rated programs and start learning today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <section
        className="relative py-20 border-y border-gray-200 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/img/bg1.png')` }}
      >
        <div className="absolute inset-0 bg-white/75"></div>
        <div className={sectionWrapper + " relative px-10"}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">Trending Now</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Instructors Section */}
      <section className={sectionWrapper}>
        <div className="mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-tight flex items-center gap-3 mb-2">
            <FaChalkboardTeacher className="text-primary" /> Expert Mentors
          </h2>
          <p className="text-gray-500 font-medium text-sm border-l-4 border-primary pl-3">
            Learn from industry veterans
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uniqueInstructors.map((inst, idx) => (
            <div key={idx} className="bg-white border border-gray-200 p-6 flex items-center gap-4 hover:border-primary transition-colors">
              <div className="w-20 h-20 bg-gray-100 border-2 border-primary flex-shrink-0">
                <img
                  src={inst.img}
                  alt={inst.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg uppercase leading-tight">{inst.name}</h3>
                <p className="text-primary text-xs font-bold mt-1">{inst.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Tips Section */}
      <section className={sectionWrapper}>
        <div className="bg-primary p-1">
          <div className="bg-white p-10">
            <div className="mb-12 border-b border-gray-200 pb-6">
              <h2 className="text-3xl font-bold uppercase tracking-tighter text-black">Study Techniques</h2>
              <p className="text-gray-500 font-bold text-xs uppercase mt-1">Practical tips for better results</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { title: "Pomodoro Technique", desc: "Study for 25 minutes, then take a 5-minute break. This keeps your mind fresh and focused." },
                { title: "Active Recall", desc: "Instead of just reading, actively test yourself on the material you just learned to reinforce memory." },
                { title: "Consistent Schedule", desc: "Set a specific time each day for learning. Consistency beats cramming every time." },
                { title: "Build Projects", desc: "Apply what you learn by building real-world projects. Theory is good, practice is better." }
              ].map((tip, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-4xl font-black text-gray-300 select-none">0{i + 1}</span>
                  <div>
                    <h3 className="text-lg font-bold uppercase mb-2 text-primary">{tip.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}