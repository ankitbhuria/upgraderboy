import React, { useEffect, useState } from 'react';
import "./header.css";
const ShareButton = () => {
  const [isMac, setIsMac] = useState(false);
  const [isWindows, setIsWindows] = useState(false);
  const [canonicalHref, setCanonicalHref] = useState(null);

  useEffect(() => {
    const button = document.querySelector('button');
    const icon = button.querySelector('.icon');
    const canonical = document.querySelector('link[rel="canonical"]');
    
    setIsMac(/Mac|iPhone/.test(navigator.platform));
    setIsWindows(/Win/.test(navigator.platform));
    setCanonicalHref(canonical?.href);

    icon.classList.add(`share${isMac ? 'mac' : (isWindows ? 'windows' : '')}`);
  }, [isMac, isWindows]);

  const handleClick = async () => {
    const title = document.title;
    const text = document.desc;
    const url = canonicalHref || window.location.href;

    if ('share' in navigator) {
      try {
        await navigator.share({
          url,
          text,
          title,
        });
        return;
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err.name, err.message);
        }
      }
    }

    const shareURL = new URL('https://twitter.com/intent/tweet');
    const params = new URLSearchParams();
    params.append('text', text);
    params.append('url', url);
    shareURL.search = params;
    window.open(shareURL, '_blank', 'popup,noreferrer,noopener');
  };

  return (
    <button onClick={handleClick} className='sign'>
      <span>Share {" "}</span>
      <i className="icon uil-share"></i>
    </button>
  );
};

export default ShareButton;
