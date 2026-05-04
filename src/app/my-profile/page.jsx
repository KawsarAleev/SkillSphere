"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaCalendarAlt, FaEnvelope, FaUser, FaUserEdit } from "react-icons/fa";

export default function MyProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [isPending, session, router]);

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!session) return null;

  const user = session.user;

  return (
    <div className="py-10 max-w-4xl mx-auto">
      <div className="bg-base-100 rounded-xl shadow-xl overflow-hidden border border-base-200">
        <div className="bg-primary/10 h-48 relative">
          <div className="absolute -bottom-16 left-10">
            <div className="avatar">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 bg-white">
                <img src={user.image || user.photoURL || "/img/default-avatar.webp"} alt="Profile" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-6">
            <Link href="/my-profile/update" className="btn btn-primary shadow-lg flex items-center gap-2">
              <FaUserEdit /> Update Profile
            </Link>
          </div>
        </div>

        <div className="pt-20 px-10 pb-10">
          <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
          <p className="text-gray-500 mb-8 flex items-center gap-2">
            <span className="badge badge-success badge-sm rounded-full"></span> Active Student
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold border-b pb-2">Personal Information</h2>

              <div className="flex items-center gap-4 bg-base-200 p-4 rounded-xl">
                <div className="bg-primary/20 p-3 rounded-full text-primary">
                  <FaUser className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Full Name</p>
                  <p className="font-semibold text-lg">{user.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-base-200 p-4 rounded-xl">
                <div className="bg-info/20 p-3 rounded-full text-info">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Address</p>
                  <p className="font-semibold text-lg">{user.email}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold border-b pb-2">Account Details</h2>

              <div className="flex items-center gap-4 bg-base-200 p-4 rounded-xl">
                <div className="bg-warning/20 p-3 rounded-full text-warning">
                  <FaCalendarAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Member Since</p>
                  <p className="font-semibold text-lg">
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })
                      : "Recently joined"}
                  </p>
                </div>
              </div>

              <div className="bg-base-200 p-6 rounded-xl flex flex-col justify-center items-center text-center h-32 border border-dashed border-gray-300">
                <p className="font-semibold mb-2">My Enrolled Courses</p>
                <Link href="/courses" className="text-primary font-bold hover:underline">
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
