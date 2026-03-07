import ProjectCard from "../components/ProjectCard"

function Projects() {
  return (
    <section id="projects" className="px-8 py-24 max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <ProjectCard
          title="Cyberbully Prevention Platform"
          description="A system designed to help detect and prevent cyberbullying through reporting tools and community awareness."
          tech={["React", "Go", "Postgres"]}
          github="https://github.com/elham-abdu/Cyberbullyprevention"
        />

        <ProjectCard
          title="Help Ethiopia Platform"
          description="A platform connecting volunteers, donors, and communities to support social initiatives across Ethiopia."
          tech={["React", "Tailwind", "API"]}
          demo="https://app.helpethiopia.org.et/"
        />

        <ProjectCard
          title="All Booking System UI"
          description="A multi-service booking interface supporting flight, hotel, and cab reservations with a clean user experience."
          tech={["HTML", "CSS", "JavaScript"]}
          github="https://github.com/elham-abdu/Dallol-Book"
        />

      </div>

    </section>
  )
}

export default Projects