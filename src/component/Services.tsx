const Services = () => {
    const services = [
      { title: "Training Programs", description: "Skill development, business development, and export-oriented training." },
      { title: "Market Insights", description: "Updated domestic and global market trends." },
      { title: "Networking Opportunities", description: "Connect with international buyers and corporate leaders." },
    ];
  
    return (
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Services;