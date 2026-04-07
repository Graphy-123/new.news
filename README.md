# New.News

Full-stack AI-powered news platform with modular backend, provider-agnostic AI/TTS abstractions, and a mobile-first frontend.

## Stack
- Frontend: Next.js + TypeScript + Tailwind
- Backend: NestJS + Prisma + PostgreSQL
- AI/TTS: provider abstraction layers

## Features
- Top News, Cars, AI sections
- Infinite feed
- Quick Read AI summaries
- Audio playback via browser TTS
- Feature toggles from backend
- Breaking news endpoint
- Topic following and personalized feed foundation

## Run
```bash
pnpm install
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local
docker compose up -d
pnpm --filter api prisma generate
pnpm --filter api prisma migrate dev
pnpm dev
```
