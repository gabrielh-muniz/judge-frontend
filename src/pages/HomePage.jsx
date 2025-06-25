import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our application.</p>
      <Link to="/signup" className="text-blue-500 hover:underline">
        <Button>Link to singup page</Button>
      </Link>
    </div>
  );
}

export default HomePage;
