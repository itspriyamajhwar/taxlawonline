import React, { useState } from "react";
import "./style.css";

const TrademarkSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to fetch results from the Trademark Search API
  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      setError("Please enter a search query.");
      return;
    }

    setError("");
    setLoading(true);
    setSearchResult("");

    try {
      const response = await fetch(
        `https://api.example.com/trademark-search?query=${encodeURIComponent(
          searchQuery
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YOUR_API_KEY", // Replace with your API key
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch trademark data.");
      }

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setSearchResult(
          `Found ${data.results.length} result(s): ${data.results
            .map((result) => result.name)
            .join(", ")}`
        );
      } else {
        setSearchResult("No trademark information found for your query.");
      }
    } catch (error) {
      setError("An error occurred while fetching trademark information.");
    } finally {
      setLoading(false);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Auto-hide popup after 3 seconds
    }
  };

  return (
    <div className="trademark-search-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Trademark Search</h1>
        <p>
          Easily search for trademark information and ensure your brand is
          unique. Enter your query in the search box below to find your
          answers.
        </p>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <h2>Trademark Search Tool</h2>
        <p>Type your query below to get the details you need:</p>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter your query..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch} disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
        {error && <div className="error-message">{error}</div>}
        {searchResult && <div className="search-result">{searchResult}</div>}
      </section>

      {/* Question & Answer Section */}
      <section className="qa-section">
        <h2>Frequently Asked Questions</h2>
        <div className="qa-container">
          <div className="qa-item">
            <h3>What is a Trademark Search?</h3>
            <p>
              A trademark search involves checking whether a specific trademark
              is already registered or in use.
            </p>
          </div>
          <div className="qa-item">
            <h3>Why is a Trademark Search important?</h3>
            <p>
              It ensures that your brand name, logo, or design is unique and
              doesn't infringe on existing trademarks.
            </p>
          </div>
          <div className="qa-item">
            <h3>How to conduct a Trademark Search?</h3>
            <p>
              You can search using official trademark databases or use tools
              provided by legal agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Paragraph Section */}
      <section className="info-section">
        <h2>About Trademark Search</h2>
        <p>
          Conducting a trademark search is the first step in protecting your
          intellectual property. This ensures your brand stands out and avoids
          legal complications. A thorough search helps identify potential
          conflicts with existing trademarks and strengthens your brand's
          foundation.
        </p>
        <p>
          Trademark searches are crucial for businesses aiming to register their
          logos, names, or designs. Start your journey by understanding the
          process and utilizing available tools.
        </p>
      </section>

      {/* Popup Notification */}
      {showPopup && (
        <div className="popup">
          <p>Thank you for connecting with us! We hope you find your answer.</p>
        </div>
      )}
    </div>
  );
};

export default TrademarkSearch;
