import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";

const images = [
  { src: gallery1, alt: "Students having meals together" },
  { src: gallery2, alt: "Campus construction progress" },
  { src: gallery3, alt: "Community meeting and gathering" },
  { src: gallery4, alt: "School building exterior with students" },
  { src: gallery5, alt: "Campus view with community members" },
  { src: gallery6, alt: "Outdoor activities at the school" },
  { src: gallery7, alt: "Group photo of students and staff" },
];

const ImageGallery = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Journey
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Glimpses of our work in educating and empowering special needs children
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="card-elevated rounded-lg overflow-hidden bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
