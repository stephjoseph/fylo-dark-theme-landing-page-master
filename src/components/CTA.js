import React from "react";
import validator from "validator";

const CTA = () => {
  const [formData, setFormData] = React.useState({
    email: "",
  });
  const [error, setError] = React.useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    validate();
  }

  function validate() {
    const validateEmail = validator.isEmail(formData.email);
    if (!validateEmail) {
      setError(true);
    } else {
      setError(false);
    }
  }

  console.log(formData.email);

  // console.log(error);

  return (
    <section className="z-10 flex w-[21rem] flex-col items-center gap-8 rounded-[9px] bg-[#1B2330] px-[1.75rem] pt-10 pb-[2.313rem] shadow-[5px_5px_8px_0px_rgba(0,0,0,0.2543)] xl:w-[53.938rem] xl:gap-[2.375rem] xl:px-[4.813rem] xl:pb-[2.563rem] xl:pt-[2.625rem]">
      <div className="flex w-full flex-col items-center gap-4 text-center xl:w-[42.063rem]">
        <h2 className="font-['Raleway'] text-lg font-bold leading-6 tracking-normal text-white xl:text-[2rem] xl:leading-[3rem]">
          Get early access today
        </h2>
        <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-white">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <form
        className="relative flex w-full flex-col items-center gap-6 xl:flex-row"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          className={error ? "email-input invalid-input" : "email-input"}
          type="email"
          placeholder="email@example.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        {error && (
          <p className="absolute left-[2.375rem] top-[3.313rem] text-[0.625rem] font-bold leading-[0.875rem] tracking-normal text-[#FF4242]">
            Error, check your email
          </p>
        )}

        <button
          type="submit"
          className="flex h-12 w-full items-center justify-center rounded-[24px] bg-gradient-to-br from-[#63E1D9] to-[#34A0CD] font-['Raleway'] text-[0.875rem] font-bold capitalize leading-4 tracking-normal text-white shadow-[2px_3px_6px_0px_rgba(0,0,0,0.1593)] active:from-[#8ADAE3] active:to-[#8ADAE3] xl:w-[12.5rem]"
        >
          Get started for free
        </button>
      </form>
    </section>
  );
};

export default CTA;
