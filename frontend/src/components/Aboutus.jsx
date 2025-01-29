import React from "react";

const Aboutus = () => {
  return (
    <>
      <div
        className="lg:px-36 md:py-5 px-5"
        style={{
          display: "flex",
          paddingLeft: "9rem",
          paddingRight: "9rem",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
        }}
      >
        <div
          className="container mx-auto"
          style={{
            height:'auto',
            width: "100%",
            maxWidth: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            justifyContent: "space-between", // Ensures space between text and images
            alignItems: "center", // Vertically centers the text and images
            flexDirection: "row", // Images on left, text on right
          }}
        >
          {/* Image Section */}
          <div
            className="w-full lg:w-6/12"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between", // Ensures images are spaced evenly
              flexDirection: "row", // Ensures images are side by side
            }}
          >
            <div
              className="image-container"
              style={{
                width: "48%", // Ensures images take up 48% of the container's width
                height: "auto", // Keeps aspect ratio intact
              }}
            >
              <img
                src="https://i.pinimg.com/736x/28/57/4e/28574e61708ed077db93dd64fc41c7b8.jpg"
                alt="tajmahel"
                style={{
                  width: "100%",
                  height: "25rem", // Ensures images have same height and width
                  objectFit: "cover", // Ensures the image covers the entire area
                  borderRadius: "1rem",
                  marginTop:'9rem' // Rounded corners
                }}
              />
            </div>
            <div
              className="image-container"
              style={{
                width: "48%", // Ensures images take up 48% of the container's width
                height: "auto", // Keeps aspect ratio intact
              }}
            >
              <img
                src="https://media.istockphoto.com/id/1044781846/photo/dal-lake-in-srinagar-kashmir.jpg?s=612x612&w=0&k=20&c=OMfOMZpZBi4Tg-esjcXA4uOYjmKiXxqJbMr-mObhxtY="
                alt="kashmir"
                style={{
                  width: "100%",
                  height: "auto", // Ensures images have same height and width
                  objectFit: "cover", // Ensures the image covers the entire area
                  borderRadius: "1rem", // Rounded corners
                }}
              />
              <img src="https://thumbs.dreamstime.com/b/vertical-backshot-beautiful-indian-peafowl-scenic-park-vertical-backshot-beautiful-indian-peafowl-scenic-205111502.jpg"
                      alt="peacock"
                      className="w-full rounded-2xl"
                      style={{
                        marginTop:'10px',
                        width: "100%",
                        height: "auto", // Ensures images have same height and width
                        objectFit: "cover", // Ensures the image covers the entire area
                        borderRadius: "1rem", // Rounded corners
                      }}
                    />
            </div>
          </div>

          {/* Text Section */}
          <div
            className="w-full lg:w-6/12"
            style={{
              marginLeft: '7rem',
              width: "100%", // Set width to 100% for mobile view
              position: "relative", // Set position relative to allow z-index control
              zIndex: 2, // Higher z-index value for text (in front of images)
            }}
          >
            <div className="mt-10 lg:mt-0">
              <span
                className="text-#41A4FF mb-2 block text-lg font-semibold"
                style={{
                  textAlign: "left",
                  color: "#41A4FF", // text-#41A4FF sets the text color to #41A4FF
                  marginBottom: "0.5rem", // mb-2 sets margin-bottom to 0.5rem
                  display: "block", // block makes the element a block-level element
                  fontSize: "2rem", // text-lg sets font size to 1.125rem (lg corresponds to 18px)
                  fontWeight: "600", // font-semibold sets the font weight to 600
                }}
              >
                Why Choose Us
              </span>
              <h2
                className="text-dark mb-8 text-3xl font-bold sm:text-4xl"
                style={{
                  color: "dark", // text-dark (assuming "dark" is a predefined color)
                  marginBottom: "2rem", // mb-8 corresponds to 2rem
                  fontSize: "1.875rem", // text-3xl sets font size to 1.875rem (3xl corresponds to 30px)
                  fontWeight: "700", // font-bold sets the font weight to 700
                }}
              >
                Travely Make Your Journey Memorable
              </h2>
              <p
                className="text-body-color mb-8 text-base"
                style={{
                  color: "var(--body-color)", // text-body-color, assuming it's a CSS variable or replace with specific color like "#333333"
                  marginBottom: "2rem", // mb-8 corresponds to 2rem
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                Discover the joy of effortless travel planning with Travely. Our seamless booking process, reliable service, and customer-first approach ensure your journey is stress-free and enjoyable.
              </p>
              <p
                className="text-body-color mb-12 text-base"
                style={{
                  color: "var(--body-color)", // text-body-color (assuming it's a CSS variable, or replace with a specific color like #333333)
                  marginBottom: "3rem", // mb-12 corresponds to 3rem
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                From personalized travel options to round-the-clock support, we go the extra mile to make your trips comfortable, convenient, and truly unforgettable
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
