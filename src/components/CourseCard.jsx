"use client";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white border border-gray-200 group transition-all duration-200 hover:border-primary">
      <div className="aspect-video overflow-hidden">
        <img 
          src={course.image} 
          alt="" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      
      <div className="p-5">
        <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2 block">
          {course.category}
        </span>
        <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-primary">
          {course.title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <img 
              src={course.instructorImage} 
              alt={course.instructor}
              className="w-8 h-8 rounded-full object-cover border border-gray-100"
            />
            <span className="text-xs font-semibold">{course.instructor}</span>
          </div>
          <div className="flex items-center gap-1 text-sm font-bold">
            <FaStar className="text-yellow-500" />
            {course.rating}
          </div>
        </div>
        
        <Link 
          href={`/courses/${course.id}`}
          className="mt-5 block w-full text-center py-3 border-2 border-primary text-primary font-bold uppercase text-xs hover:bg-primary hover:text-white transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}