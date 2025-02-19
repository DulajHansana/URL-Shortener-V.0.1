import { useEffect, useState } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Linkresult = ({ inputValue }) => {
  const [linkresult, setLinkresult] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!inputValue) return;

    try {
      setLoading(true);
      setError(null);

      // Replace 'YOUR_API_KEY' with your actual TinyURL API key
      const res = await axios.post(
        "https://api.tinyurl.com/create",
        {
          url: inputValue
        },
        {
          headers: {
            "Authorization": "Bearer yX5fQ1j0cVBIKmi20DJ4Ogbhw5WgF7N4eZxt89Ig4ECNDhTjdhHLQ67a7cAv",
            "Content-Type": "application/json"
          }
        }
      );

      if (res.data && res.data.data && res.data.data.tiny_url) {
        setLinkresult(res.data.data.tiny_url);
      } else {
        setError("Unexpected API response");
      }
    } catch (error) {
      setError("Failed to shorten the URL. Please try again.");
      console.error("API request failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className='result'>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {linkresult && (
        <div>
          <p>Shortened URL: <a href={linkresult} target="_blank" rel="noopener noreferrer">{linkresult}</a></p>
          <CopyToClipboard text={linkresult} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : ""}>
              {copied ? "Copied!" : "Copy to clipboard"}
            </button>
          </CopyToClipboard>
        </div>
      )}
    </div>
  );
};

export default Linkresult;
