import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  "https://lyzekbquqgeumibpayyj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5emVrYnF1cWdldW1pYnBheXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1NzUxNDksImV4cCI6MjAzMTE1MTE0OX0.Gy4SzNJWZvCZipvIy3ncxiYMLsiTzaGSi_F_0fZObaI"
);

function Success() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event == "SIGNED_IN") {
        navigate("/success");
    }
});
  return (
    <div className="App">
      <header className="App-header">
        <Auth supabaseClient={supabase} 
        appearance={{ theme: ThemeSupa.dark }}
        providers={["google" , "github"]}
        onlyThirdPartyProviders
        />
      </header>
    </div>
  );
}
export default Success;
