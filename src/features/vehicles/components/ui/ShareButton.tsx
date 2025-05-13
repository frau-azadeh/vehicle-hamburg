'use client';

import { useState } from 'react';
import Button from './Button';

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy');
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleCopy}
      className="text-sm"
    >
      {copied ? 'Copied!' : 'Copy Link'}
    </Button>
  );
};

export default ShareButton;
