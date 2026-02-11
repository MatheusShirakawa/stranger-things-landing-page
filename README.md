# Stranger Things Landing Page 🎬🍿

<div><img width="140" height="51" alt="stranger-things" src="https://github.com/user-attachments/assets/c60eff59-eafd-404a-9220-92084f54a7bc" /></div>

This repository contains the source code for a dynamic, animated landing page inspired by the Netflix series "Stranger Things." The project is built with Next.js and leverages the GreenSock Animation Platform (GSAP) to create an immersive, scroll-based user experience.

## Features

*   **Immersive Animations**: Utilizes GSAP for a wide range of animations, including:
    *   A custom SVG preloader with a drawing effect.
    *   Smooth scrolling with parallax effects powered by `ScrollSmoother`.
    *   Scroll-triggered animations that reveal elements as the user navigates the page.
    *   Character-level text animations using `SplitText` for a dramatic effect.
*   **Thematic Design**: Faithfully recreates the iconic "Stranger Things" aesthetic with a dark theme, the "Benguiat" font, and moody background imagery.
*   **Responsive Layout**: The UI is fully responsive, adapting seamlessly from desktop to mobile devices using Tailwind CSS and custom media queries.
*   **Component-Based Architecture**: Built with React and the Next.js App Router, the project is structured into logical, reusable components for different sections like the hero, footer, and testimonials.

## Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) 16
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
*   **Animation**: [GSAP (GreenSock Animation Platform)](https://gsap.com/)
    *   `@gsap/react` for React integration
    *   `ScrollTrigger` for scroll-based animations
    *   `ScrollSmoother` for smooth parallax scrolling
    *   `SplitText` for advanced text animations
*   **Linting**: [ESLint](https://eslint.org/)

## Getting Started

To run this project locally, follow the steps below.

### Prerequisites

*   Node.js (v20 or later)
*   npm, yarn, or pnpm

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/matheusshirakawa/stranger-things-landing-page.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd stranger-things-landing-page
    ```

3.  **Install the dependencies:**
    ```sh
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the live application. The page will auto-update as you edit the source files.

## Available Scripts

This project includes the following scripts defined in `package.json`:

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the application for production.
*   `npm run start`: Starts the production server after a build.
*   `npm run lint`: Runs ESLint to check for code quality and style issues.
