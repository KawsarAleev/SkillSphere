"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaImage, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

export default function UpdateProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isPending) {
      if (!session) {
        router.push("/login");
      } else {
        setName(session.user.name || "");
        setImage(session.user.image || session.user.photoURL || "");
      }
    }
  }, [session, isPending, router]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { data, error } = await authClient.updateUser({
        name,
        image
      });
      
      if (error) {
        toast.error(error.message || "Failed to update profile");
      } else {
        toast.success("Profile updated successfully!");
        router.push("/my-profile");
        router.refresh();
      }
    } catch (err) {
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (isPending || !session) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="py-10 max-w-2xl mx-auto">
      <Link href="/my-profile" className="btn btn-ghost mb-6 gap-2">
        <FaArrowLeft /> Back to Profile
      </Link>
      
      <div className="card bg-base-100 shadow-xl border border-base-200">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold mb-6">Update Information</h2>
          
          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="flex justify-center mb-6">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={image || "/img/default-avatar.webp"} alt="Preview" />
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Update your name" 
                  className="input input-bordered w-full pl-10" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Image URL</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaImage className="text-gray-400" />
                </div>
                <input 
                  type="url" 
                  placeholder="https://example.com/your-image.jpg" 
                  className="input input-bordered w-full pl-10" 
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </div>
              <label className="label">
                <span className="label-text-alt text-gray-500">Provide a direct link to an image.</span>
              </label>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary w-full mt-4" 
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : "Update Information"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
