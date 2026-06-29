---
title: "They Called It Spam. That's How It Always Starts."
date: 2026-06-28
author: Jon Rich | StackerZero
tags: [bitcoin, bip-110, soft-fork, ordinals, opinion, governance]
summary: "I never liked Ordinals. So when BIP-110 showed up, part of me wanted to cheer. I didn't. Here's why."
---

I'm not an Ordinals guy.

Never minted one. Thought the whole thing was kind of dumb when it took off in 2023 — paying real fees to store a JPEG on the most expensive database in human history. I said as much and moved on.

So when BIP-110 showed up, part of me wanted to cheer.

I didn't.

BIP-110 is called the Reduced Data Temporary Softfork. It's a soft fork, drafted by a developer named Dathon Ohm and assigned in December 2025. If it activates, it spends roughly a year making certain transaction patterns invalid — the ones that let people pack arbitrary data into Bitcoin blocks. ScriptPubKey outputs over 34 bytes. Witness items over 256 bytes. Several Taproot features, temporarily restricted. Supporters include Bitcoin Knots advocates, the Ocean pool, and on X, names like hodlonaut and Fred Krueger are making noise.

That last part is where I started getting uncomfortable.

Krueger ran a poll. Got 790 responses. 62% said yes to BIP-110. Then he wrote — I'm paraphrasing — that his 300,000 followers are statistically in favor of the proposal.

790 votes out of 300,000 followers.

That's not statistics. That's wishful thinking with a confidence interval.

I'm not dunking on Fred. I'm pointing at something real: people who want this badly enough are convincing themselves the consensus is already there. They're not asking whether most Bitcoin users want this. They're asking whether the people who saw their poll clicked yes. That's the same motivated reasoning that powered every bad Bitcoin governance fight over the last decade.

The technical problems with BIP-110 aren't just vibes either. The activation mechanism targets block 961,632 — August 2026. During that mandatory signaling window, nodes running BIP-110 software will reject blocks from miners who don't signal. Not discourage. Reject. Miners face real economic consequences for non-compliance. That's coercion wearing the clothes of a BIP.

The "temporary" framing does a lot of heavy lifting here. One year. Then the restrictions expire, everything goes back to normal. Except you just proved something: if enough people get loud enough about a use of Bitcoin block space they don't like, the protocol can be bent to exclude it. That lever exists now. It always will. Who decides what counts as spam in year two?

Today it's Ordinals. I never liked Ordinals. But the answer to "who decides what's valid on Bitcoin" cannot be "whoever wins the Twitter poll."

Bitcoin's whole proposition — the one I believed in enough to stack for years, to sell near the top and use it to build something real, to come back to at $60K while the world falls apart — is that nobody gets to decide. Not miners. Not developers. Not hodlonaut. Not me.

The critics of BIP-110 took heat for saying only six people on X support this thing. Turns out that wasn't right. Real support for a bad idea is still a bad idea.

The Reddit moderation angle matters too. If pro-BIP-110 posts were getting scrubbed, the "nobody wants this" crowd was measuring echo chamber noise and calling it consensus. That cuts both ways. The echo chamber problem didn't disappear — it just flipped.

I want Bitcoin to be money. A network nobody controls. A ledger nobody rewrites. Money nobody can take. I came to that from the outside, without a CS degree or a conference lanyard, the hard way.

BIP-110 is well-intentioned. Some smart people believe in it. The frustration with Ordinals isn't completely wrong.

None of that is the point.

The point is this: you don't protect a censorship-resistant network by adding censorship. Even temporary censorship. Even censorship of things you don't like.

That's where StackerZero stands.

---

*Jon Rich | StackerZero — Stacker News: [JonnyRico](https://stacker.news/JonnyRico)*
