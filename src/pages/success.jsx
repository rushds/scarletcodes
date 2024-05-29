import React, { useEffect, useState } from 'react';
import { supabase } from '../App.jsx';

function Success() {
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        console.log(user.user_metadata.name);
        setUserName(user.user_metadata.name);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{loading ? 'Loading...' : userName ? "logged in as: " + userName : 'User not found'}</h1>
      </header>
    </div>
  );
}

export default Success;
