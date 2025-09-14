import React from "react";
import person from "../assets/person1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Reviews() {
  const reviews = [
    {
      name: "John Doe",
      image: person,
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit culpa id corporis, tempora nemo architecto eveniet provident enim minima. Great service! Very professional team and excellent communication throughout the process.",
      role: "Manager at Google"
    },
    {
      name: "Jane Smith",
      image: person,
      rating: 5,
      review:
        "Great service! Very professional team and excellent communication throughout the process. Great service! Very professional team and excellent communication throughout the process.",
      role: "Manager at Google"
    },
    {
      name: "Michael Johnson",
      image: person,
      rating: 3,
      review:
        "Good experience overall, but I think there is room for improvement in response time.Great service! Very professional team and excellent communication throughout the process.",
      role: "Manager at Google"
    },
    {
      name: "Emily Davis",
      image: person,
      rating: 5,
      review:
        "Absolutely amazing! They exceeded my expectations and I would highly recommend them.Great service! Very professional team and excellent communication throughout the process.",
      role: "Manager at Google"
    },
    {
      name: "David Wilson",
      image: person,
      rating: 4,
      review:
        "Really satisfied with the results. The team worked hard to deliver everything on time. Really satisfied with the results. The team worked hard to deliver everything on time.",
      role: "Manager at Google"
    },
    {
      name: "Sophia Martinez",
      image: person,
      rating: 5,
      review:
        "Fantastic experience from start to finish! Will definitely come back again. Really satisfied with the results. The team worked hard to deliver everything on time.",
      role: "Manager at Google"
    },
  ];

  return (
    <div className="px-[170px] py-20 animation">
      <h2 className="text-center font-semibold text-5xl">Google Reviews</h2>
      <p className="text-gray-600 text-lg text-center py-4">
        See what our clients are saying about us on Google
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="w-[360px] shadow-[0px_0px_5px_gray] cursor-pointer rounded-lg px-6 py-6 bg-white hover:shadow-[0px_0px_10px_gray]"
          >
            <div className="pb-2">
              <div className="text-gray-600">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={`pr-[1px] ${
                      i < review.rating ? "text-yellow-500" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
            <p
              className="text-gray-600 pt-3 overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                lineHeight: "1.3rem", 
                height: "7.4rem", 
              }}
            >
              {review.review}
            </p>
             <div className="flex items-center gap-4 mt-7">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <p className="font-bold text-lg">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
