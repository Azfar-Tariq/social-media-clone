import { useEffect, useState } from "react";

const useUser = () => {
  const [userId, setUserId] = useState<string | null>(null);

  const fetchUserId = async () => {
    try {
      const response = await fetch("/api/users/me");
      const data = await response.json();
      setUserId(data.data._id);
    } catch (error) {
      console.error("Failed to fetch user ID:", error);
    }
  };

  useEffect(() => {
    fetchUserId();
  }, []);

  return userId;
};

export default useUser;
