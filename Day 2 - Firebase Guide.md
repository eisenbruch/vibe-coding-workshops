# Day 2: Architecture & The Cloud (Firebase Guide)
*By Noah Eisenbruch - noaheisenbruch@gmail.com*
*Last updated: January 29, 2026*

This guide covers taking your local project and connecting it to a real backend using Google Firebase.

> **⚠️ Important:** Every project is different. A simple portfolio might only need **Hosting**, while a chat app needs a **Realtime Database** and **Authentication**.
>
> **The best approach is to tell your AI what you want to build, and let it guide you through the specific tools you need.**

## 1. The Vibe Coding Approach (Recommended)

Tell your AI what you want to build and let it guide the setup. Example prompt:

> "I want to connect this project to Firebase. I need to host it online, allow users to log in, and save their high scores. Walk me through the setup and update the app accordingly."

The AI will tell you which Firebase services to enable, run `firebase init`, and update your app with the integration code.

---

## 2. Example Workflow: Hosting + Auth + Database

If you prefer a manual reference, below is the standard setup for a typical **interactive web application** (e.g., a Todo app or Game with high scores).

### Phase 1: Setup & Install
1.  **Create Project:** Go to [console.firebase.google.com](https://console.firebase.google.com) and create a new project.
2.  **Install CLI:** In VS Code terminal, run: `npm install -g firebase-tools`
3.  **Login:** Run `firebase login`.

### Phase 2: Initialization
Run `firebase init` in your project folder. This creates config files (`firebase.json`, `.firebaserc`) that your AI can read and modify.

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

> **⚠️ Note:** Test Mode security rules expire after 30 days and will lock out all access. When you're ready for production, ask your AI to help write proper security rules.

### Phase 4: Add the Firebase SDK
Your app needs the Firebase SDK to communicate with Firebase services. Ask your AI to handle this — it will add the necessary scripts or packages and configure them with your project's credentials.

### Phase 5: Coding
*   **Auth:** Ask AI: *"Update the app to integrate Firebase for authentication and storing user data"*
*   **Database:** Ask AI: *"Write a function to save user data to the database when they click 'Save'."*

---

## 3. Testing with Emulators

Firebase provides local emulators that run real Firebase services on your machine, so you can test without affecting your live project.

1.  Run in terminal:
    ```bash
    firebase emulators:start
    ```
2.  This starts local servers for your Hosting, Database, and Auth.
3.  Open the **Emulator UI** link provided (usually `http://localhost:4000`).
4.  You can view and edit your local database here without affecting the real live database.

---

## 4. Security Rules (Before You Go Live)

Test Mode leaves your database open to anyone — it's meant for development only. Before deploying, you need security rules that protect your data.

### What Test Mode Rules Look Like

**Firestore (Test Mode) — anyone can read/write everything:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

**Realtime Database (Test Mode):**
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

### Common Production Rule Patterns

**Firestore — authenticated users can only access their own data:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

**Realtime Database — same pattern:**
```json
{
  "rules": {
    "users": {
      "$userId": {
        ".read": "$userId === auth.uid",
        ".write": "$userId === auth.uid"
      }
    }
  }
}
```

### How to Apply Rules

**Option 1: Firebase Console**
*   **Firestore:** Go to Build > Firestore Database > Rules tab > Paste your rules > Publish.
*   **Realtime Database:** Go to Build > Realtime Database > Rules tab > Paste your rules > Publish.

**Option 2: CLI (Recommended)**
*   Rules live in local files (`firestore.rules` or `database.rules.json`) created during `firebase init`.
*   Edit the file, then deploy: `firebase deploy --only firestore:rules` or `firebase deploy --only database`.

> **💡 Tip:** Ask your AI: *"Look at my database structure and write security rules so users can only read and write their own data."* It will generate rules specific to your app.

---

## 5. Deploy to the Public Web

When your app works locally (or in emulators), put it online for the world.

1.  Run in terminal:
    ```bash
    firebase deploy
    ```
2.  Firebase will upload your files and give you a live **Hosting URL** (e.g., `https://your-project.web.app`).
3.  Open that link to see your live app!

---

## 6. Summary Checklist

- [ ] Create project in Firebase Console
- [ ] `npm install -g firebase-tools`
- [ ] `firebase login`
- [ ] `firebase init` (Select Hosting + features you need)
- [ ] Enable Auth / Database in Firebase Console
- [ ] Ask AI to add the Firebase SDK and integrate it with your app
- [ ] Test locally (`firebase emulators:start`)
- [ ] Set up security rules before deploying
- [ ] Deploy (`firebase deploy`)