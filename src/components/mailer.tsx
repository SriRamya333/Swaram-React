import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser"; // Correct import
import { useRef } from "react";

interface FormInputs {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null); // Needed for EmailJS
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_ifopmdt", // Replace with your EmailJS Service ID
        "template_ni4jlki", // Replace with your EmailJS Template ID
        formRef.current, // Sending actual form reference
        "3kiu5MP7z5FDKcjXT" // Replace with EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          reset();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-xl shadow-lg border">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Contact Us
      </h2>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
            })}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: { value: /^\+?[0-9]{7,15}$/, message: "Invalid phone number" },
            })}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 h-32 resize-none"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
