
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Post } from "@/types/posts";
import { savePost } from "@/utils/storage";

interface PostModalProps {
  type: 'problem' | 'research' | 'collab' | null;
  onClose: () => void;
  onSubmit: (post: Post) => void;
}

const PostModal = ({ type, onClose, onSubmit }: PostModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [industry, setIndustry] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [researchArea, setResearchArea] = useState("");
  const [fundingNeeded, setFundingNeeded] = useState("");
  const [resourceType, setResourceType] = useState("");
  const [institution, setInstitution] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const basePost = {
      id: Date.now().toString(),
      title,
      description,
      createdAt: new Date().toISOString(),
    };

    let post: Post;

    switch (type) {
      case 'problem':
        post = {
          ...basePost,
          type: 'problem',
          industry,
          anonymous,
        };
        break;
      case 'research':
        post = {
          ...basePost,
          type: 'research',
          researchArea,
          fundingNeeded: Number(fundingNeeded),
        };
        break;
      case 'collab':
        post = {
          ...basePost,
          type: 'collab',
          resourceType,
          institution,
        };
        break;
      default:
        return;
    }

    savePost(post);
    onSubmit(post);
    onClose();
  };

  return (
    <Dialog open={!!type} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {type === 'problem' && "Post a Problem"}
            {type === 'research' && "Share Research"}
            {type === 'collab' && "Lab Collaboration"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-field w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input-field w-full h-32"
              required
            />
          </div>

          {type === 'problem' && (
            <>
              <div>
                <label htmlFor="industry" className="block text-sm font-medium mb-1">
                  Industry
                </label>
                <input
                  id="industry"
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="input-field w-full"
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="anonymous"
                  type="checkbox"
                  checked={anonymous}
                  onChange={(e) => setAnonymous(e.target.checked)}
                />
                <label htmlFor="anonymous" className="text-sm">
                  Post Anonymously
                </label>
              </div>
            </>
          )}

          {type === 'research' && (
            <>
              <div>
                <label htmlFor="researchArea" className="block text-sm font-medium mb-1">
                  Research Area
                </label>
                <input
                  id="researchArea"
                  type="text"
                  value={researchArea}
                  onChange={(e) => setResearchArea(e.target.value)}
                  className="input-field w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="fundingNeeded" className="block text-sm font-medium mb-1">
                  Funding Needed ($)
                </label>
                <input
                  id="fundingNeeded"
                  type="number"
                  value={fundingNeeded}
                  onChange={(e) => setFundingNeeded(e.target.value)}
                  className="input-field w-full"
                  required
                  min="0"
                />
              </div>
            </>
          )}

          {type === 'collab' && (
            <>
              <div>
                <label htmlFor="resourceType" className="block text-sm font-medium mb-1">
                  Resource Type
                </label>
                <input
                  id="resourceType"
                  type="text"
                  value={resourceType}
                  onChange={(e) => setResourceType(e.target.value)}
                  className="input-field w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="institution" className="block text-sm font-medium mb-1">
                  Institution
                </label>
                <input
                  id="institution"
                  type="text"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="input-field w-full"
                  required
                />
              </div>
            </>
          )}

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="button-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="button-primary"
            >
              Create Post
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PostModal;
