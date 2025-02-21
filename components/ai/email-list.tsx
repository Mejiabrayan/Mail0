"use client";

import { motion } from "motion/react";
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
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15 }}
      className="space-y-4"
    >
      <h3 className="inline-flex items-center gap-2 text-lg">
        <span className="relative isolate rounded-full bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-700 ring-1 ring-emerald-500/20 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-emerald-500/5 before:opacity-50 dark:text-emerald-300 dark:ring-emerald-400/20 dark:before:from-emerald-400/10">
          {emails.length} Emails
        </span>
        <span className="text-muted-foreground">in {folder}</span>
      </h3>

      <div className="space-y-3">
        {emails.map((email, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: index * 0.05 }}
            className="relative isolate rounded-lg bg-secondary p-3 text-primary shadow-[0_1px_3px_theme(colors.black/0.05)] ring-1 ring-black/5 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-b before:from-black/5 before:opacity-50 before:transition-opacity hover:bg-secondary/90 hover:before:opacity-100 dark:shadow-[0_1px_theme(colors.white/0.07)_inset] dark:ring-white/5 dark:before:from-white/20"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 space-y-1">
                <p className="line-clamp-1 font-medium">{email.subject}</p>
                <p className="text-sm text-muted-foreground">From: {email.from}</p>
                {email.snippet && (
                  <p className="line-clamp-2 text-sm text-muted-foreground/80">{email.snippet}</p>
                )}
              </div>
              <time className="whitespace-nowrap text-xs text-muted-foreground">
                {new Date(email.date).toLocaleDateString()}
              </time>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
