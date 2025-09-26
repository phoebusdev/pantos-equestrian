const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl text-dark dark:text-white" style={{ fontFamily: 'Georgia, serif' }}>
            Visit Our Estate
          </h2>
          <p className="mb-12 text-lg leading-relaxed text-body-color dark:text-body-color-dark" style={{ fontFamily: 'Georgia, serif' }}>
            Schedule a private tour of our facilities and discover the Pantos Equestrian difference.
            Our team is available daily to welcome you to our world of equestrian excellence.
          </p>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center mb-12">
            <div className="text-center">
              <h3 className="mb-3 text-lg font-medium text-dark dark:text-white uppercase tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
                Location
              </h3>
              <p className="text-body-color dark:text-body-color-dark" style={{ fontFamily: 'Georgia, serif' }}>
                200 Countryside Lane<br />
                Wellington, FL 33414
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-3 text-lg font-medium text-dark dark:text-white uppercase tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
                Contact
              </h3>
              <p className="text-body-color dark:text-body-color-dark" style={{ fontFamily: 'Georgia, serif' }}>
                (561) 555-0123<br />
                info@pantosequestrian.com
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-3 text-lg font-medium text-dark dark:text-white uppercase tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
                Hours
              </h3>
              <p className="text-body-color dark:text-body-color-dark" style={{ fontFamily: 'Georgia, serif' }}>
                Daily: 6:00 AM - 9:00 PM<br />
                Tours by Appointment
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="/contact"
              className="inline-block px-10 py-4 text-base font-medium tracking-wider uppercase border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Schedule Your Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;