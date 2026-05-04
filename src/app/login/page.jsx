"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await authClient.signIn.email({ email, password });
      if (error) {
        toast.error(error.message || "Failed to login.");
      } else {
        toast.success("Successfully logged in!");
        router.push("/");
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({ provider: "google", callbackURL: "/" });
    } catch (err) {
      toast.error("Failed to login with Google.");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-xl w-full m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 overflow-hidden h-[650px]">

        <div className="md:w-1/2 p-8 md:p-12 flex items-center justify-center">
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tight mb-8">Login</h1>

          <button
            onClick={handleGoogleLogin}
            className="w-full font-bold border-2 border-black py-3 flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors mb-6"
          >
            <svg className="w-5" viewBox="0 0 533.5 544.3">
              <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4" />
              <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853" />
              <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04" />
              <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335" />
            </svg>
            <span className="uppercase text-xs tracking-widest">Google Login</span>
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-300"></span></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-500 font-bold">Or use email</span></div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              className="w-full px-4 py-3 border-2 border-gray-200 focus:border-black outline-none font-medium text-sm transition-colors"
              type="email"
              placeholder="EMAIL ADDRESS"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="w-full px-4 py-3 border-2 border-gray-200 focus:border-black outline-none font-medium text-sm transition-colors"
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-white py-4 font-black uppercase tracking-widest hover:bg-primary transition-colors disabled:opacity-50"
            >
              {loading ? "AUTHENTICATING..." : "LOGIN"}
            </button>
            <p className="text-center text-xs font-bold text-gray-500 uppercase mt-4">
              New here? <Link href="/register" className="text-primary underline">Create Account</Link>
            </p>
          </form>
          </div>
        </div>

        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/login.svg')" }}
          ></div>
        </div>
      </div>
    </div>
  );
}