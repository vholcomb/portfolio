import styles from './page.module.css'

export default function Civitas() {
  return (
    <div className={styles.page}>
      <h1>Civitas Learning</h1>
      <p>During my time at Civitas Learning I worked on several major projects:</p>
      <ul className={styles.projectList}>
        <li>Built a new internal administrative tool from the ground up with React, Typescript, GraphQL, and a Java microservice backend</li>
        <li>Updated the Schedule Course Scheduler UI to React components while also ensuring accessibility requirements were met </li>
        <li>Built a new Student Degree Planner tool with React, Typescript, GraphQL, Apollo, and a mix of Java, Kotlin, and Node microservices</li>
        <li>Updated the Student Course Scheduler UI to have a consistent UI with the Student Degree Planner for a seamless user experience</li>
      </ul>
      <div className={`${styles.example} ${styles.container}`}>
        <h2>Student Degree Planner</h2>
        <p>
          The Student Degree Planner is a tool that allows students to plan out their degree path. It shows them what courses they have taken, what courses they need to take, and what courses they can take.
          They can interact with their advisors directly in the tool to get help with their degree path.  They can also import their courses into the course scheduler to help them plan out their schedule for the upcoming semester.
        </p>
        <div className={styles.storybook}>
          <p>
            Storybook component library:
          </p>
          <a href="http://student-storybook.develop.student.civitaslearning.com/" target="_blank" rel="noopener noreferrer">examples</a>
        </div>
        <div>
          <h3>Example Pages</h3>
          <div>
            <p>There are different views in the student degree planner depending on the users role.  Here are some advisor view examples:</p>
            <h4>Advisor Dashboard</h4>
            <img
              src={`/images/example-dashboard.png`}
              alt="Advisor Dashboard"
            />
            <h4>Degree Plan Templates</h4>
            <img
              src={`/images/templates.png`}
              alt="Degree Plan Templates"
            />
            <h4>Example Template</h4>
            <img
              src={`/images/example-template.png`}
              alt="Example Template"
            />
            <h4>Example Report</h4>
            <img
              src={`/images/example-report.png`}
              alt="Example Report"
            />
          </div>
          <div>
            <h4>Here are some student view examples:</h4>
            <h4>Student Plans</h4>
            <img
              src={`/images/my-plans.png`}
              alt="Student Plans"
            />
            <h4>Example Degree Plan</h4>
            <img
              src={`/images/degree-plan.png`}
              alt="Example Degree Plan"
            />
            <h4>Degree Requirements</h4>
            <img
              src={`/images/degree-requirements.png`}
              alt="Degree Requirements"
            />
            <h4>Course History</h4>
            <img
              src={`/images/course-history.png`}
              alt="Course History"
            />
            <h4>Course Search</h4>
            <img
              src={`/images/course-search.png`}
              alt="Course Search"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.example} ${styles.container}`}>
        <h2 className={styles.schedulerHeader}>Student Course Scheduler</h2>
        <p>
          The Student Course Scheduler is a tool that allows students to schedule their courses for the upcoming semester.
          It allows them to select the courses they want to take and then shows them the possible schedules they can have.
          These courses could be imported from the degree planner or manually added.  Once a schedule is selected, students can register for their courses directly in the tool in their SIS.
        </p>
        <div className={styles.storybook}>
          <p>
            Storybook component library:
          </p>
          <a href="http://scheduler-storybook.develop.collegeschedulerapp.com/" target="_blank" rel="noopener noreferrer">examples</a>
        </div>
        <div>
          <h3>Example Pages</h3>
          <div>
            <p>Here are some example student pages in the integrated view:</p>
            <h4>Student Landing Page</h4>
            <img
              src={`/images/term-select.png`}
              alt="Student Landing Page"
            />
            <h4>Build Schedule</h4>
            <img
              src={`/images/build-schedule.png`}
              alt="Build Schedule"
            />
            <h4>Potential Schedule</h4>
            <img
              src={`/images/potential-schedule.png`}
              alt="Potential Schedule"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
