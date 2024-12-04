import restroK from "../../images/restrokitchen.jpg"
import hotelK from "../../images/hotelK.jpg"
import mall from "../../images/mall.jpg"
const projects = [
  {
    title: 'Luxury Hotel Kitchen',
    location: 'Grand Plaza Hotel',
    image: hotelK,
  },
  {
    title: 'Restaurant Chain Setup',
    location: 'FoodCourt Central',
    image: restroK,
  },
  {
    title: 'Mall Food Court',
    location: 'City Center Mall',
    image:mall,
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest commercial kitchen installations and designs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;