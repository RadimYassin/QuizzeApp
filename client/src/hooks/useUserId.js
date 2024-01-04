import { useState, useEffect } from 'react';

const useUserId = () => {
  // State to store the user ID
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Function to get user ID from local storage
    const getUserIdFromLocalStorage = () => {
      const storedUserId = localStorage.getItem('userInfo');
      if (storedUserId) {
        // If user ID is found in local storage, set it in the state
        setUserInfo(storedUserId);
      }
    };

    // Call the function to get user ID when the component mounts
    getUserIdFromLocalStorage();

    // You might want to add an event listener here to update the user ID if it changes in local storage
    // For example, if your application allows users to log in and out

    // Cleanup function (optional)
    return () => {
      // Cleanup, if needed
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Return the user ID state
  if (userInfo!=null || userInfo!=undefined ) {
        return JSON.parse(userInfo);
    
  }

};

export default useUserId;
