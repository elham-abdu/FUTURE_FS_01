function Contact() {
  return (
    <section id="contact" className="px-8 py-24 max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold mb-8">
        Contact
      </h2>

      <p className="text-gray-400 mb-12 max-w-2xl">
        I'm always open to discussing new opportunities, collaborations,
        or interesting projects. Feel free to reach out!
      </p>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-6">

          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-400">youremail@example.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">GitHub</h3>
            <p className="text-gray-400">
              github.com/elham-abdu
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">LinkedIn</h3>
            <p className="text-gray-400">
              linkedin.com/in/yourprofile
            </p>
          </div>

        </div>


        {/* Contact Form */}
        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-900 border border-gray-800 p-4 rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-gray-900 border border-gray-800 p-4 rounded-lg"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full bg-gray-900 border border-gray-800 p-4 rounded-lg"
          />

          <button
            type="submit"
            className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact