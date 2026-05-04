"use client";
import CourseCard from "@/components/CourseCard";
import courses from "@/data/courses.json";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setFilteredCourses(courses);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const filtered = courses.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  }, [searchQuery, loading]);

  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-2">All Courses</h1>
          <p className="text-gray-500">Find the perfect course to advance your career.</p>
        </div>
        
        <div className="join w-full md:w-auto">
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Search courses by title..." 
              className="input input-bordered w-full pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-base-200 rounded-2xl">
          <h3 className="text-2xl font-bold mb-2">No courses found</h3>
          <p className="text-gray-500">Try adjusting your search query.</p>
        </div>
      )}
    </div>
  );
}
