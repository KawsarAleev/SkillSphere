"use client";
import CourseCard from "@/components/CourseCard";
import Hero from "@/components/Hero";
import { courses } from "@/data/courses";
import { FaGraduationCap } from "react-icons/fa";

export default function Home() {
  const topCourses = [...courses].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />

      <section className="mx-auto w-full">
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
    </div>
  );
}
