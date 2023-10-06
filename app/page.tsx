import Image from 'next/image'
import styles from './page.module.css'
import ProjectCard from './components/ProjectCard/ProjectCard'

const Home = () => (
  <main className={styles.main}>
    <div className={styles.header}>
      <div>
        <h1>{`Hi! I'm Vicky Holcomb`}</h1>
        <div className={styles.description}>I am a senior full stack engineer with over 12 years of professional experience and a passion for making user-friendly websites.</div>
      </div>
      <div>
      <Image
        priority
        src="/images/profile.jpg"
        className={styles.borderCircle}
        height={144}
        width={144}
        alt=""
      />
      </div>
    </div>

    <div className={styles.container}>
      <h2>Skills</h2>
      <div className={styles.skills}>Some of my skills include:</div>
      <ul className={styles.skillList}>
        <li><strong>Front-End:</strong> React, TypeScript, JavaScript, CSS (including LESS, Emotion CSS, CSS Modules), AngularJS, Design Frameworks like Material UI</li>
        <li><strong>Back-End: </strong> GraphQL, Apollo, Node.js</li>
        <li><strong>Java Ecosystem:</strong> Java, Kotlin, Spring Boot, Spring Cloud</li>
        <li>C# & .NET</li>
        <li><strong>Databases:</strong> Oracle, PostgreSQL, MS SQL Server, Prisma</li>
        <li><strong>Testing:</strong> Junit, Jasmine, Jest</li>
        <li>Microservice architecture & Docker</li>
        <li>Attention to Detail</li>
        <li>Project & Team Management</li>
        <li>Documentation & Technical Writing</li>
        <li>Problem Solving</li>
        <li>Self-Starter</li>
      </ul>
    </div>
    <div className={styles.projects}>
      <h2>Projects and Contributions</h2>
      <div className={styles.grid}>
        <ProjectCard
          href='https://github.com/sthomas1618/react-crane'
          image='react-crane.png'
          description='A React component library for highly customizable dropdowns.  Contributed to the overall project and making the dropdowns meet WCAG 2.0 guidelines.'
          title='react-crane'
        />
      </div>
    </div>
  </main>
)

export default Home
