'use client';

import { useState } from 'react';
import Button from './Button';
import { ClipboardCopy, Check } from 'lucide-react';

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
  className="flex items-center gap-2"
>
  {copied ? (
    <Check className="w-4 h-4 text-green-600" />
  ) : (
    <ClipboardCopy className="w-4 h-4" />
  )}
  <span className="text-sm">
    {copied ? 'Copied!' : 'Copy Link'}
  </span>
</Button>
  );
};

export default ShareButton;
