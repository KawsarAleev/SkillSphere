<div align="center">
    <h1>SKILLSPHERE [ASSIGNMENT 8]</h1>
</div>

## ABOUT

SkillSphere is a premier online learning destination where ambition meets expertise. It empowers users to discover, explore, and master high-demand industry skills through a curated catalog of expert-led courses. This project was developed as part of **Programming Hero Assignment 8**, focusing on secure authentication systems, protected server-side routing, and complex user profile management using Next.js.

## TECH STACK

![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white) ![BetterAuth](https://img.shields.io/badge/BetterAuth-%23FF4500.svg?style=flat-square&logo=auth0&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat-square&logo=mongodb&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=flat-square&logo=framer&logoColor=blue) ![React Toastify](https://img.shields.io/badge/React_Toastify-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB) ![DaisyUI](https://img.shields.io/badge/DaisyUI-5833ff?style=flat-square&logo=daisyui&logoColor=white)

## KEY FEATURES

1. **Secure Multi-Auth Gateway:** Experience seamless access through robust Email/Password credentials or instant Google Social Login, all powered by BetterAuth.
2. **Encapsulated Learning Vault:** Premium course content is protected via advanced route guards, ensuring only verified members can access the curriculum.
3. **Dynamic Skill Discovery:** Explore a scalable course ecosystem with real-time search functionality, interactive categories, and "Trending" highlights.

<div align="center">
    <h1>ASSIGNMENT INSTRUCTIONS</h1>
    <h2>[Features & Requirements]</h2>
</div>

### 1. Navbar & Layout
- Put **SkillSphere logo** on the left and **Home, Courses, Profile** on the right.
- **Dynamic Auth Logic:** 
    - If logged out: Show **Login** and **Register** buttons.
    - If logged in: Show **User Avatar** and **Logout** button.
- Persistent Main Layout using Next.js App Router structure.

---

### 2. Homepage Sections
- **Hero Section:** Dynamic Slider/Banner with a "wow" factor (e.g., "Upgrade Your Skills Today").
- **Popular Courses:** Automatically displays the **Top 3 highest-rated courses** from the JSON data.
- **Top Instructors:** Highlights 3–4 expert mentor cards with their specializations.
- **Extra Section:** A "Learning Tips" or "Study Techniques" section for added UX value.

---

### 3. Course Data (JSON)
The platform is powered by a `courses.json` file featuring 6+ realistic courses.
Each course object includes:
```json
{
  "id": 1,
  "title": "Complete Web Development Bootcamp",
  "instructor": "John Doe",
  "duration": "20 hours",
  "rating": 4.8,
  "level": "Beginner",
  "description": "Learn full-stack web development from scratch.",
  "image": "https://example.com/course.png",
  "category": "Development"
}
```

---

### 4. All Courses Page
- Displays the full grid of available courses.
- Clicking the **"Details"** button navigates to the unique course page.
- Optimized for mobile (1 column), tablet (2 columns), and desktop (3 columns).

---

### 5. Course Details Page [Protected]
- **Access Control:** This route is strictly protected. Unauthenticated users are redirected to the Login page.
- Displays: Full course imagery, Instructor details, Description, and a static **Curriculum List**.

---

### 6. Authentication UI
- **Login Page:** Clean form with Email and Password fields + Google Login button.
- **Register Page:** Form with Name, Email, Photo URL, and Password.
- Successful authentication navigates the user back to the Home page or their previous destination.

---

### 7. Responsive Design
- The entire platform is fully responsive and crash-free on reload.
- Custom **404 Page** implementation for invalid routes.
- **Loading animations** visible during data fetching or session checks.

---

## ⭐ Challenge Requirements [10 Marks]

---

### C1. Advanced Search Functionality
- Added a **Search Bar** on the All Courses page.
- Users can filter courses by **Title** in real-time as they type.

---

### C2. My Profile Dashboard
- A dedicated `/my-profile` route displaying the logged-in user's data (Name, Email, Image).
- Features a "Member Since" badge for personalized UX.

---

### C3. Profile Update Feature
- Clicking "Update Profile" takes the user to a specialized form.
- Users can update their **Name** and **Image URL** using the `authClient.updateUser` method.

---

### C4. Interactive Animations
- Integrated **Framer Motion** (Motion) to handle smooth page transitions and hover effects on course cards.

---

## Technologies to Use

| Technology | Purpose |
|---|---|
| **Next.js 15** | Framework & App Router |
| **BetterAuth** | Secure Authentication |
| **Tailwind CSS** | Styling & Responsiveness |
| **MongoDB** | Database Storage |
| **Framer Motion** | UI Animations |

---

## Deployment
Deployed on **Vercel** with secure environment variable management.

