function Hero() {
  return (
    <section id="home" className="px-8 py-24 flex flex-col items-start max-w-5xl mx-auto">

      <h1 className="text-6xl font-bold leading-tight">
        Hi, I'm <span className="text-purple-500">Elham Abdu</span>
      </h1>

      <h2 className="text-3xl mt-4 text-gray-300">
        Full Stack Developer
      </h2>

      <p className="text-gray-400 mt-6 max-w-xl">
        I build scalable web applications using modern technologies
        like React, Go, and cloud platforms. I enjoy solving real-world
        problems and creating impactful digital solutions.
      </p>

      <div className="flex gap-4 mt-8">
        <button className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700">
          View Projects
        </button>

        <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800">
          Contact Me
        </button>
      </div>

    </section>
  )
}

export default Hero