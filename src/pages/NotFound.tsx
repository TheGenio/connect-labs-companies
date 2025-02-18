
import { Link } from "react-router-dom";
import Layout from "@/components/common/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
        <h1 className="heading-1">404: Page Not Found</h1>
        <p className="text-body text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="button-primary">
          Return Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
