function About() {
  return (
    <section id="about" className="px-8 py-24 max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold mb-10">
        About Me
      </h2>

      <p className="text-gray-400 max-w-3xl leading-relaxed mb-12">
        I am a software engineering student passionate about building
        impactful technology solutions. I focus on full-stack development
        using modern tools like React, Go, and cloud technologies.
        
        I enjoy solving real-world problems, designing scalable systems,
        and continuously improving my technical skills. My goal is to
        build applications that are both technically strong and useful
        to people.
      </p>

      <h3 className="text-2xl font-semibold mb-6">
        Skills
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <div className="bg-gray-900 p-4 rounded-lg text-center">React</div>
        <div className="bg-gray-900 p-4 rounded-lg text-center">TypeScript</div>
        <div className="bg-gray-900 p-4 rounded-lg text-center">Tailwind CSS</div>
        <div className="bg-gray-900 p-4 rounded-lg text-center">Go</div>

        <div className="bg-gray-900 p-4 rounded-lg text-center">Node.js</div>
        <div className="bg-gray-900 p-4 rounded-lg text-center">MongoDB</div>
        <div className="bg-gray-900 p-4 rounded-lg text-center">Git</div>
        <div className="bg-gray-900 p-4 rounded-lg text-center">REST APIs</div>

      </div>

    </section>
  )
}

export default About