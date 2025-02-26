import Image from 'next/image'
import styles from './projectCard.module.css'

type ProjectCardProps = {
  description: string
  href: string
  image: string
  sameTab?: boolean
  sourceCode?: string
  title: string
}

const ProjectCard = ({ description, href, image, sameTab = false, sourceCode, title }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <a
        href={href}
        target={sameTab ?  "" : "_blank"}
        rel="noopener noreferrer"
      >
        <Image
          className={styles.logo}
          src={`/images/${image}`}
          alt="Project image"
          height={180}
          width={180}
          priority
        />
        <h3>
          {title} <span>-&gt;</span>
        </h3>
        <p>{description}</p>
      </a>
      {sourceCode && (
        <a className={styles.sourceCode} href={sourceCode} target="_blank">View Source</a>
      )}
    </div>
  )
}

export default ProjectCard
