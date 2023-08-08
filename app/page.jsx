"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { motion as m } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "Indonesia",
      terms: "",
    },
    // Validate Form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required!"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required!"),
      terms: Yup.array().required("Terms of services must be checked!"),
    }),
    // Submit Form
    onSubmit: (values) => {
      // update searchParams (?)
      const searchParams = new URLSearchParams(window.Location.search);
      Object.entries(values).forEach(([key, value]) => {
        searchParams.append(key, value);
      });

      // setting newPathName
      const baseUrl = window.location.pathname + "success";
      const newPathName = `${baseUrl}?${searchParams.toString()}`;

      router.push(newPathName);
    },
  });

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute w-full"
    >
      <main className="h-screen flex items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-[#FFDBC3] shadow-xl flex lg:flex-row overflow-y-auto lg:h-auto h-full flex-col-reverse gap-2 rounded-lg lg:w-3/4 w-[90%] items-center lg:p-6 p-4"
        >
          <div className="flex-1 text-gray-700 lg:p-10 p-2">
            <h1 className="text-3xl pb-2 font-bold">let's get started </h1>
            <p className="text-lg text-gray-500">
              Join our E-learning platform today and unlock over 500+ courses
              and digital assets ready to download
            </p>
            <div className="mt-6">
              {/* Name input field */}
              <div className="pb-4">
                <label
                  className={clsx("block font-bold text-sm pb-2", {
                    "text-red-400": formik.touched.name && formik.errors.name,
                  })}
                  htmlFor="name"
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md lg:w-3/4 w-full focus:border-teal-500 focus:ring-teal-500"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Email input field */}
              <div className="pb-4">
                <label
                  className={clsx("block font-bold text-sm pb-2", {
                    "text-red-400": formik.touched.email && formik.errors.email,
                  })}
                  htmlFor="email"
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md lg:w-3/4 w-full focus:border-teal-500 focus:ring-teal-500"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Enter your email"
                />
              </div>
              {/* Country input field */}
              <div className="pb-4">
                <label
                  className={clsx("block font-bold text-sm pb-2", {
                    "text-red-400":
                      formik.touched.country && formik.errors.country,
                  })}
                  htmlFor="country"
                >
                  Country
                </label>
                <select
                  className="border-2 border-gray-500 p-2 rounded-md lg:w-3/4 w-full focus:border-teal-500 focus:ring-teal-500"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                >
                  <option>United State</option>
                  <option>Indonesia</option>
                  <option>Malaysia</option>
                  <option>Singapura</option>
                  <option>London</option>
                </select>
              </div>
              {/* Terms of service */}
              <div className="pb-4">
                <label
                  className={clsx("block font-bold text-sm pb-2", {
                    "text-red-400": formik.touched.terms && formik.errors.terms,
                  })}
                  htmlFor="terms"
                >
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : "Terms of service"}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    value="checked"
                    onChange={formik.handleChange}
                    className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                  />
                  <p className="text-sm font-bold text-gray-500">
                    I agree to the Terms and Service that my data will be taken
                  </p>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-teal-500 font-bold text-sm text-white py-3 mt-6 rounded-lg w-full"
            >
              Start learning today!
            </button>
          </div>
          <div className="flex-1 object-contain">
            <Player
              autoplay
              loop
              src="https://lottie.host/15dcb236-4d33-42ac-981b-6675666a13a7/WaU1A9npMU.json"
            />
          </div>
        </form>
      </main>
    </m.div>
  );
}
