import Image from 'next/image'
import styles from './page.module.css'
import ProjectCard from './components/ProjectCard/ProjectCard'

const Home = () => (
  <main className={styles.main}>
    <div className={styles.header}>
      <div>
        <h1>{`Hi! I'm Vicky Holcomb`}</h1>
        <div className={styles.description}>I am an experienced Full Stack Engineer with over 12 years of industry expertise, dedicated to creating high-availability, user-friendly software solutions.</div>
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
        <li><strong>Front-End:</strong> React (CRA and Next.js), TypeScript, JavaScript, CSS (including LESS, Emotion CSS, CSS Modules), jQuery, AngularJS, Webpack, and other frameworks/libraries including Material UI, Bootstrap, Knockout, and Handlebars</li>
        <li><strong>Back-End/API: </strong> GraphQL, Apollo, Node.js, REST, SOAP</li>
        <li><strong>Java Ecosystem:</strong> Java, Kotlin, Spring Boot, Spring Cloud</li>
        <li>C# & .NET</li>
        <li><strong>Databases:</strong> Oracle, PostgreSQL, MS SQL Server, MySQL, Prisma, Redis, familiar with MongoDB</li>
        <li><strong>Testing & Code Quality:</strong> Junit, Jasmine, Jest, Nunit, ESLint, Storybook and Chromatic for UI regression testing, deployment previews in Netlify</li>
        <li>Microservice architecture</li>
        <li>Docker & container orchestration</li>
        <li>Experience with both AWS and Microsoft Azure</li>
        <li>Accessible and mobile first development - specialize in making UI's usable for everyone</li>
        <li>Deployment: CI/CD, Jenkins, Bamboo, and GitHub Actions</li>
        <li>Terraform</li>
        <li>Other languages I have experience with, but not professionally: Python, PHP, Ruby on Rails</li>
        <li>Attention to Detail</li>
        <li>Project & Team Management</li>
        <li>Documentation & Technical Writing</li>
        <li>Problem Solving</li>
        <li>Self-Starter</li>
        <li>Strong Communication Skills</li>
        <li>Agile Methodologies</li>
      </ul>
    </div>
    <div className={styles.projects}>
      <h2>Projects and Contributions</h2>
      <p className={styles.oldProjects}>For older projects, see <a href="https://www.linkedin.com/in/vicky-holcomb/details/projects/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      <div className={styles.grid}>
        <ProjectCard
          href='https://github.com/sthomas1618/react-crane'
          image='react-crane.png'
          description='A React component library for highly customizable dropdowns.  Contributed to the overall project and making the dropdowns meet WCAG 2.0 guidelines.'
          title='react-crane'
        />
        <ProjectCard
          href='https://craft-supply-inventory.vercel.app/'
          image='csp.png'
          description='An early stage React app for keeping track of art and craft supplies.'
          title='crafty-supply-inventory'
        />
        <ProjectCard
          href='https://www.civitaslearning.com/platform/planning/'
          image='civitas.png'
          description='See work done for my previous employer, specifically the planning and scheduling applications.'
          title='Civitas Learning'
        />
        <ProjectCard
          href='https://alliance2build.com/'
          image='a2b.png'
          description='Contract work for the Alliance 2 Build application.'
          title='Alliance 2 Build'
        />
        <ProjectCard
          href='https://www.exlservice.com/insights/solution-sheet/careradius'
          image='exl.png'
          description='Work done at EXL Service (formerly Landacorp) on their platforms'
          title='CareRadius and CareAffiliate'
        />
      </div>
    </div>
  </main>
)

export default Home
