import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

interface FormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  industry: string;
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

  const onSubmit: SubmitHandler<FormInputs> = async (data : any) => {
      if (!formRef.current) return;
      setLoading(true);

    try {
      await emailjs.sendForm(
        "service_ifopmdt",
        "template_3vqxwb8",
        formRef.current,
        "3kiu5MP7z5FDKcjXT"
      );
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to send message. Please try again.");
    }
    console.log(data);
    setLoading(false);
  };

  return (
    <div className="container">
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="rounded">
        <div className="row mb-3">
          {/* First Name */}
          <div className="col-md-6">
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              className="form-control border-0 border-bottom"
              placeholder="First Name"
            />
            {errors.firstName && <small className="text-danger">{errors.firstName.message}</small>}
          </div>

          {/* Last Name */}
          <div className="col-md-6">
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className="form-control border-0 border-bottom"
              placeholder="Last Name"
            />
            {errors.lastName && <small className="text-danger">{errors.lastName.message}</small>}
          </div>
        </div>

        <div className="row mb-3">
          {/* Email */}
          <div className="col-md-6">
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
              })}
              className="form-control border-0 border-bottom"
              placeholder="Email Address *"
            />
            {errors.email && <small className="text-danger">{errors.email.message}</small>}
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <input
              type="tel"
              {...register("phone", {
                pattern: { value: /^\+?[0-9]{7,15}$/, message: "Invalid phone number" },
              })}
              className="form-control border-0 border-bottom"
              placeholder="Phone Number (optional)"
            />
            {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
          </div>
        </div>

        <div className="row mb-3">
          {/* Industry */}
          <div className="col-md-12">
            <input
              type="text"
              {...register("industry", { required: "Industry is required" })}
              className="form-control border-0 border-bottom"
              placeholder="Industry"
            />
            {errors.industry && <small className="text-danger">{errors.industry.message}</small>}
          </div>
        </div>

        {/* Message */}
        <div className="mb-3">
          <textarea
            {...register("message", { required: "Message is required" })}
            className="form-control border-0 border-bottom"
            rows={3}
            placeholder="Tell About Your Project"
          />
          {errors.message && <small className="text-danger">{errors.message.message}</small>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
