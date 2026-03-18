import { siteConfig } from "@/config/content";
import { Heart, Repeat2, Twitter } from "lucide-react";

/**
 * TwitterFeed — Curated X/Twitter feed component
 *
 * HOW IT WORKS:
 * Currently renders placeholder tweets from config/content.ts.
 *
 * TO CONNECT TO LIVE DATA:
 * 1. Create an edge function that calls the X API v2:
 *    GET https://api.x.com/2/tweets/search/recent
 *    ?query=from:{username} {hashtag}
 *    &tweet.fields=created_at,public_metrics
 * 2. Set TWITTER_BEARER_TOKEN as a secret
 * 3. Replace placeholderTweets with fetched data
 *
 * CONFIGURATION (in src/config/content.ts → twitter):
 *   username:  your X handle (without @)
 *   hashtag:   only tweets containing this hashtag will show
 */

const TwitterFeed = () => {
  const { username, hashtag, placeholderTweets } = siteConfig.twitter;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <Twitter size={16} className="text-accent" />
        <span>
          Live from <span className="font-semibold text-foreground">@{username}</span>{" "}
          <span className="text-accent">{hashtag}</span>
        </span>
      </div>

      <div className="flex flex-col gap-3 max-h-[360px] overflow-y-auto pr-1">
        {placeholderTweets.map((tweet) => (
          <div
            key={tweet.id}
            className="rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-sm"
          >
            <p className="text-sm leading-relaxed text-foreground">{tweet.text}</p>
            <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
              <span>{tweet.date}</span>
              <span className="flex items-center gap-1">
                <Heart size={12} /> {tweet.likes}
              </span>
              <span className="flex items-center gap-1">
                <Repeat2 size={12} /> {tweet.retweets}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwitterFeed;
