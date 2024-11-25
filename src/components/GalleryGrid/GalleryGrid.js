import React from "react";

const PhotoGrid = () => {
  const photos = [
    {
      id: 1,
      url: "/images/AnBackstageToilet.webp",
      alt: "image 1",
      spanTwoColumns: false,
    },
    {
      id: 2,
      url: "/images/AnBackstage.webp",
      alt: "image 2",
      spanTwoColumns: false,
    },
    {
      id: 3,
      url: "/images/AnOnStage.webp",
      alt: "image 3",
      spanTwoColumns: true,
    },
    {
      id: 4,
      url: "/images/StefShook-byNADIA.webp",
      alt: "image 4",
      spanTwoColumns: false,
    },
    {
      id: 5,
      url: "/images/AnthAN-by-NADIAMTTH.webp",
      alt: "image 1",
      spanTwoColumns: false,
    },
    {
      id: 6,
      url: "/images/BANDS.webp",
      alt: "image 2",
      spanTwoColumns: true,
    },
    {
      id: 7,
      url: "/images/AnthSingingBlue-byNADIA.webp",
      alt: "image 1",
      spanTwoColumns: false,
    },
    {
      id: 8,
      url: "/images/StefanosPoulimasAnStageKotsidia.webp",
      alt: "image 2",
      spanTwoColumns: false,
    },
    {
      id: 9,
      url: "/images/anthSinging-byNADIA.webp",
      alt: "image 2",
      spanTwoColumns: false,
    },
  ];

  const handleImageClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={`
              h-[250px]
              overflow-hidden 
              rounded-sm 
              shadow-md 
              hover:shadow-xl 
              transition-shadow 
              duration-300
              group
              ${photo.spanTwoColumns ? "col-span-1 sm:col-span-2" : ""}
            `}
            onClick={() => handleImageClick(photo.url)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-[250px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
