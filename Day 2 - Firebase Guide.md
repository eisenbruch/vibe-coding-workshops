# Day 2: Architecture & The Cloud (Firebase Guide)

This guide covers taking your local project and connecting it to a real backend using Google Firebase.

> **⚠️ Important:** Every project is different. A simple portfolio might only need **Hosting**, while a chat app needs a **Realtime Database** and **Authentication**.
>
> **The best approach is to tell your AI what you want to build, and let it guide you through the specific tools you need.**

## 1. The Vibe Coding Approach (Recommended)

Instead of guessing which tools to enable, explain your goal to your AI assistant.

**Step 1: Define Your Needs**
Explain to your AI:
> "I want to connect this project to Firebase. I need to host it online, allow users to log in, and save their high scores. Please walk me through the setup process and update the app accordingly."

**Step 2: Follow the AI's Lead**
The AI will tell you:
1.  Which specific Firebase services to enable in the Console.
2.  The AI can go through the `firebase init` process and update your app with Firebase integration.

---

## 2. Example Workflow: Hosting + Auth + Database

If you prefer a manual reference, below is the standard setup for a typical **interactive web application** (e.g., a Todo app or Game with high scores).

### Phase 1: Setup & Install
1.  **Create Project:** Go to [console.firebase.google.com](https://console.firebase.google.com) and create a new project.
2.  **Install CLI:** In VS Code terminal, run: `npm install -g firebase-tools`
3.  **Login:** Run `firebase login`.

### Phase 2: Initialization
Run `firebase init` in your project folder.

**Common Selections:**
*   **Hosting:** To put your site online.
*   **Authentication:** For user login.
*   **Firestore** or **Realtime Database:** To save data.
*   **Emulators:** (Recommended) To test safely on your computer.

**Configuration Prompts:**
*   **Project:** Select "Use an existing project" -> Choose the one you created.
*   **Public Directory:** Usually `.` (current folder) or `public`.
*   **Single Page App:** `No` (unless using React/Vue).
*   **Emulators:** Select Authentication and Database ports if prompted.

### Phase 3: Enable Features in Console
*   **Auth:** Go to Build > Authentication > Sign-in method > Enable **Google** or **Email/Password**.
*   **Database:** Go to Build > Firestore/Realtime Database > Create Database > Start in **Test Mode**.

### Phase 4: Coding
*   **Auth:** Ask AI: *"Update the app to integrate Firebase for authentication and storing user data"*
*   **Database:** Ask AI: *"Write a function to save user data to the database when they click 'Save'."*

---

## 3. Testing with Emulators

Before deploying to the real internet, you can run a "fake" Firebase locally to test safely.

1.  Run in terminal:
    ```bash
    firebase emulators:start
    ```
2.  This starts local servers for your Hosting, Database, and Auth.
3.  Open the **Emulator UI** link provided (usually `http://localhost:4000`).
4.  You can view and edit your local database here without affecting the real live database.

---

## 4. Deploy to the Public Web

When your app works locally (or in emulators), put it online for the world.

1.  Run in terminal:
    ```bash
    firebase deploy
    ```
2.  Firebase will upload your files and give you a live **Hosting URL** (e.g., `https://your-project.web.app`).
3.  Open that link to see your live app!

---

## 5. Summary Checklist

- [ ] Create project in Firebase Console
- [ ] `npm install -g firebase-tools`
- [ ] `firebase login`
- [ ] `firebase init` (Select Hosting + features you need)
- [ ] Ask AI to update the app to use and store data in Firebase
- [ ] Test locally (`firebase emulators:start`)
- [ ] Deploy (`firebase deploy`)