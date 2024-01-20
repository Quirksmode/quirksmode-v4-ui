[![image](https://cms.quirksmode.co.uk/wp-content/uploads/2020/08/quirksmode-github.jpg)](https://www.quirksmode.co.uk)

## Welcome

Hi and welcome to version 4 of my Personal Portfolio. Sadly I am unable to share many of the tools, projects and code that I develop for clients professionally, so I have decided to make my personal portfolio repository public.

My reason for doing this is to hopefully inspire/help other developers who are seeking to create something similar.

I am a huge fan of a side project as they help me to keep on top of new technologies, trends and tooling, which is why I wanted my Portfolio to be a little bit more involved than just a simple one pager. This is effectively my best practices sandbox, a place to test new tooling, libraries, frameworks etc. without restriction or fear of breaking something. Anyway, enough waffle from me, lets dive into some more detail.

## About

Quirksmode is a fully responsive Universal (SSR) React Application designed to connect to a Headless CMS (not included here). For V4 I wanted to experiment with NextJS and RSC (React Server Components), I must admit I have been really impressed and was able to convert the V3 codebase quickly and without too many issues. Whilst I took pride in effectively developing my own version of NextJS for V3, due to other projects taking up so much of my time I just wasn't able to maintain it so it made sense to switch to NextJS which has come such a long way over the last few years. I have also been able to say goodbye to Redux, which served it's purpose well for V3, but I definitely don't miss all the added complexity and boilerplate that came with it. Making server side API calls is definitely where RSC shines, in combination with React Server Actions for more complex client component use cases. When state did need to be shared between components I simply used Zustand, which kept things lean and simple.

## Key Features

- Universal React App (SSR with RSC/RSA)
- Zustand for state management
- Automated bundling and code splitting with lazy loaded components
- Progressive Web App
- Hot Reloading
- Functional Components with Hooks for interactive client components
- Follows BEM methodology
- Pages and Components are grouped into namespaced folders/files

## Requirements

- [node](https://nodejs.org/en) == 18.12.1
- [npm](https://www.npmjs.com) >= 9

## Prerequisites

- Clone the repo

  ```sh
  git clone https://github.com/Quirksmode/quirksmode-v4-ui.git
  cd quirksmode-v3-ui
  ```

## How to run

Run Development build (with Hot Reload)

```bash
npm run dev
```

Run Production build

```bash
npm run build
```

Run Linting

```bash
npm run lint
```

Open http://localhost:3000 with your browser.

## Roadmap

- Update codebase/setup to replace NextJS defaults and with V3 defaults (e.g. linting, scripts)
- Bring back Docker
- Update Unit/Integration Tests to TS and improve coverage
- Add E2E Tests
