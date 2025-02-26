import Image from 'next/image'
import styles from './projectCard.module.css'

type ProjectCardProps = {
  description: string
  href: string
  image: string
  sameTab?: boolean
  title: string
}

const ProjectCard = ({ description, href, image, sameTab = false, title }: ProjectCardProps) => {
  return (
    <a
      href={href}
      className={styles.card}
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
  )
}

export default ProjectCard
