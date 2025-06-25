import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";

function HomePage() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Button asChild>
        <Link to="/signup" className="text-blue-500 hover:underline">
          Link to singup page
        </Link>
      </Button>
    </Wrapper>
  );
}

export default HomePage;
