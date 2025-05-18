# 🚀 Mediashot - AI-Powered Social Media Asset Generator

**Mediashot** is an AI-powered SaaS platform that helps creators, developers, and marketers generate high-quality, platform-optimized media content — including **custom cover images, smart video snapshots**, and **AI-compressed videos** — with just a few clicks.

> 📌 Built with: **Next.js**, **Cloudinary AI**, **Prisma**, **NeonDB**, **DaisyUI**

---

## 🌐 Live Demo  
🔗 [https://mediashot.vercel.app](https://mediashot.vercel.app)

## 💻 GitHub Repository  
🔗 [https://github.com/your-username/mediashot](https://github.com/your-username/mediashot)

## 📹 LinkedIn Project Demo  
🔗 [https://www.linkedin.com/posts/your-username_mediashot-ai-saas-nextjs-activity-123456789](https://www.linkedin.com/posts/your-username_mediashot-ai-saas-nextjs-activity-123456789)

---

## 🧠 Features

- 🖼 Upload any image and auto-generate platform-specific dimensions  
- 📱 Supports:  
  - Instagram Square (1:1), Portrait (4:5)  
  - Twitter Post (16:9), Header (3:1)  
  - Facebook Cover (205:78)  
  - **LinkedIn Cover (1584x396)**  
- 🎥 Upload videos and let **Cloudinary AI** extract snapshots from key moments  
- 🧠 AI-based smart cropping, resizing, and video compression  
- 🖌 Clean and responsive UI powered by **DaisyUI + TailwindCSS**

---

## 🛠️ Tech Stack

| Layer         | Tech                          |
|---------------|-------------------------------|
| Frontend      | Next.js, TailwindCSS, DaisyUI |
| Backend       | Prisma, NeonDB                |
| Media & AI    | Cloudinary AI                 |
| Deployment    | Vercel                        |

---

## 🧪 Getting Started (Local Setup)

```bash
git clone https://github.com/your-username/mediashot.git
cd mediashot
npm install
npm run dev
```

### 💡 Environment Variables Setup (Suggestion)

To run this project locally, you **must** create a `.env` file at the root of your project directory and add the following environment variables with **your own credentials**. These credentials are required for the project to work correctly:

```env
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
DATABASE_URL=your_neondb_database_connection_string
```
