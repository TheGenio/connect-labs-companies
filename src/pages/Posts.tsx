
import { useState } from "react";
import Layout from "@/components/common/Layout";
import { Post } from "@/types/posts";
import PostCard from "@/components/posts/PostCard";

// Mock data
const mockPosts: Post[] = [
  {
    id: "1",
    type: "problem",
    title: "Sustainable Packaging Solution",
    description: "Looking for innovative solutions to reduce plastic packaging waste in our supply chain.",
    createdAt: "2024-03-15T10:00:00Z",
    industry: "Manufacturing",
    anonymous: true
  },
  {
    id: "2",
    type: "research",
    title: "AI-Powered Drug Discovery",
    description: "Research on using machine learning to accelerate drug discovery process.",
    createdAt: "2024-03-14T15:30:00Z",
    researchArea: "Bioinformatics",
    fundingNeeded: 250000
  },
  {
    id: "3",
    type: "collab",
    title: "Advanced Microscopy Equipment Share",
    description: "Offering access to our new electron microscope facility.",
    createdAt: "2024-03-13T09:15:00Z",
    resourceType: "Equipment",
    institution: "Tech University"
  },
  {
    id: "4",
    type: "problem",
    title: "Energy Efficiency Optimization",
    description: "Seeking solutions to reduce energy consumption in industrial processes.",
    createdAt: "2024-03-12T14:20:00Z",
    industry: "Energy",
    anonymous: false
  },
  {
    id: "5",
    type: "research",
    title: "Quantum Computing Algorithm",
    description: "Developing new algorithms for quantum cryptography.",
    createdAt: "2024-03-11T11:45:00Z",
    researchArea: "Quantum Computing",
    fundingNeeded: 500000
  }
];

const Posts = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = mockPosts.filter(post => {
    const matchesType = selectedType === 'all' || post.type === selectedType;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="heading-1">All Posts</h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field"
            />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="input-field"
            >
              <option value="all">All Types</option>
              <option value="problem">Problems</option>
              <option value="research">Research</option>
              <option value="collab">Collaborations</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Posts;
