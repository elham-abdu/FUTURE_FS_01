import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) {
      console.error("Form ref is null")
      return
    }

    setStatus("sending")
    setErrorMessage("")

    emailjs
      .sendForm(
        "service_dc0c6af",   // your Service ID
        "template_tgy5ow8",  // your Template ID
        form.current,
        "tkKczZJorLcgV7BTG" // your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text)
          setStatus("success")
          form.current?.reset()
        },
        (error) => {
          console.error("FAILED...", error)
          setStatus("error")
          setErrorMessage(error.text || "Unknown error. Please try again.")
        }
      )
  }

  return (
    <section id="contact" className="px-8 py-24 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
      <p className="text-gray-400 mb-12 text-center">
        I'm open to opportunities, collaborations, and interesting projects.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6 text-lg">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:koniabdu81@gmail.com"
              className="text-purple-400 ml-2 hover:underline"
            >
              koniabdu81@gmail.com
            </a>
          </p>
          <p>
            📱 Phone: <span className="text-gray-300 ml-2">+251-944-300-770</span>
          </p>
          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/elham-abdu-a927752b9/"
              target="_blank"
              className="text-purple-400 ml-2 hover:underline"
            >
              View Profile
            </a>
          </p>
          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/elham-abdu"
              target="_blank"
              className="text-purple-400 ml-2 hover:underline"
            >
              github.com/elham-abdu
            </a>
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-6 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition"
          >
            Download Resume
          </a>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition w-full"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* Status messages */}
          {status === "success" && (
            <p className="text-green-500 mt-2">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 mt-2">
              Failed to send message: {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact