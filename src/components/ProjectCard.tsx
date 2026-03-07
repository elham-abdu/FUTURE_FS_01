type ProjectProps = {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

function ProjectCard({ title, description, tech, github, demo }: ProjectProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition">

      <h3 className="text-2xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-400 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="text-sm bg-gray-800 px-3 py-1 rounded-md text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4">

        {github && (
          <a
            href={github}
            target="_blank"
            className="text-purple-400 hover:text-purple-300"
          >
            GitHub
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            className="text-gray-300 hover:text-white"
          >
            Live Demo
          </a>
        )}

      </div>

    </div>
  )
}

export default ProjectCard