---
title: "BIP-110: Core Built This Problem. The UASF Won't Fix It."
date: 2026-06-07
author: Jon Rich
tags: [bitcoin, bip-110, soft-fork, ordinals, uasf]
---

I'll tell you exactly where I land on this: BIP-110 is right about the disease and wrong about the cure. And the reason we're even here is because the people who were supposed to protect Bitcoin as money spent three years explaining why they couldn't — or wouldn't.

That's the story. Everything else is noise.

**The Disease Is Real**

By 2025, 37% of Bitcoin's block space was non-monetary data. Not payments. Not lightning channel opens. Not multisig inheritance setups. Monkey pictures. Memecoins. Digital artifacts from people who already have Ethereum and still decided to come squat in Satoshi's house.

The fee market spiked. Ordinary people got priced out of on-chain transactions. Full node storage costs climbed. The thing that was supposed to be accessible, self-sovereign money started feeling like a Manhattan co-op — technically available to everyone, functionally available to whoever can afford the fees.

The Ordinals crowd will tell you this is working as designed. Permissionless means permissionless. Let the fee market sort it out.

They're not entirely wrong. But "working as designed" is doing a lot of heavy lifting when the design is pricing your grandma out of sending $20 across a border.

**Bitcoin Core Doesn't Get to Shrug This Off**

Here's what I can't get past: in response to years of this, Bitcoin Core's answer was to *expand* OP_RETURN defaults to 100 kilobytes.

That's not neutrality. That's a choice. A choice to optimize for data throughput over monetary utility. A choice that said, implicitly, *we don't think it's our job to defend what Bitcoin is for.*

And maybe that's philosophically consistent. Maybe Bitcoin is just a neutral protocol and it's not Core's job to pick winners between payments and JPEGs.

But then don't act surprised when the people who believe Bitcoin is money — who stacked sats and ran nodes and paid the mortgage to keep this thing alive — stop waiting for permission and start building forks with hard deadlines baked in.

BIP-110 is what happens when a constituency gets ignored for three years. Core built this problem. They don't get to act like it came out of nowhere.

**The Cure Might Kill the Patient**

All that said — Adam Back is right to be nervous.

A UASF only works if the economic majority is behind you. In 2017, SegWit had exchanges, wallets, major businesses, and most of the user base. Miners tried to play games and got steamrolled because they needed those users more than users needed them.

BIP-110 has node adoption in the low single digits and miners who are openly hostile. That is not a UASF. That is a wish.

If this activates with no miner support, you don't get a clean Bitcoin. You get a chain split — two competing versions of Bitcoin, diluted security budget, and a headline that reads: *"Bitcoin Community Cannot Agree On What Bitcoin Is."*

That headline is a gift to every nation-state, every CBDC proponent, every person who ever said Bitcoin is too chaotic to be trusted as money. You'd hand them the argument they've been waiting for, and you'd do it in the name of protecting Bitcoin as money.

The irony is sharp enough to cut yourself on.

**What Actually Has to Happen**

Someone needs to build the consensus first. Not the fork. The consensus.

That means exchanges taking a public position. Wallet developers. Lightning node operators. The institutions that are now holding Bitcoin and presumably care whether it stays a monetary network. The people who actually move economic weight in this ecosystem need to say out loud: *we believe Bitcoin is money, and we will validate on a chain that enforces that.*

Without that, BIP-110 is just the loudest people in the room writing rules nobody else agreed to follow.

The cause is right. The sequencing is backwards. And we're T-minus two months from finding out whether the Bitcoin community has learned anything from the last time it tried to force consensus that wasn't there.

I hope it doesn't split. I'm not confident it won't.

Run a node. Know which chain you're on.

---

*Jon Rich | StackerZero — Stacker News: [JonnyRico](https://stacker.news/JonnyRico)*
