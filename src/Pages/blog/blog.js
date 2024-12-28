import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Tax Laws: A Beginner's Guide",
      date: "December 1, 2024",
      author: "Priya Majhwar",
      summary:
        "Tax laws can be complicated. This guide breaks down the basics to help you navigate your tax filing with ease.",
      content: `
        Tax laws govern how individuals and businesses pay taxes to the government. 
        They are complex, but understanding the basics can help you save money and avoid penalties. 
        This post covers the fundamentals of tax brackets, deductions, and exemptions.
      `,
    },
    {
      id: 2,
      title: "Top 5 Mistakes to Avoid While Filing Taxes",
      date: "December 15, 2024",
      author: "Priya Majhwar",
      summary:
        "Learn about common mistakes people make while filing taxes and how to avoid them to save time and money.",
      content: `
        Filing taxes can be stressful, and mistakes are common. 
        From forgetting to report income to claiming ineligible deductions, 
        these errors can result in fines or audits. This post provides practical tips to help you file accurately.
      `,
    },
    {
      id: 3,
      title: "The Importance of Tax Planning for Small Businesses",
      date: "December 20, 2024",
      author: "Priya Majhwar",
      summary:
        "Small businesses often overlook tax planning, but it’s essential for saving money and ensuring compliance.",
      content: `
        Tax planning involves preparing for taxes throughout the year rather than scrambling during tax season. 
        This post outlines strategies like keeping detailed records, leveraging deductions, and consulting a tax professional.
      `,
    },
    {
      id: 4,
      title: "How to Maximize Your Tax Refund",
      date: "December 25, 2024",
      author: "Priya Majhwar",
      summary:
        "Maximizing your tax refund requires understanding deductions, credits, and filing strategies.",
      content: `
        Many taxpayers miss out on refunds because they don’t claim all available deductions and credits. 
        This post explains how to identify opportunities to increase your refund legally.
      `,
    },
    {
      id: 5,
      title: "Understanding the Difference Between Tax Credits and Deductions",
      date: "December 28, 2024",
      author: "Priya Majhwar",
      summary:
        "Tax credits and deductions reduce your tax liability, but they work differently. Learn how each affects your taxes.",
      content: `
        Tax credits provide a dollar-for-dollar reduction in your tax bill, while deductions reduce taxable income. 
        This post explains the differences, provides examples, and helps you choose the best options for your situation.
      `,
    },
    {
      id: 6,
      title: "The Future of Tax Laws: What to Expect in 2025",
      date: "January 1, 2025",
      author: "Priya Majhwar",
      summary:
        "Tax laws evolve every year. Stay informed about upcoming changes that could affect your finances.",
      content: `
        Governments worldwide are revising tax laws to accommodate economic changes. 
        This post discusses expected updates in 2025, including new tax brackets, credits, and deductions.
      `,
    },
  ];

  const [selectedPost, setSelectedPost] = useState(null);

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleGoBack = () => {
    setSelectedPost(null);
  };

  return (
    <div className="container">
      <h1 className="text-3xl text-center">TaxLawOnline Blog</h1>
      {!selectedPost ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="border shadow-lg hover:shadow-xl transition-shadow p-4">
              <h2 className="text-2xl mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-2">{post.date} by {post.author}</p>
              <p className="text-gray-700 mb-4">{post.summary}</p>
              <button
                className="btn-primary"
                onClick={() => handleReadMore(post)}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="post-details">
          <h2 className="text-2xl font-bold mb-2">{selectedPost.title}</h2>
          <p className="text-gray-500 text-sm mb-4">
            {selectedPost.date} by {selectedPost.author}
          </p>
          <p className="text-gray-700 mb-4">{selectedPost.content}</p>
          <button className="btn-secondary" onClick={handleGoBack}>
            Back to Posts
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
