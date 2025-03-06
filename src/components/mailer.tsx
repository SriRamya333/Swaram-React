import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

interface FormInputs {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    if (!formRef.current) return;
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_ifopmdt",
        "template_0x47ntp",
        formRef.current,
        "3kiu5MP7z5FDKcjXT"
      );
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="p-4 rounded">
        {/* Inline Fields */}
        <div className="row mb-3">
          {/* Name */}
          <div className="col-md-4">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="form-control border-0 border-bottom"
            />
            {errors.name && <small className="text-danger">{errors.name.message}</small>}
          </div>

          {/* Email */}
          <div className="col-md-4">
            <label className="form-label">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
              })}
              className="form-control border-0 border-bottom"
            />
            {errors.email && <small className="text-danger">{errors.email.message}</small>}
          </div>

          {/* Phone */}
          <div className="col-md-4">
            <label className="form-label">Phone Number (optional)</label>
            <input
              type="tel"
              {...register("phone", {
                pattern: { value: /^\+?[0-9]{7,15}$/, message: "Invalid phone number" },
              })}
              className="form-control border-0 border-bottom"
            />
            {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
          </div>
        </div>

        {/* Message */}
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="form-control border-0 border-bottom"
            rows={3}
          />
          {errors.message && <small className="text-danger">{errors.message.message}</small>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn w-10" disabled={loading}>
          {loading ? "Sending..." : "Leave us a Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
