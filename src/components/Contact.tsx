import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Github, Linkedin } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    user_email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_d3wqide',
        'template_ns4px8r',
        form.current!,
        'pVPZjIDFpy3QuzhIz'
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          toast.success('Email sent successfully!', { position: 'top-right' });
          setFormData({ from_name: '', user_email: '', message: '' });

          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.error('FAILED...', error);
          setIsSubmitting(false);
          toast.error('Failed to send email. Please try again.', { position: 'top-right' });
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-10 bg-bg_light_primary">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Contact Me</h2>
          <h3 className="text-xl md:text-2xl text-gray-300 uppercase tracking-wider">Get in Touch</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Form */}
          <motion.div
            className="md:w-1/2 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-black"
              />
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-black"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-black resize-none"
              />
              <motion.button
                type="submit"
                className="btn bg-white text-navy py-2 px-6 rounded-md hover:bg-grey-800 disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Sending...' : isSubmitted ? 'Sent!' : 'Submit'}
              </motion.button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            className="md:w-1/2 w-full space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="bg-navy-800 p-3 rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <p className="text-white text-lg">shovidhyan77@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-navy-800 p-3 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <p className="text-white text-lg">+91 9344804104</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-navy-800 p-3 rounded-full">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <p className="text-white text-lg">shovidhyan_devaraj</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-navy-800 p-3 rounded-full">
                <Github className="w-6 h-6 text-white" />
              </div>
              <a
                href="https://github.com/shovidhyan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg hover:underline"
              >
                github.com/shovidhyan
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-navy-800 p-3 rounded-full">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <a
                href="https://www.linkedin.com/in/shovidhyan-devaraj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg hover:underline"
              >
                linkedin.com/in/shovidhyan-devaraj
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
