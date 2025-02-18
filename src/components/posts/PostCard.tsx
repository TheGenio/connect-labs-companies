
import { Post } from "@/types/posts";
import { formatDistanceToNow } from "date-fns";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="card space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="heading-3">{post.title}</h3>
          <p className="text-sm text-muted-foreground">
            {formatDistanceToNow(new Date(post.createdAt))} ago
          </p>
        </div>
        <span className="px-2 py-1 text-xs rounded-full bg-secondary">
          {post.type}
        </span>
      </div>

      <p className="text-body text-muted-foreground">{post.description}</p>

      {post.type === 'problem' && (
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-medium">Industry:</span> {post.industry}
          </p>
          {post.anonymous && (
            <span className="text-xs bg-secondary px-2 py-1 rounded-full">
              Anonymous Post
            </span>
          )}
        </div>
      )}

      {post.type === 'research' && (
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-medium">Research Area:</span> {post.researchArea}
          </p>
          <p className="text-sm">
            <span className="font-medium">Funding Needed:</span> ${post.fundingNeeded.toLocaleString()}
          </p>
        </div>
      )}

      {post.type === 'collab' && (
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-medium">Resource Type:</span> {post.resourceType}
          </p>
          <p className="text-sm">
            <span className="font-medium">Institution:</span> {post.institution}
          </p>
        </div>
      )}

      <button className="button-secondary w-full">
        Express Interest
      </button>
    </div>
  );
};

export default PostCard;
