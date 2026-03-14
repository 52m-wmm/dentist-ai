Dentist AI

AI-powered voice assistant for dental clinics.

Dentist AI is a demo project that explores how AI voice agents can assist dental clinics with patient consultation and appointment workflows.
Patients can ask questions through a voice assistant, while appointment booking is handled through a web interface.


Overview

Dentist AI demonstrates how modern web applications can integrate AI voice agents with a full-stack web system.

The AI assistant helps answer common patient questions, while the web application manages appointment requests and patient data.

This project focuses on clean architecture and separation between:

AI conversation layer

application backend

database persistence

Features

AI voice assistant for dental clinic consultation

Real-time voice interaction

Patient inquiry support

Web-based appointment booking

Full-stack implementation with modern web technologies

Tech Stack

Next.js 15 (App Router)

React

TypeScript

Vapi AI – voice assistant integration

Prisma ORM

Vercel – deployment
Architecture Explanation
Voice Consultation Layer

Patients interact with a Vapi AI voice assistant to ask questions such as:

clinic services

opening hours

treatment information

The voice assistant is responsible only for conversation and consultation.

Web Application Layer

When patients want to book an appointment, they use the web interface built with Next.js 15.

The frontend collects patient information and sends requests to the backend.

Backend Layer

The Next.js API routes handle:

appointment creation

request validation

business logic

Data Layer

Application data is stored using:

Prisma ORM

Database

Only the backend API interacts with the database to ensure proper data management.

Getting Started

Clone the repository:

git clone https://github.com/52m-wmm/dentist-ai.git
cd dentist-ai

Install dependencies:

npm install

Run the development server:

npm run dev

Open in browser:

http://localhost:3000

