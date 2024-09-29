"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

  
const cardsData = [
  {
    name: "Manu Arora",
    readTime: "2 min read",
    avatar: "/manu.png",
    title: "Author Card 1",
    description:
      "Card with Author avatar, complete name and time to read - most suitable for blogs.",
    backgroundImage:
      "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
  },
  {
    name: "John Doe",
    readTime: "3 min read",
    avatar: "/john.png",
    title: "Author Card 2",
    description:
      "Another example of a card with avatar and blog information.",
    backgroundImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  },
  {
    name: "Jane Smith",
    readTime: "4 min read",
    avatar: "/jane.png",
    title: "Author Card 3",
    description:
      "This card is best for featuring a specific author's work or profile.",
    backgroundImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  },
  {
    name: "Manu Arora",
    readTime: "2 min read",
    avatar: "/manu.png",
    title: "Author Card 1",
    description:
      "Card with Author avatar, complete name and time to read - most suitable for blogs.",
    backgroundImage:
      "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
  },
  {
    name: "John Doe",
    readTime: "3 min read",
    avatar: "/john.png",
    title: "Author Card 2",
    description:
      "Another example of a card with avatar and blog information.",
    backgroundImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  },
  {
    name: "Jane Smith",
    readTime: "4 min read",
    avatar: "/jane.png",
    title: "Author Card 3",
    description:
      "This card is best for featuring a specific author's work or profile.",
    backgroundImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  },
];

export function CardDemo() {
  return (
    <div className="relative overflow-hidden w-full h-[70vh] flex items-center">
      <div
        className={cn(
          "flex space-x-12 py-4 animate-slide whitespace-nowrap"
        )}
        style={{ animationDuration: "30s", animationIterationCount: "infinite" }}
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="inline-block min-w-xs max-w-xs w-full group/card transform transition-transform"
          >
            <div
              className={cn(
                "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl backgroundImage flex flex-col justify-between p-4",
                "bg-cover"
              )}
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                <Image
                  height="100"
                  width="100"
                  alt="Avatar"
                  src={card.avatar}
                  className="h-10 w-10 rounded-full border-2 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-normal text-base text-gray-50 relative z-10">
                    {card.name}
                  </p>
                  <p className="text-sm text-gray-400">{card.readTime}</p>
                </div>
              </div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  {card.title}
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
