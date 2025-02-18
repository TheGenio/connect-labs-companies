
import { useState } from "react";
import Layout from "@/components/common/Layout";
import { Post } from "@/types/posts";
import { getPosts } from "@/utils/storage";
import PostModal from "@/components/posts/PostModal";
import PostCard from "@/components/posts/PostCard";
import { useToast } from "@/hooks/use-toast";
import { Plus } from "lucide-react";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>(getPosts());
  const [modalType, setModalType] = useState<'problem' | 'research' | 'collab' | null>(null);
  const { toast } = useToast();

  const handleNewPost = (post: Post) => {
    setPosts([post, ...posts]);
    toast({
      title: "Success",
      description: "Your post has been created successfully.",
    });
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="heading-1">All Posts</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setModalType('problem')}
              className="button-primary flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              New Problem
            </button>
            <button
              onClick={() => setModalType('research')}
              className="button-primary flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              New Research
            </button>
            <button
              onClick={() => setModalType('collab')}
              className="button-primary flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              New Collaboration
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <PostModal
          type={modalType}
          onClose={() => setModalType(null)}
          onSubmit={handleNewPost}
        />
      </div>
    </Layout>
  );
};

export default Posts;
