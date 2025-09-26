import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 2C18.8954 2 18 2.89543 18 4V8C18 9.10457 18.8954 10 20 10C21.1046 10 22 9.10457 22 8V4C22 2.89543 21.1046 2 20 2Z"/>
        <path d="M20 30C18.8954 30 18 30.8954 18 32V36C18 37.1046 18.8954 38 20 38C21.1046 38 22 37.1046 22 36V32C22 30.8954 21.1046 30 20 30Z"/>
        <path d="M8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22H12C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18H8Z"/>
        <path d="M28 18C26.8954 18 26 18.8954 26 20C26 21.1046 26.8954 22 28 22H32C33.1046 22 34 21.1046 34 20C34 18.8954 33.1046 18 32 18H28Z"/>
      </svg>
    ),
    title: "Professional Instruction",
    paragraph:
      "Learn from certified equestrian professionals with decades of experience in classical dressage, show jumping, and recreational riding for all skill levels.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0ZM28 22H22V28C22 29.1046 21.1046 30 20 30C18.8954 30 18 29.1046 18 28V22H12C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18H18V12C18 10.8954 18.8954 10 20 10C21.1046 10 22 10.8954 22 12V18H28C29.1046 18 30 18.8954 30 20C30 21.1046 29.1046 22 28 22Z"/>
      </svg>
    ),
    title: "Premier Facilities",
    paragraph:
      "State-of-the-art indoor and outdoor arenas, climate-controlled stables, and beautiful trail systems across our 200-acre countryside estate.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M36 8H32V4C32 1.79086 30.2091 0 28 0H12C9.79086 0 8 1.79086 8 4V8H4C1.79086 8 0 9.79086 0 12V36C0 38.2091 1.79086 40 4 40H36C38.2091 40 40 38.2091 40 36V12C40 9.79086 38.2091 8 36 8ZM12 4H28V8H12V4ZM36 36H4V12H36V36Z"/>
        <path d="M20 16C17.7909 16 16 17.7909 16 20V28C16 30.2091 17.7909 32 20 32C22.2091 32 24 30.2091 24 28V20C24 17.7909 22.2091 16 20 16Z"/>
      </svg>
    ),
    title: "Luxury Boarding",
    paragraph:
      "Premium horse boarding with 24/7 care, daily turnout, individual feeding programs, and personalized attention for your equine partner.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 4C11.1634 4 4 11.1634 4 20C4 28.8366 11.1634 36 20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4ZM20 8C26.6274 8 32 13.3726 32 20C32 26.6274 26.6274 32 20 32C13.3726 32 8 26.6274 8 20C8 13.3726 13.3726 8 20 8Z"/>
        <path d="M20 14C17.2386 14 15 16.2386 15 19V21C15 23.7614 17.2386 26 20 26C22.7614 26 25 23.7614 25 21V19C25 16.2386 22.7614 14 20 14Z"/>
      </svg>
    ),
    title: "Wellness Programs",
    paragraph:
      "Comprehensive horse health and wellness programs including veterinary care, physiotherapy, and specialized nutrition plans.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M38 18H30L28 16H24C22.8954 16 22 16.8954 22 18V22C22 23.1046 22.8954 24 24 24H28L30 22H38C39.1046 22 40 21.1046 40 20C40 18.8954 39.1046 18 38 18Z"/>
        <path d="M2 18H10L12 16H16C17.1046 16 18 16.8954 18 18V22C18 23.1046 17.1046 24 16 24H12L10 22H2C0.89543 22 0 21.1046 0 20C0 18.8954 0.89543 18 2 18Z"/>
        <path d="M20 0C15.5817 0 12 3.58172 12 8V32C12 36.4183 15.5817 40 20 40C24.4183 40 28 36.4183 28 32V8C28 3.58172 24.4183 0 20 0Z"/>
      </svg>
    ),
    title: "Competition Training",
    paragraph:
      "Specialized training programs for competitive riders, from local shows to national championships, with experienced competition coaches.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0L24.7214 15.2786L40 20L24.7214 24.7214L20 40L15.2786 24.7214L0 20L15.2786 15.2786L20 0Z"/>
      </svg>
    ),
    title: "Awards & Recognition",
    paragraph:
      "Proud recipient of multiple equestrian excellence awards and home to champion riders and horses recognized nationally and internationally.",
  },
];
export default featuresData;
