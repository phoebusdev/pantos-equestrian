import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Essential Horse Care Tips for Winter",
    paragraph:
      "Learn how to keep your equine partner healthy and comfortable during the colder months with expert advice from our veterinary team.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Dr. Sarah Williams",
      image: "/images/blog/author-01.png",
      designation: "Veterinarian",
    },
    tags: ["horse-care"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Building Confidence in Young Riders",
    paragraph:
      "Discover proven techniques for developing confidence and competence in beginning equestrians through proper instruction and support.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Jennifer Martinez",
      image: "/images/blog/author-02.png",
      designation: "Head Instructor",
    },
    tags: ["training"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Competition Prep: Mental and Physical Training",
    paragraph:
      "Prepare yourself and your horse for competition success with comprehensive training strategies from our experienced coaches.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Michael Thompson",
      image: "/images/blog/author-03.png",
      designation: "Competition Coach",
    },
    tags: ["competition"],
    publishDate: "2025",
  },
];
export default blogData;
