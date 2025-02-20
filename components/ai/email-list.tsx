import * as React from "react";

interface EmailListProps {
  folder: string;
  emails: Array<{
    subject: string;
    from: string;
    date: string;
    snippet: string;
  }>;
}

export function EmailList({ folder, emails }: EmailListProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        Found {emails.length} emails in {folder}
      </h3>

      <div className="space-y-3">
        {emails.map((email, index) => (
          <div key={index} className="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 space-y-1">
                <p className="line-clamp-1 font-medium">{email.subject}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">From: {email.from}</p>
                {email.snippet && (
                  <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
                    {email.snippet}
                  </p>
                )}
              </div>
              <time className="whitespace-nowrap text-xs text-gray-500">
                {new Date(email.date).toLocaleDateString()}
              </time>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
