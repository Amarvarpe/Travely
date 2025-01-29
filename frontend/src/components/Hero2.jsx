import React from "react";

const Hero2 = () => {
  return (
    <>
      <div
        style={{
          paddingLeft: "2rem", // px-8 = 2rem (32px)
          paddingRight: "2rem", // px-8 = 2rem (32px)
          paddingTop: "1.25rem", // py-5 = 1.25rem (20px)
          paddingBottom: "1.25rem", // py-5 = 1.25rem (20px)
          "@media (min-width: 768px)": {
            paddingLeft: "9rem", // md:px-36 = 9rem (144px)
            paddingRight: "9rem", // md:px-36 = 9rem (144px)
            paddingTop: "7rem", // md:py-28 = 7rem (112px)
            paddingBottom: "7rem", // md:py-28 = 7rem (112px)
          },
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column", // Default for small screens (flex-col)
            gap: "2.5rem", // gap-10 = 2.5rem (40px)
            "@media (min-width: 1024px)": {
              flexDirection: "row", // lg:flex-row = row layout for large screens
            },
            position: "relative", // Important for positioning the image behind the content
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem", // gap-5 = 1.25rem (20px)
              justifyContent: "center",
              padding: "1.25rem", // p-5 = 1.25rem (20px)
              zIndex: 2, // Text should appear above the image
            }}
          >
            <h1
              style={{
                color:'white',
                fontSize: "3.25rem", // text-4xl = 2.25rem (36px)
                fontWeight: "700", // font-bold = bold
                "@media (min-width: 768px)": {
                  fontSize: "3rem", // md:text-5xl = 3rem (48px)
                },
              }}
            >
              Explore
            </h1>
            <h1
              style={{
                 color:'white',
                fontSize: "3.25rem", // text-4xl = 2.25rem (36px)
                fontWeight: "700", // font-bold = bold
                "@media (min-width: 768px)": {
                  fontSize: "3rem",
                  // md:text-5xl = 3rem (48px)
                },
              }}
            >
              the Wonders in
            </h1>
            <h1
              style={{
                fontSize: "3.25rem", // text-4xl = 2.25rem (36px)
                fontWeight: "700", // font-bold = bold
                color: "#41A4FF", // text-[#41A4FF] = custom text color
                "@media (min-width: 768px)": {
                  fontSize: "3.75rem", // md:text-6xl = 3.75rem (60px)
                },
              }}
            >
              India
            </h1>
            <p
              className="mt-4"
              style={{
                marginTop: "1rem",
                width: "50%",
                fontSize: "17px",
                color:'whitesmoke' // mt-4 = 1rem (16px)
              }}
            >
              India is a diverse and vibrant country known for its rich cultural
              heritage, ancient history, and stunning landscapes ranging from
              the Himalayas to tropical beaches. It is home to iconic landmarks
              like the Taj Mahal and is celebrated for its cuisine, spirituality,
              and festivals.
            </p>
            <button
              className="bg-black text-white px-2 py-3 rounded-lg hover:bg-white hover:border hover:text-black hover:font-bold mt-4"
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "12px 8px", // px-2 py-3 equivalent
                borderRadius: "0.5rem", // rounded-lg
                marginTop: "1rem", // mt-4
                fontWeight: "bold",
                transition: "all 0.3s ease",
                border: "2px solid transparent", // For hover border
                cursor: "pointer", // Adds a pointer cursor for better UX
                ":hover": {
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bold",
                  borderColor: "black",
                },
              }}
            >
              Get started
            </button>
          </div>
          <div
            style={{
              position: "absolute", // Absolute position to overlap the image
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              zIndex: 1, // Ensure image is behind the text
            }}
          >
            <img
              src="https://img.freepik.com/premium-photo/palm-tree-jungle-philippines-concept-about-wanderlust-tropical-travels-swinging-river-people-having-fun_186382-1220.jpg?w=1060"
              alt="heroimg"
              className="rounded-3xl h-[100%] w-full object-cover"
              style={{
                borderRadius: "1.5rem", // rounded-3xl
                height: "100%", // h-[100%]
                width: "100%", // w-full
                objectFit: "cover", // Ensures the image fully covers the area
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
