import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Creating responsive and high-performance websites using the latest technologies in front-end and back-end development.",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing user-friendly interfaces with a focus on creating seamless and engaging user experiences.",
    },
    {
      title: "Mobile App Development",
      description:
        "Building scalable mobile applications that deliver a smooth and efficient experience across iOS and Android platforms.",
    },
    {
      title: "Digital Marketing",
      description:
        "Providing digital marketing solutions, including SEO, social media marketing, and content creation to enhance online presence.",
    },
    {
      title: "Consulting",
      description:
        "Offering expert consulting services to help businesses adopt and implement the best tech strategies for their goals.",
    },
  ];

  return (
    <div className="services-page bg-white p-5 rounded-lg shadow-md max-w-4xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Services</h2>
      <p className="text-lg text-gray-700 mb-8">
        We offer a range of services designed to help you grow and succeed. From
        web development to digital marketing, our team is here to support your
        business needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-item p-4 border border-blue-500 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
