import React from "react";
import person2 from "../assets/person2.jpg";
import pythonImg from "../assets/pythonImg.jpg";
import nodejsImg from "../assets/nodejsImg.jpg";
import javaImg from "../assets/javaImg.jpg";
import cImg from "../assets/cImg.jpg";
import javaScriptImg from "../assets/javaScriptImg.jpg";
import FeatureCard from "../components/FeatureCard";


export default function Features() {
const FeatureData = [
  {
    id: 1,
    title: "Python",
    description: "A simple Python program that prints 'Hello, World!' to the console.",
    image: pythonImg,
  },
  {
    id: 2,
    title: "Node.js",
    description: "A basic Node.js server that responds with 'Hello, World!' to incoming requests.",
    image: nodejsImg,
  },
  { 
    id: 3,
    title: "C Programming",
    description: "A basic C program that prints 'Hello, World!' to the console.",
    image: cImg,
  },

  
];

  return (
    <section className="py-16 mt-12 ">
      <div className=" mx-[140px] px-6">
        <h2 className="text-5xl font-bold text-center mb-16 ">Our Featured <span className="text-[#fd0d34]">Course</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FeatureData.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              tags={feature.tags}
              code={feature.code}
              category={feature.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
