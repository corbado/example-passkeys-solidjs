# SolidJS Passkey Example App

This is a sample implementation of the Corbado web-js package integrated into a web application built with SolidJS.

Please see the full [blog post](https://www.corbado.com/blog/solidjs-passkeys) to understand the detailed steps needed to integrate passkeys into SolidJS apps.

## File Structure

- **src/components/Auth/Auth.jsx**: Component for the sign-up / login screen
- **src/components/Profile/Profile.jsx**: Component for the user profile information shown after successful authentication
- **src/App.jsx**: Main app component that sets up routing for the SolidJS web app
- **src/index.jsx**: Entry point of the application

## Setup

### Prerequisites

1. Follow the steps in [Getting started](https://app.corbado.com/signin#register?framework=Solid.js&technology=passkeys) to create and configure a project in the [Corbado developer panel](https://app.corbado.com/#login-init).
2. Add your project's ID to an environment file as shown in the `.env.example` file.
3. Ensure you have Node.js and npm installed to run the application.

### Usage

1. **Install Dependencies**:

   ```bash
   npm install

2. **Run the Project Locally**:
   ```bash
   npm run dev
   ```
Your application will start at `http://localhost:3000`. You can now see the authentication UI and test the passkey login functionality.
