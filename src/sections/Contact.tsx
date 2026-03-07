import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    alert(data.status || data.error);
  };

  return (
    <section id="contact" className="px-8 py-24 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">Contact</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-gray-900 border border-gray-800 p-4 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-900 border border-gray-800 p-4 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-gray-900 border border-gray-800 p-4 rounded-lg"
        />
        <button
          type="submit"
          className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;