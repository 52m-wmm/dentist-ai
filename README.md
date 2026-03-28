Dentist AI
README / 项目说明（中英双语）
AI dental clinic SaaS demo built with Next.js, PostgreSQL, Clerk, and a Vapi voice assistant.
一个展示全栈开发能力的牙科诊所 AI SaaS Demo，包含前端、后端、数据库、认证与语音 AI 集成。

Test Account / 测试账号
Email	test@example.com
Password	test1234
Use this account to explore the booking flow and authenticated areas of the demo. / 可使用该账号体验预约流程与登录后的页面。

Overview / 项目简介
EN: Dentist AI is a demo project that explores how AI voice agents can support dental clinics in patient consultation and appointment workflows. Patients ask questions through a voice assistant, while booking is handled through a web interface.
中文：Dentist AI 是一个演示项目，展示语音 AI 如何辅助牙科诊所处理患者咨询与预约流程。患者可以通过语音助手提问，预约则通过网页界面完成。
What This Project Demonstrates / 这个项目主要展示什么
Full-stack delivery / 全栈落地: Next.js App Router + backend routes + Prisma + PostgreSQL
Authentication / 身份认证: Clerk-based sign-in and protected flows
AI integration / AI能力接入: Vapi voice assistant integrated into a real workflow
Booking workflow / 预约流程: Patient input, validation, submission, and data handling
Clean structure / 工程结构: Frontend, backend, and data responsibilities are clearly separated
Core Features / 核心功能
AI voice assistant for dental consultation / 牙科咨询语音助手
Real-time voice interaction / 实时语音交互
Patient inquiry support / 常见患者问题应答
Web-based appointment booking / 网页预约功能
Patient data management through the application flow / 通过应用流程管理患者数据
Architecture / 架构说明
Voice Consultation Layer / 语音咨询层 — Patients talk to a Vapi voice assistant for questions such as clinic services, opening hours, and treatment information.
Web Application Layer / Web应用层 — When users want to book, they switch to the Next.js web interface to submit appointment information.
Backend Layer / 后端层 — API routes handle validation, business logic, and appointment creation requests.
Data Layer / 数据层 — Prisma is used for database access, keeping data operations inside the backend layer.
Tech Stack / 技术栈
Layer / 层级	Technology / 技术
Frontend / 前端	Next.js 15, React, TypeScript
Styling / 样式	Tailwind CSS
Backend / 后端	Next.js route handlers
Database / 数据库	PostgreSQL + Prisma ORM
Authentication / 认证	Clerk
AI / 语音AI	Vapi
Deployment / 部署	Vercel
Getting Started / 本地运行
1.Clone the repository / 克隆仓库: git clone https://github.com/52m-wmm/dentist-ai.git
2.Install dependencies / 安装依赖: npm install
3.Run the dev server / 启动开发环境: npm run dev
Open the app / 打开浏览器: http://localhost:3000
