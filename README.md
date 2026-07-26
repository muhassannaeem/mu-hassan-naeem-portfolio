# ✨ Muhammad Hassan Naeem - Interactive Portfolio

Welcome to my personal portfolio! This project showcases my skills and passion for building modern, high-performance web applications. It's crafted with cutting-edge technologies and designed for a seamless user experience.

## 🚀 Project Overview

This portfolio is built using:

-   **Next.js 14+**: A powerful React framework for building fast and scalable web applications.
-   **TypeScript**: Ensures type safety and improves code quality.
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-   **Framer Motion**: For beautiful and smooth animations that enhance user interaction.

## 🌟 Features

-   **Sleek Dark Theme**: A modern aesthetic with captivating cyan and indigo gradients.
-   **Fully Responsive**: Looks great on any device, from mobile to desktop.
-   **Fluid Animations**: Powered by Framer Motion for a dynamic and engaging experience.
-   **Optimized Performance**: Fast loading times and SEO-friendly with Next.js App Router.
-   **Type-Safe Code**: Built with TypeScript for robust and maintainable code.
-   **Integrated Contact Form**: Uses Nodemailer for reliable email communication.

## 📂 Project Structure

```
├── app/
│   ├── api/contact/route.ts  # API endpoint for contact form
│   ├── layout.tsx            # Root layout for the application
│   └── page.tsx              # Main landing page
├── public/
│   ├── assets/               # Images and static files
│   └── ...
└── src/
    ├── components/           # Reusable UI components
    │   ├── layout/           # Navbar, Footer
    │   ├── sections/         # Hero, About, Projects, Contact, etc.
    │   └── ui/               # Generic UI elements
    ├── config/               # Configuration files
    └── styles/               # Global styles and Tailwind setup
```

## 🛠️ Tech Stack Highlights

### Frontend

-   **Next.js 14+ & React**: Core framework and UI library.
-   **TypeScript**: For enhanced developer experience and fewer bugs.
-   **Tailwind CSS**: Efficient styling with utility classes.
-   **Framer Motion**: Delightful animations and transitions.
-   **Lucide React**: Modern and customizable SVG icons.

### Backend (for Contact Form)

-   **Nodemailer**: Node.js module for sending emails.
-   **Gmail API**: Secure email delivery.

### Development Tools

-   **ESLint**: Code linting for quality and consistency.
-   **PostCSS**: For CSS transformations and optimizations.

## 💡 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have:

-   Node.js (18+ recommended)
-   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/muhassannaeem/mu-hassan-naeem-portfolio.git
    cd mu-hassan-naeem-portfolio
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    ```
3.  **Set up environment variables:**
    Create a `.env.local` file in the root directory and add:
    ```env
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASSWORD=your-16-character-app-password
    ```
    (Refer to the [Email Setup](#-email-setup-with-nodemailer) section for details on getting `EMAIL_PASSWORD`)

4.  **Run the development server:**
    ```bash
    npm run dev
    # or yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio in action.

## 📧 Email Setup with Nodemailer

To enable the contact form to send emails, you'll need to configure a Gmail App Password:

1.  **Enable 2-Step Verification** for your Gmail account.
2.  **Generate an App Password** from [Google Account Security](https://myaccount.google.com/apppasswords).
3.  **Update `.env.local`** with your Gmail address and the generated App Password.

## 📚 Learn More

Explore the official documentation for the technologies used:

-   [Next.js Documentation](https://nextjs.org/docs)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [Framer Motion Documentation](https://www.framer.com/motion/)
-   [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 👤 Author

**Muhammad Hassan Naeem**

-   Email: muhassannaeem@gmail.com
-   LinkedIn: [Muhammad Hassan Naeem](https://www.linkedin.com/in/muhammad-hassan-naeem-77b551251/)
-   GitHub: [muhassannaeem](https://github.com/muhassannaeem)

---

**Made with ❤️ by Muhammad Hassan Naeem**
