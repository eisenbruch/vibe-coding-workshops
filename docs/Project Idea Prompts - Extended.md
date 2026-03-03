# Project Idea Prompts - Extended
*Part of the [Vibe Coding Workshop](https://workshop.nerktek.com/) series* \
*By Noah Eisenbruch - noaheisenbruch@gmail.com*

*Full starter prompts for workshop project ideas. Use these as starting points and customize to your liking.*

---

## Simple Projects

#### To-Do List
```
Create a to-do list app with the following features:
- Add, edit, and delete tasks
- Mark tasks as complete with a checkbox
- Filter view by "all", "active", and "completed"
- Tasks persist in localStorage
Use vanilla JavaScript or React, make it clean and minimal with a soft color palette.
```

#### Habit Tracker
```
Build a habit tracker that lets users:
- Add custom habits to track
- Mark habits as complete for each day
- Show a 7-day streak calendar view
- Calculate and display current streak
Use a grid layout with green checkmarks for completed days. Make it motivating and visually rewarding.
```

#### Custom Calculator
```
Create a calculator with:
- Basic operations (+, -, ×, ÷)
- Clear and backspace functions
- Keyboard support for number entry
- Display for current input and result
Style it like a modern iOS calculator or create a retro/vintage aesthetic. Add smooth button press animations.
```

#### Basic Game
```
Build a simple guessing game where:
- Computer picks a random number between 1-100
- Player gets hints ("higher" or "lower") after each guess
- Track number of attempts
- Show win message and option to play again
Make it colorful and fun with emoji reactions to guesses. Add a difficulty selector (easy/medium/hard ranges).
```

---

## Medium Projects

#### Weather App
```
Build a weather app that includes:
- Feature 1: Search for any city and display current weather
- Feature 2: 5-day forecast with high/low temperatures
- Feature 3: Display weather icons, humidity, wind speed, and "feels like" temp
- Feature 4: Geolocation to auto-detect user's location
Design should be clean and modern with weather-appropriate background gradients (sunny = warm colors, rainy = cool colors).
Use OpenWeatherMap API or WeatherAPI.
Target audience: anyone who wants quick weather info at a glance
```

#### Portfolio Website
```
Build a personal portfolio website that includes:
- Feature 1: Hero section with animated introduction and call-to-action
- Feature 2: Project showcase with filtering by technology/category
- Feature 3: About section with skills visualization (progress bars or icons)
- Feature 4: Contact form with email integration (EmailJS or similar)
- Feature 5: Dark/light mode toggle
Design should be modern and professional with smooth scroll animations and transitions.
Use React or Next.js with Tailwind CSS.
Target audience: potential employers and clients
```

#### Pomodoro Timer App
```
Build a productivity timer app that includes:
- Feature 1: 25-minute work sessions with 5-minute breaks
- Feature 2: Customizable timer durations
- Feature 3: Audio notification when timer completes
- Feature 4: Session counter and daily statistics
- Feature 5: Pause, resume, and reset controls
Design should be minimalist and distraction-free with a large, readable timer display.
Add ambient background sounds (optional toggle).
Target audience: students and remote workers seeking better focus
```

#### Recipe Finder
```
Build a recipe search app that includes:
- Feature 1: Search recipes by ingredient or dish name
- Feature 2: Filter by dietary restrictions (vegetarian, vegan, gluten-free)
- Feature 3: Display recipe details including ingredients, instructions, and cook time
- Feature 4: Save favorite recipes to localStorage
- Feature 5: Random recipe generator for inspiration
Design should be warm and inviting with food photography and card-based layouts.
Use Spoonacular API or Edamam API.
Target audience: home cooks looking for meal ideas
```

---

## Complex Projects

#### Real-Time Chat App
```
Build a chat application where users can message each other in real-time with these features:

Core Features:
- User accounts with secure registration and login
- Instant messaging that updates without refreshing the page
- Multiple chat rooms or channels for different conversations
- See who's online/offline right now
- "User is typing..." indicators
- Message history that loads older messages as you scroll up
- Timestamps showing when each message was sent
- Read receipts (checkmarks when messages are seen)
- Emoji picker for reactions
- Ability to upload and share images/files

User Experience:
- Clean, modern interface similar to Discord or Slack
- Sidebar showing all available channels
- Main chat area for conversation
- Works smoothly on both desktop and mobile
- Fast and responsive - messages appear instantly

Technical Requirements:
- Secure authentication and password storage
- Protect against common security issues
- Store all messages and user data in a database
- Deploy the app so others can access it online

Target audience: Teams, friend groups, or communities who want their own private chat space.
```

#### Restaurant Reservation System
```
Build a restaurant reservation platform where customers can book tables and restaurants can manage their bookings:

Customer Features:
- Browse restaurants with photos, menus, and descriptions
- Search and filter by cuisine type, location, and price range
- Interactive calendar showing available reservation times
- See real-time availability (which time slots are open)
- Book a table by selecting date, time, party size, and adding special requests
- Receive email confirmation immediately after booking
- Get SMS reminder 24 hours before the reservation
- Personal dashboard to view, modify, or cancel upcoming reservations
- Works perfectly on mobile phones for booking on-the-go

Restaurant Owner Features:
- Admin panel to view all bookings for their restaurant
- Manage table capacity and available time slots
- See booking details (party size, special requests, contact info)
- Prevent double-booking automatically
- Update restaurant information, photos, and menu

User Experience:
- Elegant, trustworthy design similar to OpenTable or Resy
- High-quality imagery that makes restaurants look appealing
- Fast loading and smooth interactions
- Handle different time zones correctly

Technical Requirements:
- Secure login for both customers and restaurant owners
- Store all restaurant data, bookings, and user accounts safely
- Send automated emails and SMS notifications
- Deploy online so anyone can use it

Target audience: Diners looking for an easy way to book tables, and restaurant owners who want to manage reservations efficiently.
```

#### Interactive Data Visualization Dashboard
```
Build an analytics dashboard that turns data into beautiful, interactive visualizations:

Core Features:
- Display data in multiple chart types: line graphs, bar charts, pie charts, and heatmaps
- Click and interact with charts to explore details
- Filter data by date ranges (today, last week, last month, custom range)
- Watch data update live in real-time as new information comes in
- Upload data from CSV or JSON files
- Export visualizations and data to PDF or CSV
- Customize the dashboard layout by dragging and dropping different widgets
- Works smoothly on tablets and desktop computers

Data Management:
- Store historical data so you can analyze trends over time
- Handle large datasets without slowing down
- Automatically calculate key metrics and trends
- Refresh data on a schedule (hourly, daily, etc.)

User Roles:
- Viewers: can only see dashboards
- Editors: can modify dashboards and settings
- Admins: full control over users and data

User Experience:
- Professional interface similar to Google Analytics or Tableau
- Clear visual hierarchy showing what's important
- Intuitive controls that are easy to understand
- Fast performance even with lots of data
- Helpful loading states and error messages

Technical Requirements:
- Secure user authentication with different permission levels
- Store data in a reliable database
- Deploy online for team access

Example use cases:
- Sales dashboard showing revenue, top products, and customer trends
- Social media analytics tracking engagement and follower growth
- IoT sensor monitoring for temperature, humidity, or equipment status

Target audience: Business teams, data analysts, or anyone who needs to understand their data through visual insights.
```

#### Employee Shift Scheduler
```
Build a smart shift scheduling system that creates fair schedules automatically while respecting staff preferences and availability:

Staff Management:
- Add employees with their qualifications (certifications, skills, roles)
- Set each person's availability for every day of the week and their shift preferences
- View each employee's upcoming schedule and total hours

Automatic Scheduling:
- Generate schedules automatically that:
  - Only assign people when they're available
  - Match qualifications to shift requirements
  - Balance workload fairly across multiple weeks (not just one week at a time)
  - Avoid scheduling someone for multiple shifts on the same day
  - Respect people's preferences when possible
  - Track historical fairness so everyone gets their preferred shifts over time

Shift Templates:
- Create recurring weekly shift patterns (morning, afternoon, night, weekend)
- Define how many people are needed for each shift
- Specify what qualifications are required
- Handle shifts that span multiple days

Schedule Management:
- View schedules across multiple weeks at once
- Manually adjust assignments if needed (drag and drop)
- Clear entire weeks and regenerate schedules
- Remove individual assignments and fill them automatically
- See visual warnings for conflicts or issues

Fairness Dashboard:
- Show how fairly preferences have been fulfilled across past weeks
- Look ahead to see projected fairness for future schedules
- Adjust the time window (1-12 weeks) to analyze different periods
- Visual indicators for workload balance and preference scores

User Experience:
- Clean, professional interface focused on clarity
- Color coding for different shift types
- Visual indicators showing workload balance
- Easy to spot scheduling conflicts
- Export schedules to PDF or CSV for printing/sharing
- Works on desktop and tablet

Technical Requirements:
- Store all staff data, shifts, and schedules in a database
- Smart algorithm that creates fair, conflict-free schedules
- Fast performance even with many employees and weeks of data

Target audience: Small business managers, healthcare facilities, retail stores, or any organization that needs to create fair employee schedules while managing complex availability and preferences.
```

---

## Bonus Challenge

#### Open Source Contribution Challenge

Take a project that you use from GitHub, come up with an improvement, and submit a PR (pull request).

**How to get started:**
1. Find a project on GitHub that is interesting or useful to you
2. Set up the project locally and explore the codebase
3. Pick an existing issue or come up with an improvement (bug fix, feature, documentation, tests)
4. Fork the repo, create a branch, and make your changes
5. Write clear commit messages and test your changes
6. Submit a pull request with a detailed description

**This teaches you about:**
- Reading and understanding existing codebases
- Contributing to open source communities
- Professional collaboration workflows
- Git and version control best practices
- Code review process and feedback incorporation

**Recommended platforms to find projects:**
- GitHub Explore (github.com/explore)
- First Timers Only (firsttimersonly.com)
- Good First Issue (goodfirstissue.dev)
- Up For Grabs (up-for-grabs.net)
