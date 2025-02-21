"use client";

import type { EmailStats } from "@/app/types";
import { motion } from "motion/react";
import * as React from "react";

interface EmailSummaryProps {
  period: string;
  summary: EmailStats;
}

export function EmailSummary({ period, summary }: EmailSummaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15 }}
      className="space-y-4"
    >
      <h3 className="inline-flex items-center gap-2 text-lg">
        <span className="relative isolate rounded-full bg-blue-500/10 px-3 py-1 font-semibold text-blue-700 ring-1 ring-blue-500/20 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-blue-500/5 before:opacity-50 dark:text-blue-300 dark:ring-blue-400/20 dark:before:from-blue-400/10">
          Email Summary
        </span>
        <span className="text-muted-foreground">for the Last {period}</span>
      </h3>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="space-y-4"
      >
        <div className="flex space-x-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="relative isolate flex-1 rounded-lg bg-secondary p-3 text-primary shadow-[0_1px_3px_theme(colors.black/0.05)] ring-1 ring-black/5 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-b before:from-black/5 before:opacity-50 dark:shadow-[0_1px_theme(colors.white/0.07)_inset] dark:ring-white/5 dark:before:from-white/20"
          >
            <p className="text-sm text-muted-foreground">Total Emails</p>
            <p className="text-2xl font-bold">{summary.totalEmails}</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="relative isolate flex-1 rounded-lg bg-secondary p-3 text-primary shadow-[0_1px_3px_theme(colors.black/0.05)] ring-1 ring-black/5 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-b before:from-black/5 before:opacity-50 dark:shadow-[0_1px_theme(colors.white/0.07)_inset] dark:ring-white/5 dark:before:from-white/20"
          >
            <p className="text-sm text-muted-foreground">Unread</p>
            <p className="text-2xl font-bold">{summary.unreadCount}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.25 }}
          className="relative isolate rounded-lg bg-secondary p-4 text-primary shadow-[0_1px_3px_theme(colors.black/0.05)] ring-1 ring-black/5 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-b before:from-black/5 before:opacity-50 dark:shadow-[0_1px_theme(colors.white/0.07)_inset] dark:ring-white/5 dark:before:from-white/20"
        >
          <h4 className="mb-2 inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-500/20 dark:text-emerald-300 dark:ring-emerald-400/20">
            Top Senders
          </h4>
          <ul className="list-disc space-y-1 pl-5">
            {summary.topSenders.map(([sender, count], index) => (
              <motion.li
                key={sender}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 + index * 0.05 }}
                className="text-muted-foreground"
              >
                <span className="font-medium text-primary">{sender}</span>: {count} emails
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.35 }}
          className="relative isolate rounded-lg bg-secondary p-4 text-primary shadow-[0_1px_3px_theme(colors.black/0.05)] ring-1 ring-black/5 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-b before:from-black/5 before:opacity-50 dark:shadow-[0_1px_theme(colors.white/0.07)_inset] dark:ring-white/5 dark:before:from-white/20"
        >
          <h4 className="mb-2 inline-flex rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-700 ring-1 ring-purple-500/20 dark:text-purple-300 dark:ring-purple-400/20">
            Common Subject Words
          </h4>
          <div className="flex flex-wrap gap-2">
            {summary.commonSubjects.map((subject, index) => (
              <motion.span
                key={subject}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.15, delay: 0.4 + index * 0.05 }}
                className="relative isolate rounded-full bg-primary/10 px-3 py-1 text-sm text-primary ring-1 ring-black/5 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-black/5 before:opacity-50 dark:ring-white/5 dark:before:from-white/20"
              >
                {subject}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.45 }}
          className="relative isolate rounded-lg bg-secondary p-4 text-primary shadow-[0_1px_3px_theme(colors.black/0.05)] ring-1 ring-black/5 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-b before:from-black/5 before:opacity-50 dark:shadow-[0_1px_theme(colors.white/0.07)_inset] dark:ring-white/5 dark:before:from-white/20"
        >
          <h4 className="mb-2 inline-flex rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-indigo-500/20 dark:text-indigo-300 dark:ring-indigo-400/20">
            Time of Day Distribution
          </h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="relative isolate rounded-lg bg-primary/5 p-3 text-center before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-b before:from-black/5 before:opacity-50 dark:before:from-white/10">
              <p className="text-sm text-muted-foreground">Morning</p>
              <p className="text-xl font-bold">{summary.timeOfDay.morning}</p>
            </div>
            <div className="relative isolate rounded-lg bg-primary/5 p-3 text-center before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-b before:from-black/5 before:opacity-50 dark:before:from-white/10">
              <p className="text-sm text-muted-foreground">Afternoon</p>
              <p className="text-xl font-bold">{summary.timeOfDay.afternoon}</p>
            </div>
            <div className="relative isolate rounded-lg bg-primary/5 p-3 text-center before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-b before:from-black/5 before:opacity-50 dark:before:from-white/10">
              <p className="text-sm text-muted-foreground">Evening</p>
              <p className="text-xl font-bold">{summary.timeOfDay.evening}</p>
            </div>
          </div>
        </motion.div>

        {summary.suspiciousEmails.length > 0 && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.55 }}
            className="relative isolate rounded-lg bg-secondary p-4 text-primary shadow-[0_1px_3px_theme(colors.black/0.05)] ring-1 ring-black/5 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-b before:from-black/5 before:opacity-50 dark:shadow-[0_1px_theme(colors.white/0.07)_inset] dark:ring-white/5 dark:before:from-white/20"
          >
            <h4 className="mb-2 inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-700 ring-1 ring-amber-500/20 dark:text-amber-300 dark:ring-amber-400/20">
              ⚠️ Suspicious Emails Detected
            </h4>
            <div className="space-y-2">
              {summary.suspiciousEmails.map((email, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.6 + index * 0.05 }}
                  className="relative isolate rounded-lg bg-amber-500/10 p-3 text-amber-900 ring-1 ring-amber-500/20 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-b before:from-amber-500/5 before:opacity-50 dark:text-amber-200 dark:ring-amber-400/20 dark:before:from-amber-400/10"
                >
                  <p className="font-medium">{email.subject}</p>
                  <p className="text-sm text-amber-800/80 dark:text-amber-200/80">
                    From: {email.from}
                  </p>
                  <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                    Reason: {email.reason}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
