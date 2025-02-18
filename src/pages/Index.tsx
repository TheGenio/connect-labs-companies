
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/common/Layout";
import PostModal from "@/components/posts/PostModal";
import { useToast } from "@/hooks/use-toast";
import { Post } from "@/types/posts";
import { savePost } from "@/utils/storage";

const Index = () => {
  const [modalType, setModalType] = useState<'problem' | 'research' | 'collab' | null>(null);
  const { toast } = useToast();

  const handleNewPost = (post: Post) => {
    savePost(post);
    toast({
      title: "Success",
      description: "Your post has been created successfully.",
    });
  };

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
            <Link to="/posts" className="button-secondary">
              Browse Posts
            </Link>
          </div>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card slide-up">
            <h3 className="heading-3 mb-4">For Companies</h3>
            <p className="text-body text-muted-foreground mb-6">
              Post your challenges anonymously and connect with research labs that can help solve them.
            </p>
            <button onClick={() => setModalType('problem')} className="button-secondary w-full">
              Post a Problem
            </button>
          </div>

          <div className="card slide-up [animation-delay:200ms]">
            <h3 className="heading-3 mb-4">For Research Labs</h3>
            <p className="text-body text-muted-foreground mb-6">
              Share your research projects and find companies interested in funding your work.
            </p>
            <button onClick={() => setModalType('research')} className="button-secondary w-full">
              Share Research
            </button>
          </div>

          <div className="card slide-up [animation-delay:400ms]">
            <h3 className="heading-3 mb-4">Lab Collaboration</h3>
            <p className="text-body text-muted-foreground mb-6">
              Connect with other labs to share resources and collaborate on groundbreaking research.
            </p>
            <button onClick={() => setModalType('collab')} className="button-secondary w-full">
              Post Collaboration
            </button>
          </div>
        </section>

        <PostModal
          type={modalType}
          onClose={() => setModalType(null)}
          onSubmit={handleNewPost}
        />
      </div>
    </Layout>
  );
};

export default Index;
