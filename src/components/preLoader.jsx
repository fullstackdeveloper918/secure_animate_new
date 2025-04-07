import React from "react";
import Typing from "react-typing-animation";

const TEXTS = [
  "Brewing some cool things",
  "Hang tight, magic is happening",
  "Loading your adventure",
  "Loading ... ",
];

const PreLoader = () => {
  const [index, setIndex] = React.useState(0);
  const [isLoadingComplete, setIsLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length); // Ensure index loops back
    }, 2000); // Change text every 2 seconds

    // Simulate the loading completion after 8 seconds
    const timeoutId = setTimeout(() => {
      setIsLoadingComplete(true);
    }, 8000); // Change to your desired loading time

    // Cleanup on component unmount
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={`pre-load-main ${isLoadingComplete ? "slide-up" : ""}`}>
      <h1>
        <Typing key={index} speed={100} eraseDelay={1000}>
          {TEXTS[index]}
        </Typing>
      </h1>
    </div>
  );
};

export default PreLoader;
