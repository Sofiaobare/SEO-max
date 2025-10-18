# 🚀 SEO Platform Full Suite v1.4

A full-featured SEO optimization platform including keyword analysis, site audit, backlinks, and content tools — with JWT auth, Stripe payments, Redis caching, and PostgreSQL storage.

---

## 🧩 Tech Stack
- **Frontend:** Next.js + TailwindCSS + Framer Motion
- **Backend:** Node.js (Express) + Prisma ORM
- **Database:** PostgreSQL
- **Cache & Queue:** Redis
- **Deployment:** Render.com (via `.render.yaml`)

---

## 🔧 Setup

### 1. Clone & Install
```bash
git clone https://github.com/yourusername/seo-platform.git
cd seo-platform
npm install
```

### 2. Configure Environment
Copy `.env.example` → `.env` and update:
```bash
cp .env.example .env
```

---

## 🚀 Local Development
```bash
docker-compose up -d
npm run dev
```

Access:
- Frontend → [http://localhost:3000](http://localhost:3000)
- Backend → [http://localhost:4000](http://localhost:4000)

---

## 🌍 Deployment (Render)
1. Push code to GitHub
2. Ensure `.render.yaml` is in project root
3. Go to [https://render.com/deploy](https://render.com/deploy)
4. Choose “Blueprint” → select your repo → click **Deploy**

Render automatically:
- Creates PostgreSQL + Redis
- Builds backend & frontend
- Injects all environment variables
- Launches both services live

---

## 💰 Stripe Setup
In your Stripe Dashboard:
1. Create a product (e.g. "Pro SEO Plan")
2. Copy the secret key → paste into `.env`
3. Stripe webhooks can later handle payment success → unlock premium tools.

---

## 🧠 Notes
- You can scale services (DB, Redis, API) anytime via Render dashboard.
- Add your custom domain in Render > Custom Domains.

---

## 🧾 License
MIT License © 2025
