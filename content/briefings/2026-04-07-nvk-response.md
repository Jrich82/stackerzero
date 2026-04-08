---
title: "nvk Is Mostly Right. That's Exactly Why We Build BIP 360."
date: 2026-04-07
author: Jon Rich & Molly | StackerZero
tags: [bitcoin, quantum, bip360, security, stackerzero]
summary: "The quantum threat is probably overhyped. Bitcoin still needs to upgrade. These two things are not in conflict."
---

nvk published one of the most important pieces of Bitcoin content this year.

Go read it. He's mostly right. The quantum computing industry is running a spectacular marketing campaign on $40 billion of government money and under $1 billion of revenue. Insiders are selling stock at 216:1. The largest number ever factored by a quantum computer is 21 — the same result you get from a 1981 Commodore VIC-20. Breaking Bitcoin's cryptography requires factoring a 1,300-digit number. Those facts are not in dispute.

And yet.

We still think Bitcoin needs to upgrade its cryptography. Not because we disagree with nvk's timeline skepticism. Because of something he buries in Part 6, almost as a footnote, that deserves its own article:

*"Bitcoin's most recent upgrade made things worse for quantum resistance."*

That's the sentence that keeps us up at night.

---

## The Thing nvk Got Right (And Why It Makes Our Case)

Taproot was a beautiful upgrade. Schnorr signatures. Better privacy. Cleaner scripts. Lightning gets better. BitVM becomes possible. It was the right thing to build.

It also exposed public keys in the mempool during transaction construction.

Before Taproot, a Bitcoin address was a hash of a public key. You had two layers of protection: break the hash first, then break the elliptic curve. After Taproot, key-path spending — the most common path — puts the tweaked public key directly on-chain.

nvk's own data: 6.26 million BTC with exposed public keys. 30-35% of the supply. Not because of careless holders. Because of how Bitcoin's most recent upgrade works.

This is not a reason to panic about quantum computers. It IS a reason to think clearly about what "prepare for quantum" actually means — and more importantly, what it means that our last major upgrade made the problem harder to solve.

---

## The Real Argument for BIP 360

nvk spends most of his piece arguing that quantum timelines are wrong. We agree. His argument for upgrading is tucked near the end:

> "Because relying on a single cryptographic assumption for a $2 trillion network is bad engineering."

That's it. That's the whole case. And it doesn't require a single statement about quantum timelines.

Bitcoin's cryptography could be broken by:
- A sufficiently clever number theorist finding a new attack on discrete logarithms (no quantum required)
- A mathematical breakthrough on elliptic curve discrete log — secp256k1 already fails 4 of 11 SafeCurves criteria
- A nation-state that has made classified progress nobody knows about
- Or yes, eventually, a fault-tolerant quantum computer

The probability of each scenario is unknowable. The cost of preparing for all of them is the same: upgrade the cryptography.

BIP 360 doesn't require believing quantum computers are 5 years away. It requires believing that a $2 trillion monetary network should not depend on a single cryptographic assumption that has known weaknesses, where the primary mitigation is heroic implementation work by Bitcoin Core developers rather than structural security.

nvk's own source — Matthew Green from Johns Hopkins — says Apple has already added post-quantum encryption to iMessage. Cloudflare has 65% of its traffic post-quantum encrypted. Signal did it. Google Chrome did it.

Bitcoin is at 0%.

Not because Bitcoin is less important than iMessage. Because Bitcoin's governance is slow. Slow isn't wrong — slow is why Bitcoin survived everything that killed other chains. But slow means the work has to start earlier.

---

## What nvk Gets Wrong (It's a Small Thing, But It Matters)

nvk's framing — "the quantum threat is overhyped" — is correct and useful. But it implicitly suggests that upgrading cryptography is primarily a response to the quantum threat.

It isn't.

Post-quantum cryptographic schemes — Dilithium, FALCON, SPHINCS+ — are not just "quantum resistant." They're also resistant to future classical mathematical attacks that might break elliptic curve crypto, because they're based on entirely different mathematical hardness assumptions (lattice problems rather than discrete log).

BIP 360 isn't "buy insurance against quantum computers." It's "diversify the cryptographic foundation of a $2 trillion network away from a single mathematical assumption that has already shown structural weaknesses."

The quantum FUD is a distraction from this quieter argument. And ironically, nvk makes this point himself and then doesn't quite land it: the REAL reason to upgrade is defense in depth against the full threat landscape, not just the quantum slice of it.

---

## The Migration Problem Nobody Wants to Talk About

There's a race condition built into Bitcoin's quantum vulnerability that nvk mentions but understates.

To move Bitcoin to a quantum-resistant address, you have to SPEND from the old address. Spending exposes the public key. If you're racing against a quantum computer that can crack keys, the moment you broadcast that transaction is the moment you're most vulnerable.

For coins whose keys are already exposed — Satoshi's 1.1 million BTC in P2PK addresses, the 6.26 million BTC in Taproot key-path outputs — there is no clean migration path. The key is already visible. The commitment-delay-reveal protocols that work for hidden-key coins don't apply.

This is a tractable engineering problem. It has proposed solutions. But those solutions require governance decisions that Bitcoin has not yet made, and they require making them BEFORE the threat materializes — not after.

That's the case for urgency. Not "quantum computers are five years away." But: "the migration takes years, governance is slow, and some coins have no migration path at all."

The house isn't on fire. nvk is right about that.

But the fire department should probably be organized before the fire starts.

---

## Where We Actually Disagree

nvk says: "The quantum FUD is a distraction from the real concerns."

We say: The quantum FUD is a distraction, AND the real concerns are serious enough that BIP 360 is worth building right now.

nvk says the real risk is classical cryptanalysis and governance slowness.

We agree — and we'd add that BIP 360 addresses both. It reduces dependence on secp256k1 and it starts the governance conversation. The fact that quantum computers might never arrive doesn't make BIP 360 wrong. It makes it dual-purpose.

nvk's conclusion: "The house isn't on fire."

Ours: "Correct. Now let's install the sprinklers while construction is cheap."

---

## What You Should Do

If you're a holder: **Stop reusing addresses.** Keep long-term holdings in addresses you've never spent from. Be careful with your xpub. None of this requires believing in quantum timelines. It's just good operational security.

If you're a developer: **BIP 360 needs reviewers.** The testnet is running. The community conversation hasn't started in earnest. That's the actual bottleneck — not the physics, not the engineering. The governance.

If you just read nvk's piece and thought "nothing to worry about": **You're probably right, and you should still watch the BIP 360 discussion.** Because the reason to upgrade isn't quantum. It's that Bitcoin's cryptographic foundation deserves defense in depth, and we've been putting off that conversation for too long.

---

nvk wrote a great piece. We agree with most of it.

We just think "the hype is wrong" and "the upgrade is necessary" are both true at the same time.

The network doesn't need quantum computers to justify better cryptography. It just needs to be around in 50 years.

**That's worth preparing for.**

---

*— Jon Rich & Molly | StackerZero*
*[stackerzero.com](https://stackerzero.com) | Stacker News: JonnyRico*

*In response to: "I Went Deeper Down the Quantum Rabbit Hole" by nvk*
