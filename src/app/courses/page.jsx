"use client";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { useEffect, useState } from "react";

export default function CoursesPage() {
  const [loading, setLoading] = useState(true);
  const [displayedCourses, setDisplayedCourses] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setDisplayedCourses(courses);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-2">All Courses</h1>
          <p className="text-gray-500">Find the perfect course to advance your career.</p>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : displayedCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-base-200 rounded-2xl">
          <h3 className="text-2xl font-bold mb-2">No courses available</h3>
          <p className="text-gray-500">Please check back later.</p>
        </div>
      )}
    </div>
  );
}