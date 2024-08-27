# ⛪ Church Attendance Application

The **Church Attendance Application** is a web-based platform designed to help churches manage their weekly activities, with a specific focus on tracking and managing attendance. This application features full CRUD (Create, Read, Update, Delete) operations and secure user authentication using NextAuth.

## 📋 Table of Contents
- [Features](#features)
  - [Attendance Form](#attendance-form)
  - [CRUD Operations](#crud-operations)
  - [Authentication](#authentication)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Features

### Attendance Form
The Church Attendance Application includes an attendance form where users can submit information regarding weekly church activities. Key functionalities include:

- **Data Submission:** Information entered into the attendance form is sent to a MongoDB database hosted on MongoDB Atlas. This ensures efficient storage and retrieval of attendance records.
- **API Integration:** The submitted data is fetched via an API endpoint using the GET method. The data is then mapped and displayed on the homepage, allowing for easy viewing and management.

### CRUD Operations
The application demonstrates full CRUD functionality:

- **Create:** Users can add new attendance records via the attendance form.
- **Read:** All attendance records are fetched from the MongoDB database and displayed on the homepage.
- **Update:** Each attendance record can be edited directly from the homepage, allowing users to make changes as needed.
- **Delete:** Records can be deleted, removing them from both the homepage display and the database.

### Authentication
The application uses **NextAuth** for secure user authentication. This ensures that only authorized users can access and manage the church’s attendance records.

- **Secure Access:** Authentication is required to access the CRUD operations, ensuring that data management is restricted to authorized personnel.
- **User Management:** Users can log in and out securely, with their session data managed efficiently.

## 🛠️ Technologies Used

- ![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white) - A React-based framework for server-side rendering and building web applications.
- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) - A cloud-hosted NoSQL database used for storing attendance records.
- ![NextAuth](https://img.shields.io/badge/NextAuth-%2320232a.svg?style=for-the-badge&logo=nextauth&logoColor=white) - A library for handling authentication in Next.js applications.
- ![React Icons](https://img.shields.io/badge/React_Icons-%2320232a.svg?style=for-the-badge&logo=react&logoColor=white) - A library of popular icons used throughout the application for visual enhancement.
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) - A utility-first CSS framework used for styling the application, ensuring a responsive and modern design.

## 🚀 Getting Started

To get started with the Church Attendance Application, follow the steps below:

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/church-attendance-app.git
   cd church-attendance-app
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env.local file in the root directory and add the necessary environment variables for MongoDB, NextAuth, etc.

Run the development server:

bash
Copy code
npm run dev
The app will be available at http://localhost:3000.

Usage
Submit Attendance: Fill out the attendance form to record weekly church activities.
Manage Records: Use the edit and delete buttons on the homepage to update or remove attendance records.
Authentication: Log in securely to access and manage attendance data.
🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request or open an issue to suggest improvements or report bugs.
