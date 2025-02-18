
import { Link } from "react-router-dom";
import Layout from "@/components/common/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-16 py-12">
        <section className="text-center space-y-6 fade-in">
          <div className="space-y-4">
            <h1 className="heading-1">
              Connecting Innovation with Research
            </h1>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              A platform where companies and research labs collaborate anonymously to solve real-world problems and advance scientific discovery.
            </p>
          </div>
          
          <div className="flex justify-center gap-4">
            <Link to="/register" className="button-primary">
              Get Started
            </Link>
            <Link to="/search" className="button-secondary">
              Explore
            </Link>
          </div>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card slide-up">
            <h3 className="heading-3 mb-4">For Companies</h3>
            <p className="text-body text-muted-foreground mb-6">
              Post your challenges anonymously and connect with research labs that can help solve them.
            </p>
            <Link to="/post-problem" className="button-secondary w-full">
              Post a Problem
            </Link>
          </div>

          <div className="card slide-up [animation-delay:200ms]">
            <h3 className="heading-3 mb-4">For Research Labs</h3>
            <p className="text-body text-muted-foreground mb-6">
              Share your research projects and find companies interested in funding your work.
            </p>
            <Link to="/post-research" className="button-secondary w-full">
              Share Research
            </Link>
          </div>

          <div className="card slide-up [animation-delay:400ms]">
            <h3 className="heading-3 mb-4">Lab Collaboration</h3>
            <p className="text-body text-muted-foreground mb-6">
              Connect with other labs to share resources and collaborate on groundbreaking research.
            </p>
            <Link to="/search" className="button-secondary w-full">
              Find Labs
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
