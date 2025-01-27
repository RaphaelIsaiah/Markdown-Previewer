export const syncScroll = (sourceElement, targetElement) => {
  let isScrolling = false; // Flag to prevent recursive triggering

  const handleScroll = () => {
    if (isScrolling) return; // Exit if already syncing

    isScrolling = true; // Set flag to true

    // Calculate the scroll percentage
    const percentage =
      sourceElement.scrollTop /
      (sourceElement.scrollHeight - sourceElement.clientHeight);

    // Apply the same percentage to the target element
    targetElement.scrollTop =
      percentage * (targetElement.scrollHeight - targetElement.clientHeight);

    // Reset the flag after a short delay
    setTimeout(() => {
      isScrolling = false;
    }, 50); // Adjust the delay as needed
  };

  // Add the event listener
  sourceElement.addEventListener("scroll", handleScroll);

  // Return a cleanup function to remove the event listener
  return () => {
    sourceElement.removeEventListener("scroll", handleScroll);
  };
};
