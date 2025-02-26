import Image from 'next/image'
import styles from './page.module.css'
import ProjectCard from './components/ProjectCard/ProjectCard'

const Home = () => (
  <main className={styles.main}>
    <div className={styles.header}>
      <div>
        <h1>{`Hi! I'm Vicky Holcomb`}</h1>
        <div className={styles.headerWrapper}>
          <div className={styles.description}>With over 13 years of full-stack software engineering experience, I specialize in building scalable, high-traffic applications that deliver accessible and seamless user experiences. I excel at tackling complex challenges, mentoring teams, and delivering innovative solutions that exceed expectations.</div>
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
    </div>

    <div className={styles.container}>
      <h2>Skills</h2>
      <ul className={styles.skillList}>
        <li><strong>Front-End:</strong> React, Next.js, TypeScript, JavaScript, Redux, CSS (including LESS, Emotion CSS, CSS Modules, Styled Components), jQuery, Angular, Webpack, Babel and other frameworks/libraries including Material UI, React Hook Form, TanStack Query, TanStack Table, Bootstrap, Knockout, and Handlebars</li>
        <li><strong>API: </strong> GraphQL, Apollo, Express.js, REST, SOAP</li>
        <li><strong>Backend:</strong> C#, .NET & .NET Core, Entity Framework,  Node.js, Java, Kotlin, Spring Boot, Spring Cloud</li>
        <li><strong>Databases:</strong> Oracle, PostgreSQL, MS SQL Server, MySQL, Prisma, Redis, Cosmos, MongoDB</li>
        <li><strong>Testing & Code Quality:</strong> Junit, Jasmine, Jest, Nunit, ESLint, Enzyme, React Testing Library, SonarQube, Husky, Prettier, ESLint, Storybook and Chromatic for UI regression testing, deployment previews in Netlify</li>
        <li><strong>Monitoring & Analytics:</strong> Google Analytics, Mixpanel, Sentry, New Relic, Grafana, Azure App Insights, CloudWatch</li>
        <li><strong>Security:</strong> OAuth, Auth0, JWT, SAML, CORS, CSRF, XSS Prevention, Security Audits, SOC 2</li>
        <li><strong>Deployment:</strong> Azure, AWS, CI/CD, Jenkins, Bamboo, Terraform, GitHub Actions, Vercel, Render</li>
        <li>Microservice architecture</li>
        <li>Docker & container orchestration</li>
        <li>Accessible and mobile first development - specialize in making UI's usable for everyone - adhering to WCAG and Section 508 guidelines and VPAT authoring</li>
        <li>Experience working with and creating design systems and tools like Figma and Zeplin</li>
        <li>Other languages I have experience with, but have not used professionally: Vue, Python, PHP, Ruby on Rails</li>
        <li>Proficient in creating and enforcing coding standards and best practices</li>
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
          href='https://sthomas1618.github.io/react-crane'
          image='react-crane.png'
          description='A React component library for highly customizable dropdowns.  Contributed to the overall project and making the dropdowns meet WCAG 2.0 guidelines.'
          sourceCode='https://github.com/sthomas1618/react-crane'
          title='react-crane'
        />
        <ProjectCard
          href='https://vue-shop-site.onrender.com/products'
          image='two-trees.png'
          description='A full stack project using Vue with a MongoDB database and Express.js backend. Deployed in Render, which spins apps down when they are not in use, so it may take a minute to spin up.'
          sourceCode='https://github.com/vholcomb/vue-shop-site'
          title='Two Trees Olive Oil Vue Project'
        />
        <ProjectCard
          href='/civitas'
          image='civitas.png'
          description='See work done for my previous employer, specifically the planning and scheduling applications.'
          sameTab
          title='Civitas Learning'
        />
        <ProjectCard
          href='https://craft-supply-inventory.vercel.app/'
          image='csp.png'
          description='An early stage React app for keeping track of art and craft supplies.'
          sourceCode='https://github.com/vholcomb/craft-supply-inventory'
          title='crafty-supply-inventory'
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
