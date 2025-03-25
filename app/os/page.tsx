import styles from './page.module.css';

export default function OnlineServices() {
  return (
    <div className={styles.page}>
      <h1>Online Services User Portal</h1>
      <p>While at RSI, I was the technical lead for the Online Services team, responsible for creating the public user facing portal.
        This portal was built using React, Next.js, Typescript, Material UI, GraphQL, and .NET backend microservices.  While working on the project,
        I took the application from a basic framework to a fully functioning, production ready application that was accessible, could be localized,
        and completely customized to a clients text and theming needs.</p>
      <div className={styles.container}>
        <h2>Example Public Pages</h2>
        <p>Here are some example pages that a user could see without creating an account and logging in to the portal.</p>
        <div>
          <h3>Customizable Home Page</h3>
          <img
            src={`/images/homepage.png`}
            alt="Home Page"
          />
          <h3>Refund Status</h3>
          <img
            src={`/images/refund-status.png`}
            alt="Refund Status Form"
          />
          <h3>Service Request</h3>
          <img
            src={`/images/service-request.png`}
            alt="Service Request Form"
          />
          <h3>Property Search Results</h3>
          <img
            src={`/images/search-results.png`}
            alt="Property Search Results"
          />
        </div>
      </div>
    </div>
  )
}
