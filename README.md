# unilink


# UniLink Backend

This is the Node.js backend for the **UniLink** mobile app, a campus assistant platform built to support students, staff, and faculty. The backend integrates with **Supabase** for authentication and database operations.

---

## 📦 Tech Stack

- **Node.js** + **Express**
- **Supabase** (PostgreSQL, Auth, Realtime, Storage)
- **dotenv** for environment variables
- **CORS** for handling cross-origin requests

---

## ⚙️ Project Structure

```
unilink-backend/
├── controllers/           # API logic (auth, events, etc.)
│   └── authController.js
├── routes/                # Express route handlers
│   └── authRoutes.js
├── services/              # Supabase connection and service logic
│   └── supabaseClient.js
├── .env                   # Environment variables (DO NOT COMMIT)
├── server.js              # App entry point
├── package.json           # Node project metadata
└── README.md              # You're here!
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/unilink-backend.git
cd unilink-backend
```

### 2. Install Dependencies

```bash
npm install
```

---

## 🔐 Supabase Setup

1. Go to [https://app.supabase.com](https://app.supabase.com) and create a project.
2. In your Supabase dashboard:
   - Go to **Settings → API**
   - Copy your **Project URL**
   - Copy your **Anon public key**

3. Create a `.env` file in the root:

```env
SUPABASE_URL=https://<your-project-id>.supabase.co
SUPABASE_KEY=eyJhbGciOi...   # Your anon public key
PORT=4000
```

> 🔒 Never commit `.env` to version control.

---

## 🧪 Run the Project

```bash
npm start
```

Or with nodemon:

```bash
npm run dev
```

You should see:

```
Server is running on port 4000
```

---

## 🧩 API Routes (So Far)

### 🔐 Auth Routes

| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| POST   | `/api/auth/signup` | Create a new user account |

#### Example Payload
```json
{
  "email": "student@example.com",
  "password": "123456"
}
```

---

## 📁 Example: Supabase Client Setup (`services/supabaseClient.js`)

```js
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

module.exports = supabase;
```

---

## ✅ Next Steps

- Add more routes (`/api/events`, `/api/grades`, `/api/internships`)
- Protect routes using Supabase JWTs (middleware)
- Add Supabase Row Level Security (RLS) policies in dashboard

---

## 🙋 Contributing

1. Fork the repo
2. Create a feature branch
3. Push your changes and create a PR

---

## 📄 License

MIT License — free for educational or academic use.

---

## 💬 Support

For help, contact the backend engineer or your team lead.
