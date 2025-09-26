import Image from "next/image";

const AboutSectionOne = () => {
  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-gray-50/50 dark:bg-gray-dark/50">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 lg:mb-0 max-w-[570px]">
              <h2 className="mb-8 text-3xl md:text-4xl lg:text-5xl text-dark dark:text-white" style={{ fontFamily: 'Georgia, serif' }}>
                Heritage of Equestrian Excellence
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-body-color dark:text-body-color-dark" style={{ fontFamily: 'Georgia, serif' }}>
                For over three decades, Pantos Equestrian has been the cornerstone of luxury equestrian experiences.
                Our 200-acre estate combines traditional horsemanship with modern training methodologies.
              </p>
              <p className="mb-10 text-lg leading-relaxed text-body-color dark:text-body-color-dark" style={{ fontFamily: 'Georgia, serif' }}>
                From Olympic-level dressage to leisurely trail rides through pristine countryside,
                we offer an unparalleled environment where both horse and rider can achieve their highest potential.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="text-center">
                  <h3 className="text-3xl font-light text-primary mb-2" style={{ fontFamily: 'Georgia, serif' }}>200+</h3>
                  <p className="text-sm text-body-color dark:text-body-color-dark uppercase tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>Acres</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-light text-primary mb-2" style={{ fontFamily: 'Georgia, serif' }}>50+</h3>
                  <p className="text-sm text-body-color dark:text-body-color-dark uppercase tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>Horses</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-light text-primary mb-2" style={{ fontFamily: 'Georgia, serif' }}>12</h3>
                  <p className="text-sm text-body-color dark:text-body-color-dark uppercase tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>Instructors</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-light text-primary mb-2" style={{ fontFamily: 'Georgia, serif' }}>30+</h3>
                  <p className="text-sm text-body-color dark:text-body-color-dark uppercase tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>Years</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto max-w-[500px] lg:mr-0">
              {/* Placeholder for elegant image */}
              <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-primary/50 text-lg" style={{ fontFamily: 'Georgia, serif' }}>Estate Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;