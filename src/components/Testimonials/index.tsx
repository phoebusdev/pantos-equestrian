const testimonialData = [
  {
    id: 1,
    name: "Sarah Mitchell",
    designation: "Dressage Competitor",
    content:
      "The training program at Pantos Equestrian transformed both my riding and my horse's performance. The facilities are absolutely world-class.",
  },
  {
    id: 2,
    name: "David Richardson",
    designation: "Parent & Board Member",
    content:
      "My daughter has been riding here for three years. The instructors are amazing and the boarding facilities give me complete peace of mind.",
  },
  {
    id: 3,
    name: "Emma Thompson",
    designation: "Professional Trainer",
    content:
      "I've worked with many facilities, but Pantos Equestrian stands out for their commitment to excellence and horse welfare.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-dark py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl text-dark dark:text-white" style={{ fontFamily: 'Georgia, serif' }}>
            Voices of Excellence
          </h2>
          <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark" style={{ fontFamily: 'Georgia, serif' }}>
            Hear from our community of riders, trainers, and families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="text-center px-6">
              <p className="mb-6 text-lg leading-relaxed text-body-color dark:text-body-color-dark italic" style={{ fontFamily: 'Georgia, serif' }}>
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div>
                <h4 className="text-lg font-medium text-dark dark:text-white" style={{ fontFamily: 'Georgia, serif' }}>
                  {testimonial.name}
                </h4>
                <p className="text-sm text-body-color dark:text-body-color-dark uppercase tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
                  {testimonial.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;