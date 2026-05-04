"use client";
import courses from "@/data/courses.json";
import { authClient } from "@/lib/auth-client";
import { usePathname, useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { FaCheckCircle, FaClock, FaLock, FaStar } from "react-icons/fa";

export default function CourseDetailsPage({ params }) {
  const unwrappedParams = use(params);
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (!isPending) {
      if (!session) {
        router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
      } else {
        const foundCourse = courses.find(c => c.id === parseInt(unwrappedParams.id));
        setCourse(foundCourse);
      }
    }
  }, [session, isPending, router, pathname, unwrappedParams.id]);

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh] gap-4">
        <FaLock className="text-6xl text-gray-300" />
        <h2 className="text-2xl font-bold">Authentication Required</h2>
        <p>Redirecting to login...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh] gap-4">
        <h2 className="text-2xl font-bold">Course Not Found</h2>
        <button onClick={() => router.push("/courses")} className="btn btn-primary">Back to Courses</button>
      </div>
    );
  }

  const curriculum = [
    "Introduction & Getting Started",
    "Core Concepts and Fundamentals",
    "Advanced Techniques",
    "Real-world Project Implementation",
    "Best Practices & Optimization",
    "Final Assessment and Certification"
  ];

  return (
    <div className="py-10 max-w-5xl mx-auto px-4 md:px-0">
      <div className="bg-base-100 rounded-lg overflow-hidden shadow-xl mb-10">
        <div className="h-64 md:h-96 relative">
          <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-end p-8">
            <div className="text-white">
              <span className="badge badge-primary mb-3">{course.category}</span>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{course.title}</h1>
              <p className="text-lg opacity-90 max-w-2xl">{course.description}</p>
            </div>
          </div>
        </div>

        <div className="p-8 flex flex-wrap gap-6 items-center border-b border-base-200">
          <div className="flex items-center gap-3">
            <img
              src={course.instructorImage}
              alt={course.instructor}
              className="w-12 h-12 rounded-full object-cover border-2 border-primary/10"
            />
            <div>
              <p className="text-sm text-gray-500">Instructor</p>
              <p className="font-bold">{course.instructor}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-warning text-xl" />
            <div>
              <p className="text-sm text-gray-500">Rating</p>
              <p className="font-bold">{course.rating} / 5.0</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-info text-xl" />
            <div>
              <p className="text-sm text-gray-500">Duration</p>
              <p className="font-bold">{course.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button className="btn btn-primary btn-lg">Enroll Now</button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="bg-base-100 p-8 shadow-sm border border-base-200">
            <h2 className="text-2xl font-bold mb-4">About This Course</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {course.description} Expand your knowledge and master the skills required to excel in {course.category}.
              This comprehensive course is designed for {course.level.toLowerCase()}s and covers everything from basics to advanced topics.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By the end of this course, you will have a solid understanding of the concepts and practical experience through hands-on projects.
            </p>
          </div>

          <div className="bg-base-100 p-8 shadow-sm border border-base-200">
            <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
            <ul className="space-y-4">
              {curriculum.map((item, index) => (
                <li key={index} className="flex items-start gap-4 p-4 rounded-xl bg-base-200/50 hover:bg-base-200 transition-colors">
                  <div className="bg-primary/20 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item}</h3>
                    <p className="text-sm text-gray-500">Module {index + 1} • Video & Text lessons</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-base-100 p-6 shadow-sm border border-base-200">
            <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
            <ul className="space-y-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <FaCheckCircle className="text-success mt-1 shrink-0" />
                  <span className="text-sm">Practical skill {item} related to {course.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-base-100 p-6 shadow-sm border border-base-200">
            <h3 className="text-xl font-bold mb-4">Course Features</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between py-2 border-b border-base-200">
                <span className="text-gray-500">Skill Level</span>
                <span className="font-semibold">{course.level}</span>
              </li>
              <li className="flex justify-between py-2 border-b border-base-200">
                <span className="text-gray-500">Lessons</span>
                <span className="font-semibold">{curriculum.length}</span>
              </li>
              <li className="flex justify-between py-2 border-b border-base-200">
                <span className="text-gray-500">Certificate</span>
                <span className="font-semibold">Yes</span>
              </li>
              <li className="flex justify-between py-2">
                <span className="text-gray-500">Access</span>
                <span className="font-semibold">Lifetime</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}