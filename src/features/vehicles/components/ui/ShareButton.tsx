'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Button from './Button';
import { ClipboardCopy, Check } from 'lucide-react';

const ShareButton = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const query = searchParams?.toString();
      const fullUrl = `${window.location.origin}${pathname}${query ? `?\${query}` : ''}`;
      setShareUrl(fullUrl);
    }
  }, [pathname, searchParams]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success('Link copied!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <Button variant="outline" onClick={handleCopy} className="flex items-center gap-2">
      {copied ? (
        <Check className="w-4 h-4 text-green-600" />
      ) : (
        <ClipboardCopy className="w-4 h-4" />
      )}{' '}
      <span className="text-sm">{copied ? 'Copied!' : 'Copy Link'} </span>{' '}
    </Button>
  );
};
export default ShareButton;
