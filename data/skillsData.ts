import androidstudio from '@/assets/icons/android-studio.svg'
import appstore from '@/assets/icons/app-store.svg'
import axios from '@/assets/icons/axios.svg'
import bitbucket from '@/assets/icons/bitbucket.svg'
import cicd from '@/assets/icons/ci-cd.svg'
import googleVision from '@/assets/icons/cloud-vision-api.svg'
import docker from '@/assets/icons/docker.svg'
import expo from '@/assets/icons/expo.svg'
import figma from '@/assets/icons/figma.svg'
import firebase from '@/assets/icons/firebase.svg'
import github from '@/assets/icons/github.svg'
import gitlab from '@/assets/icons/gitlab.svg'
import graphql from '@/assets/icons/graphql.svg'
import javascript from '@/assets/icons/javascript.svg'
import jest from '@/assets/icons/jest.svg'
import jira from '@/assets/icons/jira.svg'
import kotlin from '@/assets/icons/kotlin.svg'
import nextjs from '@/assets/icons/nextjs.svg'
import nodejs from '@/assets/icons/nodejs.svg'
import playstore from '@/assets/icons/play-store.svg'
import postgresql from '@/assets/icons/postgresql.svg'
import postman from '@/assets/icons/postman.svg'
import razorpay from '@/assets/icons/razorpay.svg'
import rnTestingLibrary from '@/assets/icons/react-test.svg'
import react from '@/assets/icons/react.svg'
import reactnative from '@/assets/icons/reactnative.svg'
import redux from '@/assets/icons/redux.svg'
import restApi from '@/assets/icons/rest-api.svg'
import detox from '@/assets/icons/rocket.svg'
import sqlite from '@/assets/icons/sqlite.svg'
import stripe from '@/assets/icons/stripe.svg'
import supabase from '@/assets/icons/supabase.svg'
import tanstack from '@/assets/icons/tanstack.svg'
import typescript from '@/assets/icons/typescript.svg'
import vscode from '@/assets/icons/vscode.svg'
import websocket from '@/assets/icons/websocket.svg'
import xcode from '@/assets/icons/xcode.svg'

const SkillsData = [
  {
    category: 'Core',
    skills: [
      { title: 'React Native', icon: reactnative },
      { title: 'Expo', icon: expo },
      { title: 'React.js', icon: react },
      { title: 'Next.js', icon: nextjs },
      { title: 'Node.js', icon: nodejs },
      { title: 'JavaScript', icon: javascript },
      { title: 'TypeScript', icon: typescript },
      { title: 'Kotlin', icon: kotlin },
    ],
  },
  {
    category: 'State & Data Management',
    skills: [
      { title: 'Redux', icon: redux },
      {
        title: 'Zustand',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg',
      },
      { title: 'Redux-Toolkit', icon: redux },
      { title: 'Axios', icon: axios },
      { title: 'TanStack', icon: tanstack },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { title: 'REST APIs', icon: restApi },
      { title: 'GraphQL', icon: graphql },
      { title: 'WebSocket', icon: websocket },
    ],
  },
  {
    category: 'Database',
    skills: [
      { title: 'Firebase', icon: firebase },
      { title: 'SQLite', icon: sqlite },
      { title: 'PostgreSQL', icon: postgresql },
      { title: 'Supabase', icon: supabase },
    ],
  },
  {
    category: 'Services & Integrations',
    skills: [
      { title: 'Stripe', icon: stripe },
      { title: 'Razorpay', icon: razorpay },
      { title: 'Auth', icon: firebase },
      { title: 'Messaging', icon: firebase },
      { title: 'Notifications', icon: firebase },
      { title: 'Vision API', icon: googleVision },
    ],
  },
  {
    category: 'DevOps & Deployment',
    skills: [
      { title: 'Docker', icon: docker },
      { title: 'CI/CD', icon: cicd },
      { title: 'Git', icon: github },
      { title: 'Bitbucket', icon: bitbucket },
      { title: 'GitLab', icon: gitlab },
      { title: 'Play Store', icon: playstore },
      { title: 'App Store', icon: appstore },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { title: 'VS Code', icon: vscode },
      { title: 'Xcode', icon: xcode },
      { title: 'Android Studio', icon: androidstudio },
      { title: 'Jira', icon: jira },
      { title: 'Postman', icon: postman },
      { title: 'Figma', icon: figma },
    ],
  },
  {
    category: 'Testing',
    skills: [
      { title: 'Jest', icon: jest },
      { title: 'RN Testing', icon: rnTestingLibrary },
      { title: 'Detox', icon: detox },
    ],
  },
]

export default SkillsData
