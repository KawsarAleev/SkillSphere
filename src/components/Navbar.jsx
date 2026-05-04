"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  const navLinks = (
    <>
      <li>
        <Link href="/" className={pathname === "/" ? "active font-bold" : ""}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/courses" className={pathname === "/courses" ? "active font-bold" : ""}>
          Courses
        </Link>
      </li>
      {session && (
        <li>
          <Link href="/my-profile" className={pathname === "/my-profile" ? "active font-bold" : ""}>
            My Profile
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">
          SkillSphere
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {isPending ? (
          <span className="loading loading-spinner loading-sm text-primary"></span>
        ) : session ? (
          <>
            {/* 1. The Avatar Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border border-primary hover:border-primary-focus transition-all"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src={session.user.image || "/img/default-avatar.webp"}
                  />
                </div>
              </div>


              {/* Dropdown Content */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow-2xl bg-base-100 rounded-box w-56 border border-base-300"
              >
                <div className="px-4 py-3 mb-2">
                  <p className="font-bold text-base truncate">{session.user.name}</p>
                  <p className="text-xs opacity-60 truncate">{session.user.email}</p>
                </div>
                <div className="divider my-0"></div>
                <li>
                  <Link href="/my-profile" className="py-3 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    View Profile
                  </Link>
                </li>

                {/* Mobile-only Logout */}
                <li className="sm:hidden">
                  <button
                    onClick={handleLogout}
                    className="btn mt-5 text-error flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout
                  </button>
                </li>
              </ul>
            </div>

            {/* 2. Logout Button */}
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-error btn-sm hidden sm:flex"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </>
        ) : (
          <div className="flex gap-2">
            <Link href="/login" className="btn btn-outline btn-primary btn-sm">Login</Link>
            <Link href="/register" className="btn btn-primary btn-sm">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
}
