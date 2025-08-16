type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  // {
  //   name: 'ShadcnUI Vaults',
  //   description:
  //     'A collection of shadcn/ui components and blocks specifically made for building modern Internal Tool Web applications.',
  //   link: 'https://shadcn-vaults.vercel.app/',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
  //   id: 'project2',
  // },
  {
    name: 'SAT CollegeBoard Practice Platform',
    description:
      'A free web-based platform to practice SAT question bank from CollegeBoard, designed for students to enhance their test preparation skills.',
    link: 'https://practicesat.vercel.app/',
    video:
      'https://res.cloudinary.com/dzbrvfphg/video/upload/v1754536162/SAT_Test3_sldufr.mp4',
    id: 'project3',
  },
  {
    name: 'IFR Foundation Website',
    description:
      'A long term 2 years project including community service mentoring, outreach, and competitions.',
    link: 'https://ifrfoundation.org/',
    video:
      'https://res.cloudinary.com/dzbrvfphg/video/upload/v1754882643/IFR-Website-Demo-2_annfg5.mov',
    id: 'project4',
  },

  {
    name: 'IntiServer Website',
    description:
      'A long term 2 years project including community service mentoring, outreach, and competitions.',
    link: 'https://intiserver.com/',
    video:
      'https://res.cloudinary.com/dzbrvfphg/video/upload/v1754882848/IntiServerWebsite_xi0j4s.mp4',
    id: 'project5',
  },

  // {
  //   name: 'FTC Team Documentation Website',
  //   description: 'UI kit to make beautiful, animated interfaces.',
  //   link: 'https://motion-primitives.com/',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
  //   id: 'project5',
  // },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Senior High School\'s Student Council",
    title: 'Secretary',
    start: '2025',
    end: 'Present',
    link: '#',
    id: 'work1',
  },
  {
    company: 'Community Service',
    title: 'Robotics Mentor',
    start: '2024',
    end: 'Present',
    link: '#',
    id: 'work2',
  },
  {
    company: 'IFR Foundation Indonesia',
    title: 'Volunteering as Web Developer',
    start: '2024',
    end: 'Present',
    link: 'https://ifrfoundation.org',
    id: 'work3',
  },
  {
    company: 'IntiServer',
    title: 'Part-Time Full-Stack Developer',
    start: '2022',
    end: 'Present',
    link: 'https://intiserver.com',
    id: 'work4',
  },

  {
    company: 'R2045 FTC #19829',
    title: 'Team Captain & Lead Programmer',
    start: '2023',
    end: '2025',
    link: 'https://r2045.vercel.app',
    id: 'work5',
  },

  {
    company: "Junior High School's Student Council",
    title: 'Engineering Exhibition Lead Event Organizer',
    start: 'April 2022',
    end: 'May 2022',
    link: '#',
    id: 'work6',
  },
  {
    company: "Junior High School's Student Council",
    title: 'Community Social Welfare Treasurer',
    start: 'April 2022',
    end: 'March 2022',
    link: '#',
    id: 'work7',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title:
      'Daydream: From Website Builders to Self-Taught Full-Stack Developer',
    description:
      'A journey from a website builder to a self-taught full-stack developer',
    link: '/blog/daydream',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/aldhanekaa',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/aldhaneka-aufa-izzat-218119262',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/aldhanekai',
  },
]

export const EMAIL = 'aldhanekadev@gmail.com'
