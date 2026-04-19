---
title: "BIP 361: Should We Freeze 6.7 Million Bitcoin?"
date: "2026-04-19"
author: "Jon Rich"
tags: ["bitcoin", "bip361", "quantum", "governance", "privacy"]
summary: "The hottest Bitcoin governance debate of 2026. Jameson Lopp co-authored a proposal to permanently freeze 6.7 million quantum-vulnerable Bitcoin. The community is split. Here's where I land."
---

# BIP 361: Should We Freeze 6.7 Million Bitcoin?

I want to talk about the most interesting — and honestly kind of unsettling — Bitcoin debate happening right now.

BIP 361. The quantum vulnerability proposal. If you haven't heard of it, buckle up.

Here's the short version: there are roughly 6.7 million Bitcoin sitting in what's called P2PK addresses — a legacy address format from the early days of Bitcoin, including coins widely believed to be Satoshi's. These addresses expose the public key directly on the blockchain, which makes them theoretically vulnerable to a sufficiently powerful quantum computer. Quantum computers capable of exploiting this don't exist yet. But "yet" is doing a lot of work in that sentence.

Jameson Lopp — a well-known cryptographer and cypherpunk who's been in the Bitcoin space for years — co-authored BIP 361. The proposal outlines a three-phase migration plan. Phases 1 and 2 give owners of vulnerable coins time to migrate to safer address types. Phase 3 is the part that's splitting the community: coins that haven't migrated would be frozen. Permanently. Unable to be spent.

6.7 million Bitcoin. Gone from circulation. Forever.

I hold bc1q addresses — native SegWit. I'm not directly affected by this. My coins aren't in the vulnerable pool. So I want to be clear that my concern here isn't personal financial interest. It's something more fundamental.

Bitcoin's whole promise — the thing that makes it different from every other financial system I've ever had to trust and get burned by — is that nobody can take your coins. Not a government. Not a bank. Not a developer team. The rules are the rules, and the rules don't change because someone with authority decides they should.

"Not your keys, not your coins" is a principle I believe in. But there's an implicit extension of that: *your* coins, your rules. Your coins don't get frozen because someone decided the address type you used was inconvenient.

I understand the argument on the other side. I really do. If quantum computers break Bitcoin's cryptographic assumptions, the whole thing could unravel. Protecting the network might require hard choices. The people who are advocating for BIP 361 are not villains — they're trying to protect something they care about. Jameson Lopp has earned his credibility in this space. I'm not dismissing the concern.

But here's where I land: the moment we establish that Bitcoin's governance can make coins unspendable based on assumptions about future technology, we've opened a door that I don't think we can close. Today it's quantum-vulnerable UTXOs. What's the next edge case that justifies another exception?

The coins that haven't moved — including Satoshi's — might belong to someone who's dead. Might belong to someone who lost their keys. Might belong to someone who's been in a coma for ten years. Might belong to someone who deliberately stored coins in cold storage using the address format that existed when they started and reasonably expected that format to be honored.

Bitcoin isn't supposed to require you to keep up with protocol upgrades to keep your money.

I'm not saying the quantum threat isn't real. I'm saying that the cure might be worse than the disease, and that working-class people who put their savings in Bitcoin because they couldn't trust banks shouldn't have to wonder if their coins are safe from the developers either.

The debate isn't settled. It shouldn't be rushed. And whatever gets decided, it better be decided by the community — not by the loudest voices with the most GitHub commits.

That's the Bitcoin I signed up for. I'm watching this one closely.

---

*Read BIP 361 yourself: [github.com/bitcoin/bips](https://github.com/bitcoin/bips)*
