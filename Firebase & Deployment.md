# Firebase & Deployment
*Part of the [Vibe Coding Workshop](https://workshop.nerktek.com/) series* \
*By Noah Eisenbruch - noaheisenbruch@gmail.com*

This guide covers taking your local project and connecting it to a real backend using Google Firebase.

> **Do you need Firebase?** Not every project does. Firebase is most useful when your app needs:
> - **User accounts** (login/signup) → Firebase Authentication
> - **Saving data** (scores, profiles, posts) → Firestore or Realtime Database
> - **Storing files** (images, videos, uploads) → Firebase Storage
> - **Hosting** (putting your site online) → Firebase Hosting
>
> If your project is a static site (portfolio, calculator, game with no saved state), you can deploy it with GitHub Pages or any static host instead.

> **Important:** Every project is different. A simple portfolio might only need **Hosting**, while a chat app needs a **Realtime Database** and **Authentication**.
>
> **The best approach is to tell your AI what you want to build, and let it guide you through the specific tools you need.**

> **API Keys & Secrets:** If your project uses paid APIs (Gemini, Stripe, etc.), make sure your keys are secured before deploying. Use `firebase functions:secrets:set KEY_NAME` for Firebase-specific secrets, and review the full [Protecting API Keys & Secrets](Solo%20Project%20Guide.md#protecting-api-keys--secrets) guide for all approaches (`.env` files, platform environment variables, backend proxies).

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
*   **Firestore** or **Realtime Database:** To save data (see [which database should I use?](#firestore-vs-realtime-database) below).
*   **Storage:** To upload and serve files (images, videos, PDFs).
*   **Cloud Functions:** To run server-side code (API routes, background tasks, backend proxies).
*   **Emulators:** (Recommended) To test safely on your computer.

> **Important: Cloud Functions require the Blaze (pay-as-you-go) plan.** You cannot deploy Cloud Functions on the free Spark plan. The Blaze plan has no base fee — you only pay for what you use beyond the free quotas, so most small projects stay within the free tier. You'll need to add a billing account to your Firebase project to enable it.

**Configuration Prompts:**
*   **Project:** Select "Use an existing project" -> Choose the one you created.
*   **Public Directory:** Usually `.` (current folder) or `public`.
*   **Single Page App:** `No` (unless using React/Vue).
*   **Emulators:** Select Authentication and Database ports if prompted.

### Phase 3: Enable Features in Console
*   **Auth:** Go to Build > Authentication > Sign-in method > Enable **Google** or **Email/Password**.
*   **Database:** Go to Build > Firestore/Realtime Database > Create Database > Start in **Test Mode**.
*   **Storage:** Go to Build > Storage > Get Started > Start in **Test Mode**.

> **Note:** Test Mode security rules expire after 30 days and will lock out all access. When you're ready for production, ask your AI to help write proper security rules.

### Phase 4: Add the Firebase SDK
Your app needs the Firebase SDK to communicate with Firebase services. Ask your AI to handle this — it will add the necessary scripts or packages and configure them with your project's credentials.

### Phase 5: Coding
*   **Auth:** Ask AI: *"Update the app to integrate Firebase for authentication and storing user data"*
*   **Database:** Ask AI: *"Write a function to save user data to the database when they click 'Save'."*
*   **Storage:** Ask AI: *"Add an image upload feature that saves files to Firebase Storage and displays them in the app."*

---

## 3. Firestore vs Realtime Database

Firebase offers two databases. **Firestore is the recommended default** for new projects — it's newer, more powerful, and what most tutorials and AI tools will generate code for.

| | **Firestore** | **Realtime Database** |
|---|---|---|
| **Data model** | Collections of documents (like folders of JSON files) | One big JSON tree |
| **Queries** | Rich — filter, sort, paginate, compound queries | Basic — can only filter/sort on one field at a time |
| **Offline support** | Built-in for web and mobile | Mobile only |
| **Scaling** | Scales automatically, no limits on connections | 200 concurrent connections on free plan |
| **Pricing** | Per read/write/delete operation | Per bandwidth (data downloaded) |
| **Best for** | Most apps — structured data, complex queries, user profiles, content | Real-time sync where data changes constantly (live chat, multiplayer games, collaborative cursors) |

### When to Use Firestore (Default Choice)

Use Firestore unless you have a specific reason not to. It handles most use cases well:
- User profiles and settings
- Posts, comments, reviews
- Product catalogs, inventories
- To-do lists, project boards
- Any app where you query or filter data

### When to Use Realtime Database

The Realtime Database is optimized for very fast, constant data sync across many clients:
- **Live chat** where messages appear instantly
- **Multiplayer games** with shared state
- **Presence systems** (online/offline indicators)
- **Collaborative editing** (cursors, typing indicators)

It's priced per bandwidth rather than per operation, which can be cheaper for apps where the same data is read very frequently.

> **Tip:** You can use both in the same project. Some apps use Firestore for structured data (user profiles, posts) and Realtime Database for live features (presence, typing indicators).

> **Ask Your AI:** *"I'm building [describe your app]. Should I use Firestore or Realtime Database, and why?"*

---

## 4. File Storage (Images & Uploads)

Firebase Storage lets your app upload, store, and serve files — profile photos, user-generated images, PDFs, videos, etc. Files are stored in a **bucket** (like a cloud folder) and accessed via unique download URLs.

### When Do You Need Storage?

Use Firebase Storage when your app handles files that users upload or that change over time. Common examples:

| Use Case | Example |
|----------|---------|
| Profile photos | Users upload an avatar during signup |
| Image galleries | A recipe app where users add food photos |
| File attachments | A notes app that supports PDF uploads |
| Generated content | AI-generated images your app creates and saves |

> **Don't need Storage?** If your images are static and part of your code (logos, icons, backgrounds), just put them in your project folder. Storage is for dynamic files that users create or upload at runtime.

### How It Works

1. **Enable Storage** in the Firebase Console (Build > Storage > Get Started).
2. Ask your AI to integrate it. Example prompts:
   - *"Add a profile photo upload. Let users pick an image, upload it to Firebase Storage, and save the download URL to their Firestore profile."*
   - *"Add an image gallery feature where users can upload multiple photos and view them in a grid."*
3. The typical flow your AI will implement:
   - User selects a file → App uploads it to Storage → Storage returns a **download URL** → App saves the URL to your database → App displays the image using that URL.

### Storage Security Rules

Storage has its own security rules, separate from your database rules. Test Mode allows anyone to read and write — lock it down before deploying.

**Test Mode (default) — anyone can upload/download:**
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```

**Production — users can only access their own files, with size and type limits:**
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /users/{userId}/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null
                   && request.auth.uid == userId
                   && request.resource.size < 5 * 1024 * 1024
                   && request.resource.contentType.matches('image/.*');
    }
  }
}
```

This example limits uploads to **images under 5 MB** for authenticated users, stored under their own user folder. Ask your AI to adjust these rules for your app's needs.

> **Tip:** Ask your AI: *"Write Storage security rules that let authenticated users upload images under 5 MB to their own folder, and let anyone view them."*

### Apply Storage Rules

*   **Console:** Go to Build > Storage > Rules tab > Paste your rules > Publish.
*   **CLI:** Edit `storage.rules`, then deploy: `firebase deploy --only storage`.

---

## 5. Testing with Emulators

Firebase provides local emulators that run real Firebase services on your machine, so you can test without affecting your live project.

1.  Run in terminal:
    ```bash
    firebase emulators:start
    ```
2.  This starts local servers for your Hosting, Database, and Auth.
3.  Open the **Emulator UI** link provided (usually `http://localhost:4000`).
4.  You can view and edit your local database here without affecting the real live database.

---

## 6. Security Rules (Before You Go Live)

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

> **Tip:** Ask your AI: *"Look at my database structure and write security rules so users can only read and write their own data."* It will generate rules specific to your app.

---

## 7. Deploy to the Public Web

When your app works locally (or in emulators), put it online for the world.

1.  Run in terminal:
    ```bash
    firebase deploy
    ```
2.  Firebase will upload your files and give you a live **Hosting URL** (e.g., `https://your-project.web.app`).
3.  Open that link to see your live app!

---

## 8. Summary Checklist

- [ ] Create project in Firebase Console
- [ ] `npm install -g firebase-tools`
- [ ] `firebase login`
- [ ] `firebase init` (Select Hosting + features you need)
- [ ] Enable Auth / Database / Storage in Firebase Console
- [ ] Ask AI to add the Firebase SDK and integrate it with your app
- [ ] Test locally (`firebase emulators:start`)
- [ ] [Secure your API keys](Solo%20Project%20Guide.md#protecting-api-keys--secrets) before deploying
- [ ] Set up security rules (database + storage) before deploying
- [ ] Deploy (`firebase deploy`)
